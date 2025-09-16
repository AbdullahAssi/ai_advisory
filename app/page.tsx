import MagicBento from "./features";
import CardNav from "./navbar";
const logo = "/logo2.webp";
import Hero from "./test";
import LaserFlowBoxExample from "./flow";
import Footer from "./footer";
import { Card } from "@/components/CardSwap";
import CardExample from "./cards";

export default function Home() {

  const items = [
    {
      label: "About",
      bgColor: "#0D0716",
      textColor: "#fff",
      links: [
        { label: "Company", href: "/about/company", ariaLabel: "About Company" },
        { label: "Careers", href: "/about/careers", ariaLabel: "About Careers" }
      ]
    },

    {
      label: "Projects", 
      bgColor: "#170D27",
      textColor: "#fff",
      links: [
        { label: "Featured", href: "/projects/featured", ariaLabel: "Featured Projects" },
        { label: "Case Studies", href: "/projects/case-studies", ariaLabel: "Project Case Studies" }
      ]
    },
    {
      label: "Contact",
      bgColor: "#271E37", 
      textColor: "#fff",
      links: [
        { label: "Email", href: "mailto:info@cymaxtech.com", ariaLabel: "Email us" },
        { label: "Twitter", href: "https://twitter.com/", ariaLabel: "Twitter" },
        { label: "LinkedIn", href: "https://linkedin.com/", ariaLabel: "LinkedIn" }
      ]
    }
  ];

  return (

    
    <div className="font-sans ">
      <CardNav
      logo={logo}
      logoAlt="Company Logo"
      items={items}
      // baseColor="#d61b1b"
      menuColor="#f0f0f0"
      buttonBgColor="#111"
      buttonTextColor="#fff"
      ease="power3.out"
    />
    <Hero />
      {/* <RippleGrid /> */}

      <MagicBento />
      <LaserFlowBoxExample  />

      <Footer />
    </div>
  );
}
