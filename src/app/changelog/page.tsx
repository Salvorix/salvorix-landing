import { StaticPage } from "@/components/site/static-page";

export default function Page() {
  return (
    <StaticPage
      eyebrow="Changelog"
      title="What we changed."
      description="Shipping notes for the last few weeks. The full public changelog will open when we hit v1.0."
      comingSoon
    />
  );
}
