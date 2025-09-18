import MagicBento from "@/components/sections/Features";
import Hero from "@/components/ui/RippleGrid";
import Gradient from "@/components/ui/Gradient";
import FAQs from "@/components/sections/FAQs";
import CTA from "@/components/sections/CTA";
import Integrations from "@/components/sections/Integrations";

export default function Home() {
  return (
    <>
      <Hero />
      <MagicBento />
      <Integrations />
      <Gradient />
      <CTA />
      <FAQs />
    </>
  );
}
