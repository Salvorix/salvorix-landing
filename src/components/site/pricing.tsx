type Tier = {
  name: string;
  price: string;
  unit: string;
  fit: string;
  features: string[];
  cta: string;
  href: string;
  highlight?: boolean;
};

const TIERS: Tier[] = [
  {
    name: "Pit",
    price: "Rp 4.5 jt",
    unit: "/site/month",
    fit: "Single pit, under 5,000 t/month.",
    features: [
      "Production + Inventory",
      "1 active shift roster",
      "Monthly Minerba PDF",
      "Email support",
    ],
    cta: "Start a pilot",
    href: "https://app.salvorix.id/sign-up?plan=pit",
  },
  {
    name: "Bench",
    price: "Rp 12 jt",
    unit: "/site/month",
    fit: "Multi-pit operators, full HR + K3.",
    features: [
      "Everything in Pit",
      "HR + K3 with cert tracking",
      "Audit log retention 7 yr",
      "Asynqmon dashboard access",
    ],
    cta: "Book a site visit",
    href: "https://app.salvorix.id/sign-up?plan=bench",
    highlight: true,
  },
  {
    name: "Mill",
    price: "Custom",
    unit: "Annual contract",
    fit: "30,000+ t/month, multi-site group.",
    features: [
      "Everything in Bench",
      "SSO + on-prem gateway option",
      "Dedicated solutions engineer",
      "SLA 99.9% with credits",
    ],
    cta: "Talk to the team",
    href: "mailto:ops@salvorix.id?subject=Mill%20plan",
  },
];

export function Pricing() {
  return (
    <section
      id="pricing"
      className="border-b border-ink-200/60 dark:border-ink-700/60"
    >
      <div className="mx-auto max-w-[1400px] px-6 py-24 md:py-32">
        <div className="max-w-[60ch]">
          <h2 className="text-[clamp(2rem,4vw,3.25rem)] font-semibold leading-[1.05] tracking-[-0.02em] text-ink-900 dark:text-ink-50">
            Priced per site.
            <br />
            Not per seat.
          </h2>
          <p className="mt-5 text-[17px] leading-[1.55] text-ink-600 dark:text-ink-300">
            A pit foreman with a clipboard should not be the line item that
            blocks the rollout. Unlimited operators, unlimited viewers. We
            meter on the thing that costs us money: data and storage.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-4 md:grid-cols-3">
          {TIERS.map((t) => (
            <article
              key={t.name}
              className={`flex flex-col rounded-lg border p-7 transition-colors ${
                t.highlight
                  ? "border-ink-900 bg-ink-900 text-ink-50 dark:border-ink-50 dark:bg-ink-50 dark:text-ink-900"
                  : "border-ink-200 bg-white/60 dark:border-ink-700 dark:bg-ink-900/60"
              }`}
            >
              <div className="flex items-baseline justify-between">
                <h3 className="text-xl font-semibold tracking-tight">
                  {t.name}
                </h3>
                {t.highlight && (
                  <span className="stamped text-hazard">most picked</span>
                )}
              </div>
              <p className="mt-2 max-w-[36ch] text-sm opacity-80">{t.fit}</p>

              <div className="mt-8 flex items-baseline gap-2">
                <span className="ticker text-4xl font-semibold tracking-tight">
                  {t.price}
                </span>
                <span className="text-sm opacity-70">{t.unit}</span>
              </div>

              <ul className="mt-8 space-y-3 text-sm">
                {t.features.map((f) => (
                  <li key={f} className="flex items-start gap-3">
                    <span
                      aria-hidden="true"
                      className={`mt-2 h-px w-3 shrink-0 ${t.highlight ? "bg-ink-50 dark:bg-ink-900" : "bg-ink-400"}`}
                    />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>

              <a
                href={t.href}
                className={`mt-10 inline-flex h-10 items-center justify-center rounded-md text-sm font-medium transition-all hover:-translate-y-px active:translate-y-0 ${
                  t.highlight
                    ? "bg-hazard text-ink-50"
                    : "border border-ink-300 text-ink-800 hover:border-ink-500 dark:border-ink-700 dark:text-ink-100 dark:hover:border-ink-500"
                }`}
              >
                {t.cta}
              </a>
            </article>
          ))}
        </div>

        <p className="mt-8 text-xs text-ink-500 dark:text-ink-400">
          All prices exclude PPN. Invoiced in IDR. Annual contracts get two
          months free.
        </p>
      </div>
    </section>
  );
}
