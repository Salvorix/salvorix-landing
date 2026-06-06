type Pillar = {
  tag: string;
  title: string;
  body: string;
  meta: { k: string; v: string }[];
};

const PILLARS: Pillar[] = [
  {
    tag: "Tenant model",
    title: "Each mine site is its own org.",
    body: "Inventory, production, HR, and the audit log all carry a tenant_id. A row from Site-01 is invisible to Site-02. The data layer enforces it, the API layer enforces it, and the UI enforces it. No exceptions, no shared exports.",
    meta: [
      { k: "Isolation", v: "Row-level" },
      { k: "Routing", v: "X-Tenant-ID" },
      { k: "Backups", v: "Per org" },
    ],
  },
  {
    tag: "Field-first UI",
    title: "Forms you can fill with gloves on.",
    body: "The production log was redesigned three times before the foreman stopped printing the spreadsheet. Big tap targets, decimal-only numpad, no hover-only menus, no nested modals. The same form works in a truck cabin at 5am.",
    meta: [
      { k: "Tap target", v: "≥ 44 px" },
      { k: "Offline", v: "PWA ready" },
      { k: "Languages", v: "id-ID, en-US" },
    ],
  },
  {
    tag: "Background jobs",
    title: "Reports that build themselves at 02:00 WIT.",
    body: "The monthly Minerba PDF, the stock card export, the certificate-expiry digest: all scheduled, all retried, all visible in the Asynq dashboard. When a job fails, you get a single notification, not a 4am phone call from the compliance officer.",
    meta: [
      { k: "Queue", v: "Asynq" },
      { k: "Backoff", v: "Exp + jitter" },
      { k: "DLQ", v: "Visible" },
    ],
  },
];

export function Stack() {
  return (
    <section className="border-b border-ink-200/60 dark:border-ink-700/60">
      <div className="mx-auto max-w-[1400px] px-6 py-24 md:py-32">
        <div className="max-w-[60ch]">
          <h2 className="text-[clamp(2rem,4vw,3.25rem)] font-semibold leading-[1.05] tracking-[-0.02em] text-ink-900 dark:text-ink-50">
            Engineered for the room
            <br />
            with the bad Wi-Fi.
          </h2>
        </div>

        <div className="mt-16 space-y-px overflow-hidden rounded-lg border border-ink-200 bg-ink-200/60 dark:border-ink-700 dark:bg-ink-800/60">
          {PILLARS.map((p, i) => (
            <article
              key={p.tag}
              className="grid grid-cols-1 gap-6 bg-ink-50 p-8 dark:bg-ink-950 md:grid-cols-12 md:gap-10"
            >
              <div className="md:col-span-4">
                <span className="stamped text-ink-500 dark:text-ink-400">
                  {p.tag}
                </span>
                <p className="ticker mt-2 text-xs text-ink-400">
                  0{i + 1} / 0{PILLARS.length}
                </p>
              </div>
              <div className="md:col-span-5">
                <h3 className="text-[22px] font-semibold leading-[1.2] tracking-tight text-ink-900 dark:text-ink-50">
                  {p.title}
                </h3>
                <p className="mt-3 text-[15px] leading-[1.6] text-ink-600 dark:text-ink-300">
                  {p.body}
                </p>
              </div>
              <dl className="md:col-span-3 md:border-l md:border-ink-200 md:pl-6 dark:md:border-ink-700">
                {p.meta.map((m) => (
                  <div key={m.k} className="border-b border-ink-200 py-3 last:border-b-0 dark:border-ink-700">
                    <dt className="stamped text-ink-500 dark:text-ink-400">
                      {m.k}
                    </dt>
                    <dd className="ticker mt-1 text-sm text-ink-800 dark:text-ink-100">
                      {m.v}
                    </dd>
                  </div>
                ))}
              </dl>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
