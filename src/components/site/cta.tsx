import Link from "next/link";

export function Cta() {
  return (
    <section className="border-b border-ink-200/60 dark:border-ink-700/60">
      <div className="mx-auto max-w-[1400px] px-6 py-24 md:py-32">
        <div className="grid grid-cols-1 gap-8 rounded-lg border border-ink-200 bg-ink-100/50 p-10 dark:border-ink-700 dark:bg-ink-900/50 md:grid-cols-12 md:gap-10 md:p-14">
          <div className="md:col-span-7">
            <p className="stamped mb-5 text-ink-500 dark:text-ink-400">
              Next step
            </p>
            <h2 className="text-[clamp(2rem,4.5vw,3.5rem)] font-semibold leading-[1.02] tracking-[-0.025em] text-ink-900 dark:text-ink-50">
              We come to the site.
              <br />
              You bring the hard questions.
            </h2>
            <p className="mt-5 max-w-[58ch] text-[16px] leading-[1.55] text-ink-600 dark:text-ink-300">
              Two days on-site. One pit walk, one shift-side test, one
              compliance review with your team. We leave with a written rollout
              plan, not a sales deck.
            </p>
          </div>

          <div className="flex flex-col gap-3 md:col-span-5 md:items-end md:justify-end">
            <Link
              href="https://app.salvorix.id/sign-up"
              className="inline-flex h-12 w-full items-center justify-center rounded-md bg-ink-900 px-6 text-sm font-medium text-ink-50 transition-all hover:-translate-y-px active:translate-y-0 md:w-auto dark:bg-ink-50 dark:text-ink-900"
            >
              Book a site visit
            </Link>
            <Link
              href="mailto:ops@salvorix.id"
              className="inline-flex h-12 w-full items-center justify-center rounded-md border border-ink-300 px-6 text-sm font-medium text-ink-800 transition-colors hover:border-ink-500 md:w-auto dark:border-ink-700 dark:text-ink-100 dark:hover:border-ink-500"
            >
              Email ops@salvorix.id
            </Link>
            <p className="mt-2 text-right text-xs text-ink-500 dark:text-ink-400">
              Mon-Fri · 08:00-18:00 WIB
              <br />
              Jakarta · Surabaya · Manado
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
