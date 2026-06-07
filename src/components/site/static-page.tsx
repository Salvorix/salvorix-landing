import Link from "next/link";
import { Nav } from "@/components/site/nav";
import { Footer } from "@/components/site/footer";
import { Cta } from "@/components/site/cta";

type StaticPageProps = {
  eyebrow: string;
  title: string;
  description: string;
  comingSoon?: boolean;
} & (
  | { comingSoon: true; body?: string }
  | { comingSoon?: false; body: string }
);

export function StaticPage({
  eyebrow,
  title,
  description,
  comingSoon = false,
  body,
}: StaticPageProps) {
  return (
    <>
      <Nav />
      <main>
        <section className="border-b border-ink-200/60 dark:border-ink-700/60">
          <div className="mx-auto max-w-[1400px] px-6 py-24 md:py-32">
            <p className="stamped text-ink-500 dark:text-ink-400">
              {eyebrow}
            </p>
            <h1 className="mt-5 max-w-[20ch] text-[clamp(2rem,4.5vw,3.5rem)] font-semibold leading-[1.05] tracking-[-0.025em] text-ink-900 dark:text-ink-50">
              {title}
            </h1>
            <p className="mt-6 max-w-[60ch] text-[17px] leading-[1.55] text-ink-600 dark:text-ink-300">
              {description}
            </p>

            {comingSoon ? (
              <div className="mt-12 flex flex-wrap items-center gap-3">
                <Link
                  href="/"
                  className="inline-flex h-11 items-center justify-center rounded-md bg-ink-900 px-5 text-sm font-medium text-ink-50 transition-all hover:-translate-y-px active:translate-y-0 dark:bg-ink-50 dark:text-ink-900"
                >
                  Back to home
                </Link>
                <Link
                  href="mailto:ops@salvorix-app.heulaulab.xyz"
                  className="inline-flex h-11 items-center justify-center rounded-md border border-ink-300 px-5 text-sm font-medium text-ink-800 transition-colors hover:border-ink-500 dark:border-ink-700 dark:text-ink-100 dark:hover:border-ink-500"
                >
                  Email ops
                </Link>
              </div>
            ) : (
              <div className="mt-12 max-w-[60ch] text-[15px] leading-[1.6] text-ink-600 dark:text-ink-300">
                {body}
              </div>
            )}
          </div>
        </section>
        {comingSoon && <Cta />}
      </main>
      <Footer />
    </>
  );
}
