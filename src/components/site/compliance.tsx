type Step = { day: string; title: string; body: string };

const STEPS: Step[] = [
  {
    day: "01",
    title: "Shift end at the pit",
    body: "Operator logs tonnage and grade on a glove-friendly form. Photo of the weighbridge slip, attached.",
  },
  {
    day: "02",
    title: "Assay return",
    body: "Lab results drop into the same record. Grade and recovery auto-recompute against the block plan.",
  },
  {
    day: "03",
    title: "Manager review",
    body: "Pit manager signs off. Any variance above 5% needs a one-line justification, attached to the row.",
  },
  {
    day: "04",
    title: "Monthly close",
    body: "On the first of the month, the Minerba PDF renders. Royalty, PPh, and RKAB tables pre-filled.",
  },
  {
    day: "05",
    title: "Submission",
    body: "Sign with the company certificate, file to the SIMP portal, archive the signed copy to the audit log.",
  },
];

export function Compliance() {
  return (
    <section
      id="compliance"
      className="border-b border-ink-200/60 bg-ink-100/40 dark:border-ink-700/60 dark:bg-ink-900/40"
    >
      <div className="mx-auto max-w-[1400px] px-6 py-24 md:py-32">
        <div className="max-w-[60ch]">
          <h2 className="text-[clamp(2rem,4vw,3.25rem)] font-semibold leading-[1.05] tracking-[-0.02em] text-ink-900 dark:text-ink-50">
            Compliance as a side effect
            <br />
            of doing the work.
          </h2>
          <p className="mt-5 text-[17px] leading-[1.55] text-ink-600 dark:text-ink-300">
            Every daily log, every assay, every signature is captured in the
            flow of the shift. By the time the month ends, the Minerba report
            is already done. We do not run a separate compliance team to fix
            the data later.
          </p>
        </div>

        <ol className="mt-16 grid grid-cols-1 gap-px overflow-hidden rounded-lg border border-ink-200 bg-ink-200/60 dark:border-ink-700 dark:bg-ink-800/60 md:grid-cols-5">
          {STEPS.map((s, i) => (
            <li
              key={s.day}
              className="relative flex flex-col gap-3 bg-ink-50 p-6 dark:bg-ink-950"
            >
              <div className="flex items-center justify-between">
                <span className="ticker text-[11px] text-ink-400">
                  step {s.day}
                </span>
                {i < STEPS.length - 1 && (
                  <span
                    aria-hidden="true"
                    className="hidden h-px w-8 bg-ink-300 dark:bg-ink-700 md:block"
                  />
                )}
              </div>
              <h3 className="text-[17px] font-semibold leading-[1.3] text-ink-900 dark:text-ink-50">
                {s.title}
              </h3>
              <p className="text-[14px] leading-[1.55] text-ink-600 dark:text-ink-300">
                {s.body}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
