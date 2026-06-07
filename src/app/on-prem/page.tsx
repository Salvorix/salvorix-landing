import { StaticPage } from "@/components/site/static-page";

export default function Page() {
  return (
    <StaticPage
      eyebrow="On-prem"
      title="Run Salvorix on your stack."
      description="Docker Compose stack that runs the gateway, services, Postgres, and Redis on a single 4 vCPU VPS. Compatible with Coolify, Caddy, and Nginx. Available on the Mill plan."
      comingSoon
    />
  );
}
