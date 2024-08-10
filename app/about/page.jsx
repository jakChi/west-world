"use client";

import React from 'react'
import { motion } from 'framer-motion';
import Image from 'next/image';

import { TitleText, TypingText, DescriptionText } from '@/components/CustomTexts';
import { staggerContainer, fadeIn } from '@/utils/motion';

const introText =
  "Delos Destinations is the premier name in immersive entertainment, offering unparalleled experiences in their state-of-the-art theme parks. Each park is a fully realized world where guests can step into the past or an entirely different reality, living out their fantasies in environments that are as authentic as they are thrilling. These parks are not just attractions but entire worlds, where the boundary between fiction and reality blurs.";
const narrativeText =
  "Delos Destinations employs a team of world-class writers, designers, and storytellers to craft intricate, multi-layered narratives that cater to a wide range of guest preferences. These narratives are designed to be both flexible and adaptive, allowing guests to interact with the world and its characters in ways that shape the story's outcome.";


export default function About() {
  return (
    <section id="about" className="w-4/5 m-auto">
      <TitleText
        title="Welcome to the Delos Destinations"
        textStyles="text-3xl text-center m-20"
      />

      <div className="gradient-02 z-0" />

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className={`mx-auto flex-col`}
      >
        <div>
          <TypingText
            title="| about Delos Destinations"
            textStyles="text-center"
          />
          <DescriptionText text={introText} />
        </div>

        <motion.img
          variants={fadeIn("up", "tween", 0.3, 1)}
          src="/arrow.svg"
          alt="arrow down"
          className="w-[18px] h-[28px] object-contain mt-[28px]"
        />

        <div id="about-narrative">
          <TypingText title="| addaptive narratives" textStyles="text-center" />
          <DescriptionText text={narrativeText} />

          <div className="m-20 flex justify-center items-center">
            <Image src={"/branch.jpg"} width={500} height={500} alt="branch" />
            <div className="w-1/2 m-10">
              <TitleText
                title={"Branching Storylines"}
                textStyles={"text-2xl my-16"}
              />
              <p className="text-xl tracking-wide">
                Each park features numerous interconnected storylines, ranging
                from simple encounters to complex, epic quests. These stories
                are designed to branch based on the decisions made by guests.
                For example, in Westworld, a simple conversation with a host
                could lead to a series of events that take you on a thrilling
                journey across the frontier.
              </p>
            </div>
          </div>

          <div className="m-20 flex justify-center items-center">
            <Image
              src={"/character-development.jpg"}
              width={500}
              height={500}
              alt="branch"
              className="rounded-full"
            />
            <div className="w-1/2 m-10">
              <TitleText
                title={"Character Development"}
                textStyles={"text-2xl my-16"}
              />
              <p className="text-xl tracking-wide">
                Hosts, the lifelike androids that populate the parks, are
                programmed with deep backstories and personalities, allowing for
                rich character interactions. Guests can form relationships with
                these characters, which evolve based on their actions and
                choices. A guest might become the trusted ally of a noble
                samurai in Shogunworld or a feared outlaw in Westworld,
                depending on their decisions.
              </p>
            </div>
          </div>

          <div className="m-20 flex justify-center items-center">
            <Image
              src={"/dinamic-environment.jpg"}
              width={500}
              height={500}
              alt="branch"
              className="rounded-3xl"
            />
            <div className="w-1/2 m-10">
              <TitleText
                title={"Dinamic Environment"}
                textStyles={"text-2xl my-16"}
              />
              <p className="text-xl tracking-wide">
                The parks are designed to react to the choices made by guests.
                For instance, if a guest decides to rob a bank in Westworld, the
                town’s law enforcement might increase its presence, creating new
                challenges and opportunities for other guests. This dynamic
                environment ensures that no two visits are the same.
              </p>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
