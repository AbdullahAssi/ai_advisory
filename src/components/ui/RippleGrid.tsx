"use client";

import React from "react";
import { BsArrowUpRight } from "react-icons/bs";
import RippleGrid from "./hero";

const Hero = () => {
  return (
    <section className="pt-20 bg-black w-full h-screen flex flex-col items-center justify-center overflow-hidden">
      <RippleGrid />
      <div className="absolute z-10 px-4 text-center">
        <h1 className="text-white text-center text-4xl md:text-5xl font-bold mb-8 leading-tight">
          Your AI Advisory Partner
          <br />
          Get expert advice instantly!
        </h1>
        <div className="flex gap-4 justify-center">
          <div className="relative">
            <button className="px-8 cursor-pointer py-3 flex items-center rounded-full bg-white text-black font-semibold text-lg shadow-md relative z-10">
              Start Advising <BsArrowUpRight className="ml-2" />
            </button>
            <span className="absolute inset-0 rounded-full pointer-events-none border-2 border-transparent animate-moving-border"></span>
          </div>
          <button className="px-8 cursor-pointer py-3 rounded-full bg-[rgba(40,40,60,0.7)] text-white font-semibold text-lg shadow-md border border-white/10">
            How It Works
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
