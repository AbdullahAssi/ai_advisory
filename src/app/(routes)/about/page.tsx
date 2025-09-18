

import React from "react";
import { Metadata } from "next";

export const metadata = {
  title: "About Us | AI Advisory",
  description:
    "Learn more about AI Advisory and our mission to transform businesses with AI insights.",
};

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-8">About AI Advisory</h1>
      <p className="text-lg mb-6">
        AI Advisory is a cutting-edge platform designed to help businesses
        leverage artificial intelligence to make better decisions and achieve
        sustainable growth.
      </p>
      <p className="text-lg mb-6">
        Our team of experts combines deep technical knowledge with industry
        experience to provide tailored AI solutions for businesses of all sizes.
      </p>

      {/* Add more content as needed */}
    </div>
  );
}
