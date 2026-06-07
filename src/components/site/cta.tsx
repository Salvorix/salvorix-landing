import Link from "next/link";

export function Cta() {
  return (
		<section className='border-ink-200/60 dark:border-ink-700/60 border-b'>
			<div className='mx-auto px-6 py-24 md:py-32 max-w-[1400px]'>
				<div className='gap-8 md:gap-10 grid grid-cols-1 md:grid-cols-12 bg-ink-100/50 dark:bg-ink-900/50 p-10 md:p-14 border border-ink-200 dark:border-ink-700 rounded-lg'>
					<div className='md:col-span-7'>
						<p className='mb-5 text-ink-500 dark:text-ink-400 stamped'>
							Next step
						</p>
						<h2 className='font-semibold text-[clamp(2rem,4.5vw,3.5rem)] text-ink-900 dark:text-ink-50 leading-[1.02] tracking-[-0.025em]'>
							We come to the site.
							<br />
							You bring the hard questions.
						</h2>
						<p className='mt-5 max-w-[58ch] text-[16px] text-ink-600 dark:text-ink-300 leading-[1.55]'>
							Two days on-site. One pit walk, one shift-side test, one
							compliance review with your team. We leave with a written rollout
							plan, not a sales deck.
						</p>
					</div>

					<div className='flex flex-col md:justify-end md:items-end gap-3 md:col-span-5'>
						<Link
							href='https://salvorix-app.heulaulab.xyz/sign-up'
							className='inline-flex justify-center items-center bg-ink-900 dark:bg-ink-50 px-6 rounded-md w-full md:w-auto h-12 font-medium text-ink-50 dark:text-ink-900 text-sm transition-all hover:-translate-y-px active:translate-y-0'
						>
							Book a site visit
						</Link>
						<Link
							href='mailto:ops@salvorix-app.heulaulab.xyz'
							className='inline-flex justify-center items-center px-6 border border-ink-300 hover:border-ink-500 dark:border-ink-700 dark:hover:border-ink-500 rounded-md w-full md:w-auto h-12 font-medium text-ink-800 dark:text-ink-100 text-sm transition-colors'
						>
							Email ops@salvorix-app.heulaulab.xyz
						</Link>
						<p className='mt-2 text-ink-500 dark:text-ink-400 text-xs text-right'>
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
