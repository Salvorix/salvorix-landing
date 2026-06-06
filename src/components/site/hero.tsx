import Link from "next/link";

export function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-ink-200/60 dark:border-ink-700/60">
      <div className="mx-auto max-w-[1400px] px-6 pt-20 pb-24 md:pt-24 md:pb-32">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-10">
          <div className="lg:col-span-7">
            <p className="stamped mb-6 text-ink-500 dark:text-ink-400">
              <span className="mr-2 inline-block h-1.5 w-1.5 rounded-full bg-hazard align-middle" />
              Mining compliance ERP · IDR-denominated
            </p>
            <h1 className="text-[clamp(2.4rem,6vw,4.5rem)] font-semibold leading-[1.02] tracking-[-0.025em] text-ink-900 dark:text-ink-50">
              From pit face
              <br />
              to Minerba submission,
              <br />
              <span className="text-hazard">in one ledger.</span>
            </h1>
            <p className="mt-7 max-w-[60ch] text-lg leading-[1.55] text-ink-600 dark:text-ink-300">
              Salvorix replaces the spreadsheets, the WhatsApp screenshots, and
              the desk-bound compliance officer. Track tonnage, grade, and
              recovery at the source. Generate the monthly report the
              Direktorat Jenderal Mineral dan Batubara expects.
            </p>

            <div className="mt-9 flex flex-wrap items-center gap-3">
              <Link
                href="https://app.salvorix.id/sign-up"
                className="inline-flex h-11 items-center rounded-md bg-ink-900 px-5 text-sm font-medium text-ink-50 transition-all hover:-translate-y-px active:translate-y-0 dark:bg-ink-50 dark:text-ink-900"
              >
                Book a site visit
              </Link>
              <Link
                href="#modules"
                className="inline-flex h-11 items-center rounded-md border border-ink-300 px-5 text-sm font-medium text-ink-800 transition-colors hover:border-ink-500 dark:border-ink-700 dark:text-ink-100 dark:hover:border-ink-500"
              >
                Tour the modules
              </Link>
            </div>
          </div>

          <aside className="lg:col-span-5">
            <div className="rounded-lg border border-ink-200 bg-white/60 p-1 dark:border-ink-700 dark:bg-ink-900/60">
              <div className="flex items-center justify-between border-b border-ink-200 px-4 py-2.5 dark:border-ink-700">
                <div className="flex items-center gap-2">
                  <span className="status-dot h-2 w-2 rounded-full bg-ore" />
                  <span className="stamped text-ink-700 dark:text-ink-200">
                    Daily shift · 06:00 WIT
                  </span>
                </div>
                <span className="stamped text-ink-400">form PLG-04</span>
              </div>
              <div className="grid grid-cols-2 divide-x divide-ink-200 dark:divide-ink-700">
                <Field label="Pit" value="Pit B-3" />
                <Field label="Block" value="B-3 / 12-14" />
                <Field label="Tonnage" value="1,840 t" mono />
                <Field label="Grade Au" value="4.21 g/t" mono />
                <Field label="Recovery" value="91.4%" mono />
                <Field label="Strip ratio" value="2.8" mono />
              </div>
              <div className="border-t border-ink-200 p-4 dark:border-ink-700">
                <p className="stamped mb-2 text-ink-500 dark:text-ink-400">
                  Recovery delta vs plan
                </p>
                <div className="flex items-baseline gap-3">
                  <span className="ticker text-3xl font-medium text-ink-900 dark:text-ink-50">
                    +1.8%
                  </span>
                  <span className="text-sm text-ore">on plan</span>
                </div>
                <div className="mt-3 h-1 w-full overflow-hidden rounded-full bg-ink-200 dark:bg-ink-800">
                  <div className="h-full w-[68%] rounded-full bg-ore" />
                </div>
              </div>
            </div>
            <p className="mt-3 text-xs text-ink-500 dark:text-ink-400">
              Sample daily log entry. Real data lives behind your tenant wall.
            </p>
          </aside>
        </div>
      </div>
    </section>
  );
}

function Field({
  label,
  value,
  mono = false,
}: {
  label: string;
  value: string;
  mono?: boolean;
}) {
  return (
    <div className="px-4 py-3">
      <p className="stamped text-ink-500 dark:text-ink-400">{label}</p>
      <p
        className={`mt-1 text-[15px] text-ink-900 dark:text-ink-50 ${mono ? "ticker" : ""}`}
      >
        {value}
      </p>
    </div>
  );
}
