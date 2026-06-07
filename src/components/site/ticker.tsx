"use client";

import { useEffect, useState, useRef } from "react";

type SpotResult = { symbol: string; price: number }[];

type Quote = {
  code: string;
  name: string;
  px: string;
  delta?: string;
  up?: boolean;
  live: boolean;
};

type Shift = { site: string; ore: string; tonnes: string; status: string };

const SHIFTS: Shift[] = [
  { site: "Site-01 Taniwel", ore: "Au 4.21 g/t", tonnes: "1,840 t", status: "In session" },
  { site: "Site-02 Bantaeng", ore: "Ni 1.84%", tonnes: "2,114 t", status: "Crushing" },
  { site: "Site-03 Halmahera", ore: "Co 0.32%", tonnes: "612 t", status: "Assay pending" },
  { site: "Site-04 Morowali", ore: "Ni 1.51%", tonnes: "3,027 t", status: "In session" },
];

const LIVE_SYMBOLS = [
  { symbol: "XAU", code: "AU", name: "Gold", unit: "USD/t oz" },
  { symbol: "XAG", code: "AG", name: "Silver", unit: "USD/t oz" },
  { symbol: "XCU", code: "CU", name: "Copper", unit: "USD/tonne" },
];

const STATIC_QUOTES: Quote[] = [
  { code: "NI", name: "Nickel", px: "17,815.00", delta: "", live: false },
  { code: "CO", name: "Cobalt", px: "23,440.00", delta: "", live: false },
  { code: "SN", name: "Tin", px: "31,205.00", delta: "", live: false },
  { code: "AL", name: "Alumina", px: "412.00", delta: "", live: false },
  { code: "FE", name: "Iron Ore 62%", px: "117.85", delta: "", live: false },
];

const FALLBACKS: Record<string, { px: string }> = {
  AU: { px: "2,350.00" },
  AG: { px: "29.80" },
  CU: { px: "9,000.00" },
};

const METALS_API = "https://metals.live/api/spot";

// Module-level cache so server components / re-renders don't refetch
let cachedSpot: SpotResult | null = null;

function formatPrice(price: number, code: string): string {
  if (code === "CU") {
    // metals.live returns per troy oz, convert to per tonne
    const perTonne = price * 32150.7;
    return perTonne.toLocaleString("en-US", {
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    });
  }
  return price.toLocaleString("en-US", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });
}

export function Ticker() {
  const [quotes, setQuotes] = useState<Quote[]>([
    ...LIVE_SYMBOLS.map((s) => ({
      code: s.code,
      name: s.name,
      px: "--",
      unit: s.unit,
      live: true,
    })),
    ...STATIC_QUOTES.map((s) => ({ ...s, delta: s.delta || undefined, up: true })),
  ]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let cancelled = false;

    const fetch = async () => {
      if (cachedSpot && !cancelled) {
        applySpot(cachedSpot);
        return;
      }

      try {
        const res = await fetch(METALS_API);
        const data: SpotResult = await res.json();
        if (!cancelled) {
          cachedSpot = data;
          applySpot(data);
        }
      } catch {
        // Fall back to last-known estimates — do not show error UI
        if (!cancelled) {
          applySpot([]);
        }
      } finally {
        if (!cancelled) setLoading(false);
      }
    };

    const applySpot = (data: SpotResult) => {
      setQuotes((prev) =>
        prev.map((q) => {
          if (!q.live) return q;
          const match = data.find((d) => d.symbol === LIVE_SYMBOLS.find((s) => s.code === q.code)?.symbol);
          if (match) {
            return {
              ...q,
              px: formatPrice(match.price, q.code),
            };
          }
          // No live data — show estimate from fallback
          const fb = FALLBACKS[q.code];
          return fb ? { ...q, px: fb.px } : q;
        })
      );
    };

    fetch();

    return () => {
      cancelled = true;
    };
  }, []);

  return (
    <div className="border-y border-ink-200/60 bg-ink-100/50 dark:border-ink-700/60 dark:bg-ink-900/50">
      <div className="mx-auto max-w-[1400px] overflow-hidden">
        <div className="ticker-track flex w-max items-center gap-10 py-2.5 text-[12px]">
          {quotes.map((q, i) => (
            <div key={i} className="flex items-center gap-2 ticker">
              <span className="text-ink-500 dark:text-ink-400">{q.code}</span>
              <span className="font-medium text-ink-900 dark:text-ink-50">
                {q.name}
              </span>
              <span className="text-ink-700 dark:text-ink-200">{q.px}</span>
              {q.unit && (
                <span className="text-ink-400 dark:text-ink-500 text-[10px]">{q.unit}</span>
              )}
              {q.live && (
                <span className="text-[9px] text-ink-400 dark:text-ink-600">
                  live
                </span>
              )}
              {!q.live && q.delta && q.up !== undefined && (
                <span className={q.up ? "text-ore" : "text-bleed"}>
                  {q.delta}
                </span>
              )}
            </div>
          ))}
        </div>
      </div>
      <div className="mx-auto hidden max-w-[1400px] items-center gap-4 border-t border-ink-200/40 px-6 py-1.5 text-[11px] text-ink-500 dark:border-ink-700/40 dark:text-ink-400 md:flex">
        <span className="stamped">live ops</span>
        <span className="status-dot h-1.5 w-1.5 rounded-full bg-ore" />
        <div className="flex flex-1 flex-wrap gap-x-6">
          {SHIFTS.map((s) => (
            <span key={s.site} className="ticker">
              <span className="text-ink-700 dark:text-ink-200">{s.site}</span>
              <span className="mx-1.5 text-ink-400">/</span>
              <span>{s.ore}</span>
              <span className="mx-1.5 text-ink-400">/</span>
              <span>{s.tonnes}</span>
              <span className="mx-1.5 text-ink-400">/</span>
              <span className="text-hazard">{s.status}</span>
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
