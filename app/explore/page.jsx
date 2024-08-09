"use client";

import React, { useState } from "react";
import ExploreCard from "@/components/ExploreCard";
import Image from "next/image";

import { motion } from "framer-motion";

import {
  TypingText,
  TitleText,
  DescriptionText,
} from "@/components/CustomTexts";
import { staggerContainer, fadeIn } from "@/utils/motion";

import park1Logo from "@/public/park-1-logo.png";
import park2Logo from "@/public/park-2-logo.png";
import park3Logo from "@/public/park-3-logo.png";
import park4Logo from "@/public/park-4-logo.png";
import park5Logo from "@/public/delos-logo.png";
import park6Logo from "@/public/park-6-logo.png";

const parks = [
  {
    id: "park-1",
    name: "Westworld",
    img: "/park-1.jpg",
    logo: park1Logo,
    description:
      "Experience the first vacation destination where you can live without limits. Westworld is a meticulously crafted and artfully designed park offering an unparalleled, immersive world where you have the freedom to become who you’ve always wanted to be — or who you never knew you were. Exist free of rules, laws or judgment. No impulse is taboo. Our hosts are here to fulfill your every desire. They look forward to serving you.",
  },
  {
    id: "park-2",
    name: "Shōgunworld",
    img: "/park-2.webp",
    logo: park2Logo,
    description:
      "For those for whom Westworld is not enough, the true connoisseur of gore can indulge their fantasies with the slash of a katana. Modeled after Japan's Edo period, Shogun World offers a chance for guests to embrace their inner warrior, in a landscape of highest beauty and darkest horror. Let your true self take shape in the land where self-discovery is an art form.",
  },
  {
    id: "park-3",
    name: "Warworld",
    img: "/park-3.webp",
    logo: park3Logo,
    description:
      "War is a mystery wrapped in an enigma that only a true spymaster can solve. A challenge for the guest who prefers mind over matter, this WWII epic plunges you into a dangerous maze of tradecraft and seduction from which few escape. Dare to undertake this harrowing journey of risk and romance, and get the chance to defeat history’s ultimate villains: the Nazis.",
  },
  {
    id: "park-4",
    name: "Medievalworld",
    img: "/park-4.jpg",
    logo: park4Logo,
    description:
      "This is Medievalworld, where we have reconstructed 13th-century Europe. A world of chivalry and combat, romance and excitement. Our teams of engineers have spared no expense in this re-creation, precise to the smallest detail. We added some fantasy falvour in order to make your quest more mistical, you can even see the most amazing creatures flying somewhere in the highest rocks.",
  },
  {
    id: "park-5",
    name: "Park 5",
    img: "/park-5.webp",
    logo: park5Logo,
    description:
      "Park Five of Delos Destinations is based on the suburbia of the United States of America and is for Defense Contracts Only.",
  },
  {
    id: "park-6",
    name: "The Raj",
    img: "/park-6.png",
    logo: park6Logo,
    description:
      "Come and experience the grandeur and love of a place lost in time. If being pampered by our world-class spa isn’t your cup of Darjeeling Tea, the park's jungles and mountains are your only chance to glimpse magnificent beasts long vanished from your world.",
  },
];

const narrativeText =
  "Delos Destinations employs a team of world-class writers, designers, and storytellers to craft intricate, multi-layered narratives that cater to a wide range of guest preferences. These narratives are designed to be both flexible and adaptive, allowing guests to interact with the world and its characters in ways that shape the story's outcome.";
const introText =
  "Delos Destinations is the premier name in immersive entertainment, offering unparalleled experiences in their state-of-the-art theme parks. Each park is a fully realized world where guests can step into the past or an entirely different reality, living out their fantasies in environments that are as authentic as they are thrilling. These parks are not just attractions but entire worlds, where the boundary between fiction and reality blurs.";

export default function Explore() {
  const [activePark, setActivePark] = useState("park-1");

  return (
    <div className="w-[95%] m-auto">
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

          <div>
            <TypingText
              title="| addaptive narratives"
              textStyles="text-center"
            />
            <DescriptionText text={narrativeText} />

            <div className="m-20 flex justify-center items-center">
              <Image
                src={"/branch.jpg"}
                width={500}
                height={500}
                alt="branch"
              />
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
                  programmed with deep backstories and personalities, allowing
                  for rich character interactions. Guests can form relationships
                  with these characters, which evolve based on their actions and
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
                  For instance, if a guest decides to rob a bank in Westworld,
                  the town’s law enforcement might increase its presence,
                  creating new challenges and opportunities for other guests.
                  This dynamic environment ensures that no two visits are the
                  same.
                </p>
              </div>
            </div>
          </div>

          <motion.img
            variants={fadeIn("up", "tween", 0.3, 1)}
            src="/arrow.svg"
            alt="arrow down"
            className="w-[18px] h-[28px] object-contain mt-[28px]"
          />
        </motion.div>
      </section>
      <section id="explore" className="m-auto">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.25 }}
          className={` mx-auto flex flex-col`}
        >
          <TypingText title={`| The World`} textStyles="text-center" />
          <TitleText
            title={
              <>
                Choose the world you want <br className="md:block hidden" /> to
                explore
              </>
            }
            textStyles="text-center"
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
      </section>
    </div>
  );
}
