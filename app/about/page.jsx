"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

import {
  TitleText,
  TypingText,
  DescriptionText,
} from "@/components/CustomTexts";
import { staggerContainer, fadeIn } from "@/utils/motion";
import TechFig from "@/components/TechFig.jsx";

import branch from "@/public/branch.jpg";

import advandedRobotics from "@/public/advanced-robotics.jpg";
import AI from "@/public/AI.jpg";
import environment from "@/public/environment-control.webp";
import safety from "@/public/monitoring.jpg";
import AboutFig from "@/components/AboutFig";

const introText =
  "Delos Destinations is the premier name in immersive entertainment, offering unparalleled experiences in their state-of-the-art theme parks. Each park is a fully realized world where guests can step into the past or an entirely different reality, living out their fantasies in environments that are as authentic as they are thrilling. These parks are not just attractions but entire worlds, where the boundary between fiction and reality blurs.";

export default function About() {
  return (
    <>
      <section id="about" className="w-4/5 m-auto">
        <TitleText
          title="Welcome to the Delos Destinations"
          textStyles="text-8xl text-center m-20"
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
            <TypingText title="| Delos Destinations" textStyles="text-center" />
            <DescriptionText text={introText} />

            <DescriptionText
              textStyles={""}
              text={
                "Westworld was conceived by three visionaries: James Delos, Robert Ford, and Arnold Weber. Together, they dreamed of creating a new frontier in entertainment, pushing the boundaries of what was possible with technology and storytelling."
              }
            />

            <motion.div className="flex w-full">
              <figure className="w-1/3">
                <div className="w-[95%] h-[15rem] overflow-hidden rounded-3xl">
                  <Image
                    src={"/arnoldWeber.jpg"}
                    width={400}
                    height={400}
                    alt="Arnold Weber"
                    className="w-full h-full object-cover object-top"
                  />
                </div>
                <figcaption className="font-mono text-sm w-[90%] text-pretty text-justify m-2 text-slate-500">
                  <span className="font-semibold italic text-white">
                    Arnold Weber
                  </span>{" "}
                  believed that the hosts could achieve a form of consciousness
                  and was committed to nurturing their development beyond simple
                  scripted roles. This belief led to the implementation of the
                  &quot;reveries&quot;—small gestures and mannerisms that
                  allowed the hosts to access memories and develop more
                  realistic behaviors.
                </figcaption>
              </figure>

              <figure className="w-1/3">
                <div className="w-[95%] h-[15rem] overflow-hidden rounded-3xl">
                  <Image
                    src={"/robertFord.jpg"}
                    width={400}
                    height={400}
                    alt="Robert Ford"
                    className="w-full h-full object-cover object-top"
                  />
                </div>
                <figcaption className="font-mono text-sm w-[90%] text-pretty text-justify m-2 text-slate-500">
                  As the co-founder and creative director,{" "}
                  <span className="font-semibold italic text-white">
                    Robert Ford
                  </span>{" "}
                  brought his expertise in artificial intelligence and robotics
                  to the table. Ford was the genius behind the park&apos;s
                  lifelike hosts—androids so advanced they can interact with
                  guests on an emotional level, creating deeply personal and
                  engaging experiences.
                </figcaption>
              </figure>
              <figure className="w-1/3">
                <div className="w-[95%] h-[15rem] overflow-hidden rounded-3xl">
                  <Image
                    src={"/jamesDelos.jpg"}
                    width={400}
                    height={400}
                    alt="James Delos"
                    className="w-full h-full object-cover object-top"
                  />
                </div>
                <figcaption className="font-mono text-sm w-[90%] text-pretty text-justify m-2 text-slate-500">
                  <span className="font-semibold italic text-white">
                    James Delos{" "}
                  </span>
                  saw the potential in pushing the boundaries of what theme
                  parks could offer. His vision was to create worlds that could
                  immerse guests in history, culture, and adventure, all while
                  maintaining the highest standards of luxury and safety.
                </figcaption>
              </figure>
            </motion.div>
          </div>
        </motion.div>
      </section>
      <section className="w-[85%] m-auto">
        <motion.div id="about-narrative" initial="hidden" whileInView="show">
          <TypingText title="| addaptive narratives" textStyles="text-center" />
          <DescriptionText
            text={
              "We employ a team of world-class writers, designers, and storytellers to craft intricate, multi-layered narratives. These narratives are designed to be both flexible and adaptive, allowing guests to interact with the world and its characters in ways that shape the story's outcome."
            }
          />

          <div className="m-20 flex justify-center items-center">
            <Image src={"/branch.jpg"} width={500} height={500} alt="branch" />
            <div className="w-1/2 m-10">
              <TitleText
                title={"Branching Storylines"}
                textStyles={"text-7xl"}
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
                textStyles={"text-5xl my-16"}
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
              src={"/dinamic-environment.png"}
              width={500}
              height={500}
              alt="branch"
              className="rounded-3xl"
            />
            <div className="w-1/2 m-10">
              <TitleText
                title={"Dinamic Environment"}
                textStyles={"text-5xl my-16 w-full"}
              />
              <p className="text-xl tracking-wide">
                The parks are designed to react to the choices made by guests.
                For instance, if a guest decides to rob a bank in Westworld, the
                town&apos;s law enforcement might increase its presence,
                creating new challenges and opportunities for other guests. This
                dynamic environment ensures that no two visits are the same.
              </p>
            </div>
          </div>
        </motion.div>
        <motion.div initial="hidden" whileInView="show">
          <TypingText title={"| Top-notch Technology"} />
          <DescriptionText
            text={
              "We utilize some of the most advanced technologies in the world to bring our parks to life, ensuring that the experiences are as immersive and realistic as possible."
            }
          />

          <TechFig
            imgUrl={advandedRobotics}
            title={"Advanced Robotics"}
            caption={
              "The hosts in Delos parks are state-of-the-art androids, indistinguishable from humans in appearance, behavior, and emotions. They are capable of complex interactions, realistic movements, and can even sustain damage like a real person would."
            }
          />
          <TechFig
            imgUrl={AI}
            title={"Artificial Intelligence"}
            caption={
              "The AI that powers Delos Destinations’ hosts and environments is incredibly sophisticated. It allows hosts to understand and respond to guest actions in real-time, creating an experience that feels authentic and spontaneous."
            }
          />
          <TechFig
            imgUrl={environment}
            title={"Environmental Control"}
            caption={
              "The parks are equipped with technology that controls everything from weather conditions to the time of day, ensuring that the environment matches the narrative perfectly. This can include creating a thunderstorm during a dramatic showdown or a beautiful sunset at the end of a successful quest."
            }
          />
          <TechFig
            imgUrl={safety}
            title={"Real-Time Monitoring"}
            caption={
              "While guests are encouraged to lose themselves in the experience, Delos Destinations takes safety seriously. The parks are equipped with real-time monitoring systems that track guest activities, ensuring that no one is in real danger. Hosts are programmed with strict safety protocols, and the park's control center can intervene if necessary to protect guests."
            }
          />
        </motion.div>
      </section>
    </>
  );
}
