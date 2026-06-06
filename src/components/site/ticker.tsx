type Quote = { code: string; name: string; px: string; delta: string; up: boolean };

const QUOTES: Quote[] = [
  { code: "AU", name: "Gold", px: "2,387.40", delta: "+0.84%", up: true },
  { code: "AG", name: "Silver", px: "30.21", delta: "+0.12%", up: true },
  { code: "CU", name: "Copper", px: "9,142.00", delta: "-0.36%", up: false },
  { code: "NI", name: "Nickel", px: "17,815.00", delta: "+1.42%", up: true },
  { code: "CO", name: "Cobalt", px: "23,440.00", delta: "-0.91%", up: false },
  { code: "SN", name: "Tin", px: "31,205.00", delta: "+0.55%", up: true },
  { code: "AL", name: "Alumina", px: "412.00", delta: "+0.18%", up: true },
  { code: "FE", name: "Iron Ore 62%", px: "117.85", delta: "-0.22%", up: false },
];

const SHIFTS = [
  { site: "Site-01 Taniwel", ore: "Au 4.21 g/t", tonnes: "1,840 t", status: "In session" },
  { site: "Site-02 Bantaeng", ore: "Ni 1.84%", tonnes: "2,114 t", status: "Crushing" },
  { site: "Site-03 Halmahera", ore: "Co 0.32%", tonnes: "612 t", status: "Assay pending" },
  { site: "Site-04 Morowali", ore: "Ni 1.51%", tonnes: "3,027 t", status: "In session" },
];

export function Ticker() {
  const items = [...QUOTES, ...QUOTES];
  return (
    <div className="border-y border-ink-200/60 bg-ink-100/50 dark:border-ink-700/60 dark:bg-ink-900/50">
      <div className="mx-auto max-w-[1400px] overflow-hidden">
        <div className="ticker-track flex w-max items-center gap-10 py-2.5 text-[12px]">
          {items.map((q, i) => (
            <div key={i} className="flex items-center gap-2 ticker">
              <span className="text-ink-500 dark:text-ink-400">{q.code}</span>
              <span className="font-medium text-ink-900 dark:text-ink-50">
                {q.name}
              </span>
              <span className="text-ink-700 dark:text-ink-200">{q.px}</span>
              <span className={q.up ? "text-ore" : "text-bleed"}>
                {q.delta}
              </span>
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
