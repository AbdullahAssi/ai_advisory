import type { Metadata } from "next";
import { Playfair_Display, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Playfair_Display({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  weight: ["400", "700"], // Add desired weights
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "AI Advisory App",
  description: "AI Advisory App with Next.js",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
