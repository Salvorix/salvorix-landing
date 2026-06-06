import Link from "next/link";

const COLS = [
  {
    title: "Product",
    links: [
      { label: "Modules", href: "#modules" },
      { label: "Compliance", href: "#compliance" },
      { label: "Pricing", href: "#pricing" },
      { label: "Changelog", href: "/changelog" },
    ],
  },
  {
    title: "Operators",
    links: [
      { label: "Pit plan", href: "/pit-plan" },
      { label: "On-prem", href: "/on-prem" },
      { label: "Security", href: "/security" },
      { label: "Status", href: "https://status.salvorix.id" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About", href: "/about" },
      { label: "Contact", href: "mailto:ops@salvorix.id" },
      { label: "Privacy", href: "/privacy" },
      { label: "Terms", href: "/terms" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="bg-ink-950 text-ink-200">
      <div className="mx-auto max-w-[1400px] px-6 py-16">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-12">
          <div className="md:col-span-5">
            <Link
              href="/"
              className="flex items-center gap-2 font-mono text-[15px] font-semibold tracking-tight"
            >
              <span
                aria-hidden="true"
                className="grid h-6 w-6 place-items-center rounded-sm bg-hazard text-ink-50"
              >
                <span className="text-[11px] font-bold">S</span>
              </span>
              <span className="text-ink-50">salvorix</span>
            </Link>
            <p className="mt-5 max-w-[40ch] text-sm leading-[1.6] text-ink-400">
              Mining compliance ERP for Indonesian operators. Built in Jakarta,
              tested in the pit.
            </p>
            <dl className="mt-8 grid grid-cols-2 gap-4 text-sm">
              <div>
                <dt className="stamped text-ink-500">NIB</dt>
                <dd className="ticker mt-1 text-ink-200">9120012345678</dd>
              </div>
              <div>
                <dt className="stamped text-ink-500">NPWP</dt>
                <dd className="ticker mt-1 text-ink-200">01.234.567.8-019.000</dd>
              </div>
              <div className="col-span-2">
                <dt className="stamped text-ink-500">Address</dt>
                <dd className="mt-1 text-ink-200">
                  Wisma 46, Lantai 18
                  <br />
                  Jl. Jenderal Sudirman Kav. 1, Jakarta 10220
                </dd>
              </div>
            </dl>
          </div>

          <nav
            aria-label="Footer"
            className="grid grid-cols-2 gap-8 md:col-span-7 md:grid-cols-3"
          >
            {COLS.map((c) => (
              <div key={c.title}>
                <p className="stamped text-ink-500">{c.title}</p>
                <ul className="mt-4 space-y-2.5 text-sm">
                  {c.links.map((l) => (
                    <li key={l.label}>
                      <a
                        href={l.href}
                        className="text-ink-200 transition-colors hover:text-ink-50"
                      >
                        {l.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </nav>
        </div>

        <div className="mt-14 flex flex-col gap-3 border-t border-ink-800 pt-6 text-xs text-ink-500 md:flex-row md:items-center md:justify-between">
          <p>© 2026 PT Salvorix Teknologi Indonesia</p>
          <p className="ticker">
            build 1.0.0 · main · last sync 12s ago
          </p>
        </div>
      </div>
    </footer>
  );
}
