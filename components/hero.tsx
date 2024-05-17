"use client";
import { motion } from "framer-motion";
import { HeroHighlight, Highlight } from "./ui/hero-highlight";
import Image from "next/image";



export function HeroHighlightDemo() {
  return (
    <div className="mt-20">
      <HeroHighlight>
        <motion.h1
          initial={{
            opacity: 0,
            y: 20,
          }}
          animate={{
            opacity: 1,
            y: [20, -5, 0],
          }}
          transition={{
            duration: 0.5,
            ease: [0.4, 0.0, 0.2, 1],
          }}
          className="text-2xl px-4 md:text-4xl lg:text-5xl font-bold text-neutral-700 dark:text-white max-w-4xl leading-relaxed lg:leading-snug text-center mx-auto "
        >
          The most configurable and transparent{" "}
          <Highlight className="text-black dark:text-white">
            Pricing Engine
          </Highlight>{" "}
          for retail
        </motion.h1>
        <p className="text-neutral-500 max-w-lg text-xl mx-auto my-6 text-center relative z-10">
          Luca&apos;s AI-powered pricing engine uses sales patterns and market
          intelligence to recommend prices, guaranteeing profit and revenue
          gains.
        </p>
        <div className="flex justify-center">
          <button className="p-[3px] relative">
            <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg" />
            <div className="px-8 py-2 bg-black rounded-[6px] relative group transition duration-200 text-white hover:bg-transparent">
              Book A Demo
            </div>
          </button>
        </div>
        <p className="text-neutral-500 max-w-2xl mx-auto text-2xl my-10 text-center relative z-10">
          These companies make more money with Luca
        </p>
        <div className="flex justify-center flex-wrap items-center gap-8">
          <Image 
            width={90}
            height={90}
            alt=""
            src="https://assets-global.website-files.com/632ccb00bcdae75835d251df/6552c450a6c96c60086f79ff_image%20100%20(1).png"
          />
          <Image
            width={90}
            height={90}
            alt=""
            src="https://assets-global.website-files.com/632ccb00bcdae75835d251df/6552c51a1d33c702ff609557_duffl.png"
          />
          <Image
            width={90}
            height={90}
            alt=""
            src="https://assets-global.website-files.com/632ccb00bcdae75835d251df/65cfee11af264042807eb728_H%20Logo.png"
          />
          <Image
            width={90}
            height={90}
            alt=""
            src="https://assets-global.website-files.com/632ccb00bcdae75835d251df/6541936d05b807c8c26d4176_Rectangle%20316.png"
          />
          <Image
            width={90}
            height={90}
            alt=""
            src="https://assets-global.website-files.com/632ccb00bcdae75835d251df/654ae60445f70069d72cc008_image%20106.png"
          />
          <Image
            width={90}
            height={90}
            alt=""
            src="https://assets-global.website-files.com/632ccb00bcdae75835d251df/6553b6a151c8601c2669b231_Acquco.jpeg"
          />
        </div>
      </HeroHighlight>
    </div>
  );
}

