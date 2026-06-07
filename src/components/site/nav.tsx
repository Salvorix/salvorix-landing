import Link from 'next/link';
import Image from 'next/image';

const NAV = [
	{ href: '#modules', label: 'Modules' },
	{ href: '#compliance', label: 'Compliance' },
	{ href: '#trust', label: 'Operators' },
	{ href: '#pricing', label: 'Pricing' },
	{ href: '#faq', label: 'FAQ' },
];

export function Nav() {
	return (
		<header className='top-0 z-50 sticky bg-ink-50/80 dark:bg-ink-950/80 backdrop-blur-md border-ink-200/60 dark:border-ink-700/60 border-b'>
			<div className='flex justify-between items-center mx-auto px-6 max-w-[1400px] h-16'>
				<Link
					href='/'
					className='flex items-center gap-2 font-mono font-semibold text-[15px] tracking-tight'
					aria-label='Salvorix home'
				>
					<Image
						src='/assets/salvorix-logomark.svg'
						alt='Salvorix'
						width={0}
						height={0}
						className='w-6 h-6'
					/>
					<span>salvorix</span>
					<span className='ml-2 text-ink-400 stamped'>v1.0</span>
				</Link>

				<nav aria-label='Primary' className='hidden md:block'>
					<ul className='flex items-center gap-7 text-sm'>
						{NAV.map((item) => (
							<li key={item.href}>
								<a
									href={item.href}
									className='text-ink-600 hover:text-ink-900 dark:hover:text-ink-50 dark:text-ink-200 transition-colors'
								>
									{item.label}
								</a>
							</li>
						))}
					</ul>
				</nav>

				<div className='flex items-center gap-2'>
					<Link
						href='https://salvorix-app.heulaulab.xyz/sign-in'
						className='hidden sm:inline-block px-3 py-2 rounded-md text-ink-700 hover:text-ink-900 dark:hover:text-ink-50 dark:text-ink-200 text-sm transition-colors'
					>
						Sign in
					</Link>
					<Link
						href='https://salvorix-app.heulaulab.xyz/sign-up'
						className='bg-ink-900 dark:bg-ink-50 px-3.5 py-2 rounded-md font-medium text-ink-50 dark:text-ink-900 text-sm transition-all hover:-translate-y-px active:translate-y-0'
					>
						Book a site visit
					</Link>
				</div>
			</div>
		</header>
	);
}
