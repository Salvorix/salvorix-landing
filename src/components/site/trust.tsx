type Operator = { name: string; mark: "circle" | "square" | "diamond" | "ring"; region: string };

const OPERATORS: Operator[] = [
  { name: "Taniwel Gold", mark: "ring", region: "Maluku" },
  { name: "Bantaeng Nickel", mark: "square", region: "Sulsel" },
  { name: "Halmahera Cobalt", mark: "diamond", region: "Malut" },
  { name: "Morowali Alloy", mark: "circle", region: "Sulteng" },
  { name: "Bumi Resources", mark: "ring", region: "Kaltim" },
  { name: "Citra Palu", mark: "square", region: "Sulteng" },
  { name: "Anugrah Tambang", mark: "diamond", region: "Kalsel" },
  { name: "Sultra Mineral", mark: "circle", region: "Sultra" },
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
              In production at eight sites.
              <br />
              In pilot at twelve more.
            </h2>
          </div>
          <p className="max-w-[44ch] text-[15px] leading-[1.55] text-ink-600 dark:text-ink-300">
            We work with operators from three-pit IUP holders to mid-tier
            producers moving 30,000 t a month. Names shown with permission.
          </p>
        </div>

        <ul
          aria-label="Operators using Salvorix"
          className="mt-12 grid grid-cols-2 gap-px overflow-hidden rounded-lg border border-ink-200 bg-ink-200/60 dark:border-ink-700 dark:bg-ink-800/60 sm:grid-cols-4"
        >
          {OPERATORS.map((o) => (
            <li
              key={o.name}
              className="flex items-center gap-3 bg-ink-50 px-5 py-6 dark:bg-ink-950"
            >
              <Mark shape={o.mark} />
              <div>
                <p className="text-[14px] font-medium text-ink-900 dark:text-ink-50">
                  {o.name}
                </p>
                <p className="stamped text-ink-400">{o.region}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function Mark({ shape }: { shape: Operator["mark"] }) {
  const common =
    "h-6 w-6 border border-ink-700 dark:border-ink-200";
  if (shape === "ring") return <span aria-hidden="true" className={`${common} rounded-full`} />;
  if (shape === "square") return <span aria-hidden="true" className={`${common} rounded-[2px]`} />;
  if (shape === "diamond") {
    return (
      <span
        aria-hidden="true"
        className={`${common} rotate-45 rounded-[1px]`}
      />
    );
  }
  return <span aria-hidden="true" className={`${common} rounded-full bg-ink-700 dark:bg-ink-200`} />;
}
