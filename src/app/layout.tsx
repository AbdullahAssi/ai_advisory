import type { Metadata } from "next";
import { Playfair_Display } from "next/font/google";
import "./globals.css";
import CardNav from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

// Define the Playfair Display font with available weights
const playfairDisplay = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "900"],
  display: "swap",
  variable: "--font-playfair-display",
});

export const metadata: Metadata = {
  title: "AI Advisory App",
  description: "AI Advisory App with Next.js",
};

const logo = "/logo.webp";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const navItems = [
    {
      label: "About",
      bgColor: "#0D0716",
      textColor: "#fff",
      links: [
        {
          label: "Company",
          href: "/about/company",
          ariaLabel: "About Company",
        },
        {
          label: "Careers",
          href: "/about/careers",
          ariaLabel: "About Careers",
        },
      ],
    },
    {
      label: "Projects",
      bgColor: "#170D27",
      textColor: "#fff",
      links: [
        {
          label: "Featured",
          href: "/projects/featured",
          ariaLabel: "Featured Projects",
        },
        {
          label: "Case Studies",
          href: "/projects/case-studies",
          ariaLabel: "Project Case Studies",
        },
      ],
    },
    {
      label: "Blog",
      bgColor: "#22233C",
      textColor: "#fff",
      links: [
        {
          label: "Articles",
          href: "/blog",
          ariaLabel: "Blog Articles",
        },
        {
          label: "News",
          href: "/blog/news",
          ariaLabel: "News",
        },
      ],
    },
    {
      label: "Contact",
      bgColor: "#2A0C3A",
      textColor: "#fff",
      links: [
        {
          label: "Get in Touch",
          href: "/contact",
          ariaLabel: "Contact Us",
        },
        {
          label: "Support",
          href: "/contact/support",
          ariaLabel: "Support",
        },
      ],
    },
  ];

  return (
    <html lang="en">
      <body
        className={`${playfairDisplay.variable} antialiased bg-white font-sans`}
      >
        <CardNav
          logo={logo}
          logoAlt="AI Advisory Logo"
          items={navItems}
          buttonBgColor="#7928CA"
          buttonTextColor="#fff"
        />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
