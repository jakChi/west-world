"use client";

import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

import {
  TypingText,
  TitleText,
  DescriptionText,
} from "@/components/CustomTexts";
import {
  staggerContainer,
  fadeIn,
  gridContainer,
  gridItem,
} from "@/utils/motion";
import { parks } from "@/data/parks";
import { narratives } from "@/data/narratives";
import ExploreCard from "@/components/ExploreCard";
import Link from "next/link";

const narrativeIntro =
  "The narratives of the Delos Destinations parks are designed to provide a wide range of experiences, each catering to different interests and desires. Here are some examples of narratives that could be found in different parks.";

export default function Explore() {
  const [activePark, setActivePark] = useState("park-1");
  const [activeNarrative, setActiveNarrative] = useState(0);

  return (
    <section id="explore" className="w-[90%] m-auto">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: "some" }}
        className={`mx-auto flex flex-col relative`}
      >
        <div className="explore-gradient absolute top-0 w-[20rem] h-[20rem] " />
        <TypingText title={`| The World`} textStyles="text-center" />
        <TitleText
          title={
            <>
              Choose the world you want <br className="md:block hidden" /> to
              explore
            </>
          }
          textStyles="text-center text-6xl"
        />
        <DescriptionText
          text={
            "Delos Destinations is offering you an unparalleled experiences in our state of the art theme parks. These parks are not just attractions but entire worlds, where the boundary between fiction and reality blurs."
          }
        />
        <div className="mt-[50px] flex lg:flex-row flex-col min-h-[70vh] gap-5">
          {parks.map((park, index) => (
            <ExploreCard
              key={park.id}
              {...park}
              index={index}
              active={activePark}
              handleClick={setActivePark}
            />
          ))}
        </div>
      </motion.div>
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: "some" }}
        className="m-auto my-32 h-screen relative"
      >
        <TypingText title={`| The Narrative`} />
        <TitleText
          title={"Explore Dimanic Narratives"}
          textStyles={"text-center text-6xl"}
        />
        <DescriptionText text={narrativeIntro} />

        <motion.div
          className={`relative w-4/5 grid grid-cols-3 gap-10 m-auto before:absolute  before:transition-all before:duration-300 ${
            activeNarrative
              ? "before:w-full before:h-full before:backdrop-blur-sm "
              : null
          }`}
          variants={gridContainer}
          initial="hidden"
          whileInView="visible"
        >
          {narratives.map((narrative, index) => (
            <motion.div
              key={index}
              layoutId={narrative.id}
              variants={gridItem}
              onClick={() => !activeNarrative && setActiveNarrative(narrative)}
              className={`w-full h-72 m-auto rounded-3xl p-3 cursor-pointer hover:bg-indigo-600/60 transition-colors delay-200 duration-200 hover:delay-0`}
            >
              <motion.img
                src={narrative.img}
                className="object-cover object-top w-full h-2/3 rounded-2xl"
              />
              <motion.h2 className="text-xl text-center m-4">
                {narrative.title}
              </motion.h2>
            </motion.div>
          ))}
          <AnimatePresence>
            {activeNarrative && (
              <motion.div
                layoutId={activeNarrative.id}
                className={`absolute -top-5 left-44 w-[70%] h-[60vh] rounded-3xl p-3 bg-indigo-900/70 backdrop-blur-lg`}
              >
                <motion.img
                  src={activeNarrative.img}
                  className="object-cover object-top w-full h-2/3 rounded-2xl"
                />
                <motion.h5 className="text-lg my-5">
                  {activeNarrative.plot}
                </motion.h5>
                <motion.h2 className="text-3xl font-extrabold">
                  {activeNarrative.title}
                </motion.h2>
                <motion.button
                  className="absolute top-5 right-5 bg-amber-900 p-2 w-10 h-10 rounded-full"
                  onClick={() => setActiveNarrative(null)}
                >
                  ❌
                </motion.button>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
        <div className="absolute top-10 left-1/2 w-[40rem] h-[15rem] -rotate-45 rounded-full gradient-02 -z-10" />
      </motion.div>
      <motion.p className="mt-20 text-xl bg-gradient-to-r from-teal-600 to-indigo-600 bg-clip-text text-transparent text-center font-mono tracking-widest">
        Why take our word for it when you can experience it yourself{" "}
      </motion.p>
      <Link
        href="/singup"
        className="block w-[10%] m-auto my-10 text-center uppercase font-extrabold text-teal-400 bg-purple-950 animate-bounce hover:animate-none hover:shadow-[0_0_100px_5px_rgb(139,0,252)] transition-all duration-500 p-2 rounded-lg"
      >
        Sign up
      </Link>
    </section>
  );
}
