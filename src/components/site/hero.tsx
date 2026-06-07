import Link from "next/link";

export function Hero() {
  return (
		<section className='relative border-ink-200/60 dark:border-ink-700/60 border-b overflow-hidden'>
			<div className='mx-auto px-6 pt-20 md:pt-24 pb-24 md:pb-32 max-w-[1400px]'>
				<div className='gap-12 lg:gap-10 grid grid-cols-1 lg:grid-cols-12'>
					<div className='lg:col-span-7'>
						<p className='mb-6 text-ink-500 dark:text-ink-400 stamped'>
							<span className='inline-block bg-hazard mr-2 rounded-full w-1.5 h-1.5 align-middle' />
							Mining compliance ERP · IDR-denominated
						</p>
						<h1 className='font-semibold text-[clamp(2.4rem,6vw,4.5rem)] text-ink-900 dark:text-ink-50 leading-[1.02] tracking-[-0.025em]'>
							From pit face
							<br />
							to Minerba submission,
							<br />
							<span className='text-hazard'>in one ledger.</span>
						</h1>
						<p className='mt-7 max-w-[60ch] text-ink-600 dark:text-ink-300 text-lg leading-[1.55]'>
							Salvorix replaces the spreadsheets, the WhatsApp screenshots, and
							the desk-bound compliance officer. Track tonnage, grade, and
							recovery at the source. Generate the monthly report the Direktorat
							Jenderal Mineral dan Batubara expects.
						</p>

						<div className='flex flex-wrap items-center gap-3 mt-9'>
							<Link
								href='https://salvorix-app.heulaulab.xyz/sign-up'
								className='inline-flex items-center bg-ink-900 dark:bg-ink-50 px-5 rounded-md h-11 font-medium text-ink-50 dark:text-ink-900 text-sm transition-all hover:-translate-y-px active:translate-y-0'
							>
								Book a site visit
							</Link>
							<Link
								href='#modules'
								className='inline-flex items-center px-5 border border-ink-300 hover:border-ink-500 dark:border-ink-700 dark:hover:border-ink-500 rounded-md h-11 font-medium text-ink-800 dark:text-ink-100 text-sm transition-colors'
							>
								Tour the modules
							</Link>
						</div>
					</div>

					<aside className='lg:col-span-5'>
						<div className='bg-white/60 dark:bg-ink-900/60 p-1 border border-ink-200 dark:border-ink-700 rounded-lg'>
							<div className='flex justify-between items-center px-4 py-2.5 border-ink-200 dark:border-ink-700 border-b'>
								<div className='flex items-center gap-2'>
									<span className='bg-ore rounded-full w-2 h-2 status-dot' />
									<span className='text-ink-700 dark:text-ink-200 stamped'>
										Daily shift · 06:00 WIT
									</span>
								</div>
								<span className='text-ink-400 stamped'>form PLG-04</span>
							</div>
							<div className='grid grid-cols-2 divide-x divide-ink-200 dark:divide-ink-700'>
								<Field label='Pit' value='Pit B-3' />
								<Field label='Block' value='B-3 / 12-14' />
								<Field label='Tonnage' value='1,840 t' mono />
								<Field label='Grade Au' value='4.21 g/t' mono />
								<Field label='Recovery' value='91.4%' mono />
								<Field label='Strip ratio' value='2.8' mono />
							</div>
							<div className='p-4 border-ink-200 dark:border-ink-700 border-t'>
								<p className='mb-2 text-ink-500 dark:text-ink-400 stamped'>
									Recovery delta vs plan
								</p>
								<div className='flex items-baseline gap-3'>
									<span className='font-medium text-ink-900 dark:text-ink-50 text-3xl ticker'>
										+1.8%
									</span>
									<span className='text-ore text-sm'>on plan</span>
								</div>
								<div className='bg-ink-200 dark:bg-ink-800 mt-3 rounded-full w-full h-1 overflow-hidden'>
									<div className='bg-ore rounded-full w-[68%] h-full' />
								</div>
							</div>
						</div>
						<p className='mt-3 text-ink-500 dark:text-ink-400 text-xs'>
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
		<div className='px-4 py-3'>
			<p className='text-ink-500 dark:text-ink-400 stamped'>{label}</p>
			<p
				className={`mt-1 text-[15px] text-ink-900 dark:text-ink-50 ${mono ? 'ticker' : ''}`}
			>
				{value}
			</p>
		</div>
	);
}
