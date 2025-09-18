"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  FaTwitter,
  FaFacebook,
  FaInstagram,
  FaPinterest,
} from "react-icons/fa";
import { FiArrowUpRight } from "react-icons/fi";

const Footer = () => {
  return (
    <footer className="relative mt-20">
      {/* Main gradient container */}
      <div className="rounded-t-3xl bg-gradient-to-bl from-[#0A0A12] to-[#1A1A25] p-8 md:p-16 overflow-hidden">
        {/* Top section with CTA */}
        <div className="relative w-full max-w-6xl mx-auto mb-16 overflow-hidden">
          <div className="flex flex-col md:flex-row items-center justify-between  bg-gradient-to-b from-black via-purple-900 to-black p-6 md:p-10 rounded-2xl">
            <div className="flex-1">
              <h2 className="text-3xl md:text-4xl font-bold mb-2">
                <span className="text-white">LET'S WORK </span>
                <span className="text-white/60 font-light">TOGETHER</span>
              </h2>
            </div>
            <div className="mt-4 md:mt-0">
              <Button className="rounded-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white p-6 h-12 w-12 flex items-center justify-center">
                <FiArrowUpRight className="h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>

        {/* Main footer sections */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 max-w-6xl mx-auto">
          {/* Contact Info */}
          <div>
            <h3 className="text-white text-xl font-semibold mb-6">
              Get In Touch
            </h3>
            <p className="text-gray-400 mb-4">info@aiadvisory.com</p>
            <p className="text-gray-100 text-xl font-semibold">+123 456 7890</p>
          </div>

          {/* Location */}
          <div>
            <h3 className="text-white text-xl font-semibold mb-6">
              Our Location
            </h3>
            <p className="text-gray-400">
              CemTech 4th Floor
              <br />
              Nust , H-12
              <br />
              Islamabad, Pakistan
            </p>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="text-white text-xl font-semibold mb-6">
              Social Media
            </h3>
            <div className="flex space-x-4">
              <Link
                href="#"
                className="text-gray-400 hover:text-purple-500 transition-colors"
              >
                <FaPinterest size={20} />
              </Link>
              <Link
                href="#"
                className="text-gray-400 hover:text-blue-400 transition-colors"
              >
                <FaTwitter size={20} />
              </Link>
              <Link
                href="#"
                className="text-gray-400 hover:text-blue-600 transition-colors"
              >
                <FaFacebook size={20} />
              </Link>
              <Link
                href="#"
                className="text-gray-400 hover:text-pink-500 transition-colors"
              >
                <FaInstagram size={20} />
              </Link>
            </div>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-white text-xl font-semibold mb-6">
              Subscribe Newsletter
            </h3>
            <div className="flex">
              <Input
                type="email"
                placeholder="Enter your email"
                className="bg-[#1E1E28] border-none text-white rounded-l-md focus-visible:ring-0 focus-visible:ring-offset-0"
              />
              <Button className="rounded-r-md bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700">
                <FiArrowUpRight className="h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>

        {/* Bottom section with logo and copyright */}
        <div className="mt-20 pt-10 border-t border-white/10 max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center mb-6 md:mb-0">
            <div className="bg-gradient-to-br from-blue-500 to-purple-600 h-10 w-10 rounded-full flex items-center justify-center mr-2">
              <span className="text-white font-bold">AI</span>
            </div>
            <span className="text-white font-bold text-xl">Advisory.</span>
          </div>
          <div className="text-gray-400 text-sm">
            Copyright © {new Date().getFullYear()} All Rights Reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
