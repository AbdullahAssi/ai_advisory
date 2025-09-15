import React from "react";
import RippleGrid from "./hero";
import { BsArrowUpLeft, BsArrowUpRight } from "react-icons/bs";


// ...existing code...

export default function Hero() {
    return (
        <section className="w-full flex items-center justify-center bg-black overflow-hidden">
            <RippleGrid />
            <div className="absolute inset-0 flex flex-col items-center justify-center z-10">
                <button className="mb-6 px-6 py-2 rounded-full bg-[rgba(40,40,60,0.7)] text-white text-sm font-medium shadow-lg backdrop-blur-md border border-white/10">
                    Try Another Advisor
                </button>
                <h1 className="text-white text-center text-4xl md:text-5xl font-bold mb-8 leading-tight">
                    Your AI Advisory Partner
                    <br />
                    Get expert advice instantly!
                </h1>
                <div className="flex gap-4">
                    <div className="relative"></div>
                        <button className="px-8 cursor-pointer py-3  flex items-center rounded-full bg-white text-black font-semibold text-lg shadow-md relative z-10">
                            Start Advising  <BsArrowUpRight />
                        </button>
                        <span className="absolute inset-0 rounded-full pointer-events-none border-2 border-transparent animate-moving-border"></span>
               
                    <button className="px-8 cursor-pointer py-3 rounded-full bg-[rgba(40,40,60,0.7)] text-white font-semibold text-lg shadow-md border border-white/10">
                        How It Works
                    </button>
                </div>
            </div>
        </section>
    );
}

