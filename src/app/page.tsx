import { Nav } from "@/components/site/nav";
import { Ticker } from "@/components/site/ticker";
import { Hero } from "@/components/site/hero";
import { Modules } from "@/components/site/modules";
import { Compliance } from "@/components/site/compliance";
import { Trust } from "@/components/site/trust";
import { Stack } from "@/components/site/stack";
import { Pricing } from "@/components/site/pricing";
import { Faq } from "@/components/site/faq";
import { Cta } from "@/components/site/cta";
import { Footer } from "@/components/site/footer";

export default function Page() {
  return (
    <>
      <Nav />
      <main>
        <Ticker />
        <Hero />
        <Modules />
        <Compliance />
        <Trust />
        <Stack />
        <Pricing />
        <Faq />
        <Cta />
      </main>
      <Footer />
    </>
  );
}
