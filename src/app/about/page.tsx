import { StaticPage } from "@/components/site/static-page";

export default function Page() {
  return (
    <StaticPage
      eyebrow="About"
      title="Built in Jakarta, tested in the pit."
      description="Salvorix is by Indonesian mining operators, for Indonesian mining operators. We know the regulations, the language, and the terrain. We're not outsourcing what matters."
      comingSoon
    />
  );
}
