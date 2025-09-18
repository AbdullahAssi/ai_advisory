

import React from "react";
import { Metadata } from "next";

export const metadata = {
  title: "Contact Us | AI Advisory",
  description:
    "Get in touch with our team at AI Advisory for personalized AI consulting services.",
};

export default function ContactPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-8">Contact Us</h1>

      <div className="grid md:grid-cols-2 gap-8">
        <div>
          <h2 className="text-2xl font-semibold mb-4">Get in Touch</h2>
          <p className="mb-6">
            Have questions about how AI Advisory can help your business? Reach
            out to our team for a personalized consultation.
          </p>

          <div className="mb-4">
            <p className="font-medium">Email:</p>
            <p>info@aiadvisory.com</p>
          </div>

          <div className="mb-4">
            <p className="font-medium">Phone:</p>
            <p>+1 (888) 256-365</p>
          </div>

          <div className="mb-4">
            <p className="font-medium">Address:</p>
            <p>456 AI Avenue, Innovation District</p>
            <p>San Francisco, CA 94103</p>
          </div>
        </div>

        <div>
          {/* Contact form placeholder */}
          <form className="space-y-4">
            <div>
              <label className="block mb-1">Name</label>
              <input
                type="text"
                className="w-full border border-gray-300 rounded p-2"
              />
            </div>
            <div>
              <label className="block mb-1">Email</label>
              <input
                type="email"
                className="w-full border border-gray-300 rounded p-2"
              />
            </div>
            <div>
              <label className="block mb-1">Message</label>
              <textarea
                rows={5}
                className="w-full border border-gray-300 rounded p-2"
              ></textarea>
            </div>
            <button
              type="submit"
              className="bg-blue-600 text-white py-2 px-6 rounded hover:bg-blue-700"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
