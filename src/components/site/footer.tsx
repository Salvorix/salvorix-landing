import Link from "next/link";
import Image from 'next/image';

const COLS = [
	{
		title: 'Product',
		links: [
			{ label: 'Modules', href: '#modules' },
			{ label: 'Compliance', href: '#compliance' },
			{ label: 'Pricing', href: '#pricing' },
			{ label: 'Changelog', href: '/changelog' },
		],
	},
	{
		title: 'Operators',
		links: [
			{ label: 'Pit plan', href: '/pit-plan' },
			{ label: 'On-prem', href: '/on-prem' },
			{ label: 'Security', href: '/security' },
			{ label: 'Status', href: 'https://statusalvorix.heulaulab.xyz' },
		],
	},
	{
		title: 'Company',
		links: [
			{ label: 'About', href: '/about' },
			{ label: 'Contact', href: 'mailto:ops@salvorix.id' },
			{ label: 'Privacy', href: '/privacy' },
			{ label: 'Terms', href: '/terms' },
		],
	},
];

export function Footer() {
  return (
		<footer className='bg-ink-950 text-ink-200'>
			<div className='mx-auto px-6 py-16 max-w-[1400px]'>
				<div className='gap-10 grid grid-cols-1 md:grid-cols-12'>
					<div className='md:col-span-5'>
						<Link
							href='/'
							className='flex items-center gap-2 font-mono font-semibold text-[15px] tracking-tight'
						>
							<Image
								src='/assets/salvorix-logomark.svg'
								alt='Salvorix'
								width={0}
								height={0}
								className='w-6 h-6'
							/>
							<span className='text-ink-50'>salvorix</span>
						</Link>
						<p className='mt-5 max-w-[40ch] text-ink-400 text-sm leading-[1.6]'>
							Mining compliance ERP for Indonesian operators. Built in Jakarta,
							tested in the pit.
						</p>
						<dl className='gap-4 grid grid-cols-2 mt-8 text-sm'>
							<div>
								<dt className='text-ink-500 stamped'>NIB</dt>
								<dd className='mt-1 text-ink-200 ticker'>9120012345678</dd>
							</div>
							<div>
								<dt className='text-ink-500 stamped'>NPWP</dt>
								<dd className='mt-1 text-ink-200 ticker'>
									01.234.567.8-019.000
								</dd>
							</div>
							<div className='col-span-2'>
								<dt className='text-ink-500 stamped'>Address</dt>
								<dd className='mt-1 text-ink-200'>
									Wisma 46, Lantai 18
									<br />
									Jl. Jenderal Sudirman Kav. 1, Jakarta 10220
								</dd>
							</div>
						</dl>
					</div>

					<nav
						aria-label='Footer'
						className='gap-8 grid grid-cols-2 md:grid-cols-3 md:col-span-7'
					>
						{COLS.map((c) => (
							<div key={c.title}>
								<p className='text-ink-500 stamped'>{c.title}</p>
								<ul className='space-y-2.5 mt-4 text-sm'>
									{c.links.map((l) => (
										<li key={l.label}>
											<a
												href={l.href}
												className='text-ink-200 hover:text-ink-50 transition-colors'
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

				<div className='flex md:flex-row flex-col md:justify-between md:items-center gap-3 mt-14 pt-6 border-ink-800 border-t text-ink-500 text-xs'>
					<div>
						<p>© 2026 PT Salvorix Teknologi Indonesia</p>
						<div className='flex flex-wrap items-center gap-x-2 gap-y-1 pt-1'>
							<Link
								href='https://heulaulab.xyz'
								target='_blank'
								rel='noopener noreferrer'
							>
								<div className='flex items-center gap-x-2'>
									<Image
										src='/assets/heulaulab.svg'
										alt='HeulauLab'
										width={100}
										height={100}
										className='dark:invert w-auto h-10'
									/>
									<span
										className='text-muted-foreground/40 select-none'
										aria-hidden
									>
										|
									</span>
									<span className='text-[11px] text-muted-foreground/90'>
										Proudly partnered with heulaulab
									</span>
								</div>
							</Link>
						</div>
					</div>
					<p className='ticker'>build 1.0.0 · main · last sync 12s ago</p>
				</div>
			</div>
		</footer>
	);
}
