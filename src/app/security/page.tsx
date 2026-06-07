import { StaticPage } from "@/components/site/static-page";

export default function Page() {
  return (
    <StaticPage
      eyebrow="Security"
      title="Trustworthy by default."
      description="Your data stays in your database. ISO 27001 roadmap underway, SOC 2 Type II planned for Q3. All transit encrypted with TLS 1.3. Audit logs signed per-shift."
      comingSoon
    />
  );
}
