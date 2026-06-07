import { StaticPage } from "@/components/site/static-page";

export default function Page() {
  return (
    <StaticPage
      eyebrow="Privacy"
      title="Your data, your rules."
      description="Full ownership on cancellation — SQL and CSV exports signed and timestamped within five business days. Audit log queryable for 90 days post-cancellation, then deleted. No data sharing, no selling, no third-party tracking."
      comingSoon
    />
  );
}
