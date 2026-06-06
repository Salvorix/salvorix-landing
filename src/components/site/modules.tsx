type Module = {
  id: string;
  code: string;
  name: string;
  blurb: string;
  lines: { k: string; v: string }[];
  span: "wide" | "tall" | "std";
  tone?: "ore" | "hazard" | "ochre" | "ink";
};

const MODULES: Module[] = [
  {
    id: "production",
    code: "M01",
    name: "Production",
    blurb:
      "Pit, dump, and ROM face tonnage captured at the source. Daily grade and recovery rolled up to the block, then to the mine plan.",
    lines: [
      { k: "Forms", v: "PLG-01, PLG-04, PLG-08" },
      { k: "Cadence", v: "Per shift" },
      { k: "Outputs", v: "ROM, concentrate, tailings" },
    ],
    span: "wide",
    tone: "ore",
  },
  {
    id: "inventory",
    code: "M02",
    name: "Inventory",
    blurb:
      "Locations, lots, and stock cards. Opname that reconciles to the gram, not the spreadsheet.",
    lines: [
      { k: "Locations", v: "Unlimited" },
      { k: "UoM", v: "t, kg, g, oz" },
      { k: "Cycle count", v: "Per location" },
    ],
    span: "std",
    tone: "ink",
  },
  {
    id: "hr",
    code: "M03",
    name: "HR + K3",
    blurb:
      "Shift rosters, attendance, and the certificates that gate a worker onto the pit floor.",
    lines: [
      { k: "Certs", v: "SIO, K3, AK3" },
      { k: "Expiries", v: "Auto-flagged" },
      { k: "Roster", v: "Drag-to-build" },
    ],
    span: "std",
    tone: "hazard",
  },
  {
    id: "compliance",
    code: "M04",
    name: "Minerba Reports",
    blurb:
      "Monthly submission ready. Royalty, PPh, and the RKAB-aligned tables the auditor will ask for.",
    lines: [
      { k: "Cadence", v: "Monthly" },
      { k: "Format", v: "PDF + XLSX" },
      { k: "Sign", v: "Digital stamp" },
    ],
    span: "tall",
    tone: "ochre",
  },
  {
    id: "audit",
    code: "M05",
    name: "Audit Trail",
    blurb:
      "Every insert, update, and delete publishes to the audit log. Tamper-evident, tenant-scoped, queryable.",
    lines: [
      { k: "Retention", v: "7 years" },
      { k: "WORM", v: "Append-only" },
      { k: "Search", v: "Per row" },
    ],
    span: "std",
    tone: "ink",
  },
];

export function Modules() {
  return (
    <section
      id="modules"
      className="border-b border-ink-200/60 dark:border-ink-700/60"
    >
      <div className="mx-auto max-w-[1400px] px-6 py-24 md:py-32">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-12 md:gap-8">
          <div className="md:col-span-5">
            <h2 className="text-[clamp(2rem,4vw,3.25rem)] font-semibold leading-[1.05] tracking-[-0.02em] text-ink-900 dark:text-ink-50">
              Five modules.
              <br />
              One source of truth.
            </h2>
          </div>
          <div className="md:col-span-6 md:col-start-7">
            <p className="text-[17px] leading-[1.55] text-ink-600 dark:text-ink-300">
              Built for the team that walks the pit, the office that files the
              report, and the auditor who checks both. Every module is its own
              service in production. Every record traces back to a person, a
              shift, and a pit block.
            </p>
          </div>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-4 md:grid-cols-6 md:grid-rows-[auto_auto_auto]">
          {MODULES.map((m) => (
            <ModuleCard key={m.id} m={m} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ModuleCard({ m }: { m: Module }) {
  const spanClass =
    m.span === "wide"
      ? "md:col-span-4 md:row-span-1"
      : m.span === "tall"
        ? "md:col-span-2 md:row-span-2"
        : "md:col-span-2 md:row-span-1";

  const accent = m.tone ?? "ink";
  const dotClass =
    accent === "ore"
      ? "bg-ore"
      : accent === "hazard"
        ? "bg-hazard"
        : accent === "ochre"
          ? "bg-ochre"
          : "bg-ink-400";

  return (
    <article
      className={`group relative col-span-1 flex flex-col justify-between overflow-hidden rounded-lg border border-ink-200 bg-white/60 p-6 transition-colors hover:border-ink-400 dark:border-ink-700 dark:bg-ink-900/60 dark:hover:border-ink-500 ${spanClass}`}
    >
      <div className="flex items-center justify-between">
        <span className="ticker text-xs text-ink-400">{m.code}</span>
        <span className={`h-1.5 w-1.5 rounded-full ${dotClass}`} />
      </div>

      <div className="mt-8">
        <h3 className="text-2xl font-semibold tracking-tight text-ink-900 dark:text-ink-50">
          {m.name}
        </h3>
        <p className="mt-2 max-w-[44ch] text-[15px] leading-[1.55] text-ink-600 dark:text-ink-300">
          {m.blurb}
        </p>
      </div>

      <dl className="mt-6 grid grid-cols-3 divide-x divide-ink-200 border-t border-ink-200 pt-4 dark:divide-ink-700 dark:border-ink-700">
        {m.lines.map((l) => (
          <div key={l.k} className="px-2 first:pl-0 last:pr-0">
            <dt className="stamped text-ink-500 dark:text-ink-400">{l.k}</dt>
            <dd className="ticker mt-1 text-sm text-ink-800 dark:text-ink-100">
              {l.v}
            </dd>
          </div>
        ))}
      </dl>
    </article>
  );
}
