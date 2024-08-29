"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";

import { motion } from "framer-motion";
import { fadeIn, slideIn, staggerContainer, textVariant } from "@/utils/motion";

export default function Hero() {
  return (
    <section className="relative w-full h-screen flex items-center">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className={`h-full w-full mx-auto flex flex-col`}
      >
        <motion.div
          variants={fadeIn("left", "tween", 0, 1)}
          className="absolute left-0 w-full h-full flex justify-center items-center z-0"
        >
          <Image
            src="/park-1.jpg"
            width={1200}
            height={1080}
            alt="hero_cover"
            priority
            className="w-full h-full object-cover relative"
          />
          <div className="w-[530px] h-[530px] absolute rounded-full shadow-[0_0_100px_1000px_rgba(107,86,64,0.4)]" />
          <div className="w-[484px] h-[484px] absolute rounded-full shadow-[0_0_100px_1000px_rgba(107,86,64,0.3)]" />
          <div className="w-[450px] h-[450px] absolute rounded-full shadow-[0_0_0_17px_rgba(157,63,4,0.2)]" />
        </motion.div>
        <div className="my-auto mt-36 px-64 h-4/5 w-4/5 flex flex-col justify-center z-10 ">
          <div className="text-8xl font-mono tracking-widest leading-[7rem]">
            <motion.h1>LIVE</motion.h1>
            <motion.h1>WITHOUT</motion.h1>
            <motion.h1>LIMITS</motion.h1>
          </div>
          <motion.p className="w-3/5 text-base font-bold my-12 tracking-wide first-letter:text-2xl">
            Welcome to Westworld - the ultimate immersive vacation experience.
            Step into a world where anything is possible, where your wildest
            dreams can come true...
          </motion.p>
          <motion.div>
            <Link
              href="/explore"
              className="tracking-[10px] text-yellow-600 p-2"
            >
              EXPLORE
              <Image
                src="/arrow.svg"
                width={12}
                height={12}
                alt="arrow"
                className="inline m-2"
              />
            </Link>
          </motion.div>
        </div>
      </motion.div>
      <motion.button className="z-10 w-72 h-16 absolute right-0 top-[25rem] text-lg font-extrabold tracking-[10px] bg-stone-600/40 backdrop-blur-sm backdrop-brightness-150">
        <Link href="/park" className="block w-full h-full p-5">THE PARK ➡</Link>
      </motion.button>
    </section>
  );
}
