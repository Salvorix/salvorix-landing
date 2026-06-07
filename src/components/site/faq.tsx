type QA = { q: string; a: string };

const QAS: QA[] = [
	{
		q: 'Does Salvorix replace our existing accounting or payroll?',
		a: 'No. Salvorix covers pit operations, inventory, HR roster, K3 certifications, and Minerba reporting. Payroll runs on the tool your finance team already trusts. We export signed monthly summaries as XLSX and PDF.',
	},
	{
		q: 'Can we run Salvorix on our own server?',
		a: 'Yes. The Mill plan includes an on-premise deployment option for operators who require data to stay within their own infrastructure — common in sites with restricted internet or internal data policies. Our team handles the initial setup and hands over full operational control to your IT team.',
	},
	{
		q: 'What happens to our compliance data if Salvorix shuts down?',
		a: 'Every operator on any plan can trigger a full data export at any time — no waiting, no support ticket. You get your complete database as SQL and CSV, signed and timestamped. On-prem operators on the Mill plan already hold their own copy. Your Minerba records belong to you, not to us.',
	},
	{
		q: 'How long is a typical rollout?',
		a: 'Two weeks for the Pit and Bench plans. Week one is data migration (item master, employee roster, existing cert PDFs). Week two is field-side training and the first end-to-end daily log. We work on-site for the first three shifts.',
	},
	{
		q: 'What happens to our data if we cancel?',
		a: 'You keep ownership. We export the full schema as SQL and CSV bundles, signed and timestamped, within five business days. Your audit log stays queryable for 90 days post-cancellation, then is deleted.',
	},
	{
		q: 'Is the Minerba report signed and timestamped?',
		a: 'Yes. Each monthly submission is hashed, signed with the company certificate, and archived in the audit log before transmission. The signature is verifiable offline by your auditor.',
	},
];

export function Faq() {
  return (
		<section
			id='faq'
			className='border-ink-200/60 dark:border-ink-700/60 border-b'
		>
			<div className='mx-auto px-6 py-24 md:py-32 max-w-[1400px]'>
				<div className='gap-10 md:gap-8 grid grid-cols-1 md:grid-cols-12'>
					<div className='md:col-span-4'>
						<h2 className='font-semibold text-[clamp(1.6rem,3vw,2.4rem)] text-ink-900 dark:text-ink-50 leading-[1.1] tracking-[-0.015em]'>
							Questions the
							<br />
							site manager asks
							<br />
							before signing.
						</h2>
						<p className='mt-5 text-ink-500 dark:text-ink-400 text-sm'>
							Anything missing? Email{' '}
							<a
								href='mailto:ops@salvorix-app.heulaulab.xyz'
								className='hover:text-ink-900 dark:hover:text-ink-50 decoration-ink-400 underline underline-offset-4'
							>
								ops@salvorix-app.heulaulab.xyz
							</a>
							.
						</p>
					</div>

					<dl className='md:col-span-7 md:col-start-6'>
						{QAS.map((qa, i) => (
							<div
								key={qa.q}
								className={`grid grid-cols-[auto_1fr] gap-6 py-7 ${
									i === 0 ? '' : 'border-t border-ink-200 dark:border-ink-700'
								}`}
							>
								<dt className='pt-1 text-ink-400 text-sm ticker'>
									{String(i + 1).padStart(2, '0')}
								</dt>
								<dd>
									<p className='font-semibold text-[17px] text-ink-900 dark:text-ink-50 leading-[1.4]'>
										{qa.q}
									</p>
									<p className='mt-2 max-w-[60ch] text-[15px] text-ink-600 dark:text-ink-300 leading-[1.6]'>
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
