type QA = { q: string; a: string };

const QAS: QA[] = [
  {
    q: "Does Salvorix replace our existing accounting or payroll?",
    a: "No. Salvorix covers pit operations, inventory, HR roster, K3 certifications, and Minerba reporting. Payroll runs on the tool your finance team already trusts. We export signed monthly summaries as XLSX and PDF.",
  },
  {
    q: "Can we run Salvorix on our own server?",
    a: "Yes, on the Mill plan. We ship a Docker Compose stack that runs the gateway, services, Postgres, and Redis on a single 4 vCPU VPS. Coolify and standard reverse proxies are supported. Caddy and Nginx configs included.",
  },
  {
    q: "How long is a typical rollout?",
    a: "Two weeks for the Pit and Bench plans. Week one is data migration (item master, employee roster, existing cert PDFs). Week two is field-side training and the first end-to-end daily log. We work on-site for the first three shifts.",
  },
  {
    q: "What happens to our data if we cancel?",
    a: "You keep ownership. We export the full schema as SQL and CSV bundles, signed and timestamped, within five business days. Your audit log stays queryable for 90 days post-cancellation, then is deleted.",
  },
  {
    q: "Is the Minerba report signed and timestamped?",
    a: "Yes. Each monthly submission is hashed, signed with the company certificate, and archived in the audit log before transmission. The signature is verifiable offline by your auditor.",
  },
];

export function Faq() {
  return (
    <section
      id="faq"
      className="border-b border-ink-200/60 dark:border-ink-700/60"
    >
      <div className="mx-auto max-w-[1400px] px-6 py-24 md:py-32">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-12 md:gap-8">
          <div className="md:col-span-4">
            <h2 className="text-[clamp(1.6rem,3vw,2.4rem)] font-semibold leading-[1.1] tracking-[-0.015em] text-ink-900 dark:text-ink-50">
              Questions the
              <br />
              site manager asks
              <br />
              before signing.
            </h2>
            <p className="mt-5 text-sm text-ink-500 dark:text-ink-400">
              Anything missing? Email{" "}
              <a
                href="mailto:ops@salvorix.id"
                className="underline decoration-ink-400 underline-offset-4 hover:text-ink-900 dark:hover:text-ink-50"
              >
                ops@salvorix.id
              </a>
              .
            </p>
          </div>

          <dl className="md:col-span-7 md:col-start-6">
            {QAS.map((qa, i) => (
              <div
                key={qa.q}
                className={`grid grid-cols-[auto_1fr] gap-6 py-7 ${
                  i === 0 ? "" : "border-t border-ink-200 dark:border-ink-700"
                }`}
              >
                <dt className="ticker pt-1 text-sm text-ink-400">
                  {String(i + 1).padStart(2, "0")}
                </dt>
                <dd>
                  <p className="text-[17px] font-semibold leading-[1.4] text-ink-900 dark:text-ink-50">
                    {qa.q}
                  </p>
                  <p className="mt-2 max-w-[60ch] text-[15px] leading-[1.6] text-ink-600 dark:text-ink-300">
                    {qa.a}
                  </p>
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
