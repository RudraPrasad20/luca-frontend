"use client";

import React, { useEffect, useState } from "react";
import { InfiniteMovingCards } from "./ui/infinite-moving-cards";


export function InfiniteMovingCardsDemo() {
  return (
    <div className="h-[40rem] rounded-md flex flex-col antialiased bg-white dark:bg-black dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
      <InfiniteMovingCards
        items={testimonials}
        direction="right"
        speed="slow"
      />
    </div>
  );
}

const testimonials = [
  {
    quote:
      "Luca has helped us establish pricing for our DTC Channel. Even though the tool is AI powered, I have full configurability on strategy and different needs that come with running a food business.",
    name: "CMichael Walter",
    title: "Director of eCom, Nature's Path",
  },
  {
    quote:
      "We were trying to hit a profitability target while holding our units volume steady. We needed a Pricing Engine that could hit two birds with one stone! Luca helps us do just that.",
    name: "Lynn Chim",
    title: "Amazon Manager, MBX",
  },
  {
    quote: "We have 7 markets, 1000s of SKUs, constantly shifting competitive dynamics. Luca came in and transformed our processes.",
    name: "Cezar Rachieru",
    title: "VP Operations, Duffl",
  },
  {
    quote:
      "I looked at a lot of options before I picked Luca as our pricing provider. We feel really backed up with how quickly they've customized the solution and got the tool working for our business.",
    name: "Ines Freytes",
    title: "VP of Product, Laika",
  },
  {
    quote:
      "Call me Ishmael. Some years ago—never mind how long precisely—having little or no money in my purse, and nothing particular to interest me on shore, I thought I would sail about a little and see the watery part of the world.",
    name: "Herman Melville",
    title: "Moby-Dick",
  },
];
