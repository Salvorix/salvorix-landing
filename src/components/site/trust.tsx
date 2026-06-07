type Archetype = {
  label: string;
  detail: string;
  tier: string;
};

const ARCHETYPES: Archetype[] = [
  {
    label: "Single-pit IUP",
    detail: "Under 5,000 t/month · Nickel laterite · Sulawesi",
    tier: "Pit plan",
  },
  {
    label: "Multi-pit contractor",
    detail: "10,000–30,000 t/month · Coal · Kalimantan",
    tier: "Bench plan",
  },
  {
    label: "Mid-tier producer",
    detail: "30,000+ t/month · Gold · Maluku",
    tier: "Mill plan",
  },
];

export function Trust() {
  return (
    <section
      id="trust"
      className="border-b border-ink-200/60 dark:border-ink-700/60"
    >
      <div className="mx-auto max-w-[1400px] px-6 py-20 md:py-24">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <h2 className="text-[clamp(1.6rem,3vw,2.4rem)] font-semibold leading-[1.1] tracking-[-0.015em] text-ink-900 dark:text-ink-50">
              Built for operators
              <br />
              across the archipelago.
            </h2>
          </div>
          <p className="max-w-[44ch] text-[15px] leading-[1.55] text-ink-600 dark:text-ink-300">
            From single-pit IUP holders to mid-tier producers moving 30,000 t a
            month. Active deployments across Kalimantan, Sulawesi, Maluku, and
            Sumatera.
          </p>
        </div>

        <ul
          aria-label="Operator archetypes using Salvorix"
          className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-3"
        >
          {ARCHETYPES.map((a) => (
            <li
              key={a.label}
              className="flex flex-col gap-4 rounded-lg border border-ink-200 bg-white/60 px-6 py-7 dark:border-ink-700 dark:bg-ink-900/60"
            >
              <div className="flex items-start justify-between gap-3">
                <h3 className="text-[17px] font-semibold leading-[1.3] tracking-[-0.01em] text-ink-900 dark:text-ink-50">
                  {a.label}
                </h3>
                <span className="shrink-0 rounded-full border border-ink-300 px-2.5 py-0.5 text-[11px] font-medium tracking-wide text-ink-700 dark:border-ink-700 dark:text-ink-200">
                  {a.tier}
                </span>
              </div>
              <p className="text-[14px] leading-[1.55] text-ink-600 dark:text-ink-300">
                {a.detail}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
