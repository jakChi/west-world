"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";

import { motion } from "framer-motion";
import { fadeIn, slideIn, staggerContainer, textVariant } from "@/utils/motion";

export default function Hero() {
  return (
    <section className="w-2/3 h-screen m-auto flex items-center">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className={`h-full mx-auto border flex flex-col`}
      >
        <motion.div
          variants={fadeIn("bottom", "tween", 0.2, 1)}
          className="absolute top-0 left-0 w-full flex justify-center items-center z-0"
        >
          <Image
            src="/Westworld-hero.jpg"
            width={1200}
            height={1080}
            alt="hero_cover"
            className="w-full h-screen object-cover relative"
          />
          <div className="w-[530px] h-[530px] absolute rounded-full shadow-[0_0_100px_1000px_rgba(107,86,64,0.4)]" />
          <div className="w-[484px] h-[484px] absolute rounded-full shadow-[0_0_100px_1000px_rgba(107,86,64,0.3)]" />
          <div className="w-[450px] h-[450px] absolute rounded-full shadow-[0_0_0_17px_rgba(148,106,62,0.4)]" />
        </motion.div>
        <div className="w-full h-4/5 m-auto flex flex-col justify-center z-10 ">
          <div className="text-8xl font-mono tracking-widest leading-[7rem]">
            <motion.h1>LIVE</motion.h1>
            <motion.h1>WITHOUT</motion.h1>
            <motion.h1>LIMITS</motion.h1>
          </div>
          <motion.p className="w-2/5 text-base font-bold my-12 tracking-wide first-letter:text-2xl">
            Welcome to Westworld - the ultimate immersive vacation experience.
            Step into a world where anything is possible, where your wildest
            dreams can come true...
          </motion.p>
          <motion.div>
            <Link href="" className="tracking-[10px] text-yellow-600 p-2">
              EXPLORE
              <Image
                src="/arrow.svg"
                width={20}
                height={20}
                alt="arrow"
                className="inline m-2"
              />
            </Link>
          </motion.div>
        </div>
      </motion.div>
      <motion.button className="z-10 w-72 h-16 p-2 absolute right-0 top-[25rem] text-lg font-extrabold tracking-[10px] bg-stone-600/40 backdrop-blur-sm backdrop-brightness-150">
        <Link href="">THE PARK ➡</Link>
      </motion.button>
    </section>
  );
}