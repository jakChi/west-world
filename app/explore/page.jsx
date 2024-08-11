"use client";

import React, { useState } from "react";
import ExploreCard from "@/components/ExploreCard";
import { NarrativeCard } from "@/components/NarrativeCard";
import Image from "next/image";

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
      "This is Medievalworld, where we have reconstructed 13th-century Europe. A world of chivalry and combat, romance and excitement. Our teams of engineers have spared no expense in this re-creation, precise to the smallest detail. We added some fantasy falvours in order to make your quest more mistical.",
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
const narratives = [
  {
    id: "narrative-1",
    title: "The Outlaw’s Quest",
    plot: "Guests can join a notorious gang and participate in a series of high-stakes heists, train robberies, and showdowns. Choices made during the quest will affect their reputation and alliances within the park, leading to different endings.",
    img: "/narrative-1.jpg",
    park: "Westworld",
  },
  {
    id: "narrative-2",
    title: "The Lawman’s Dilemma",
    plot: "Step into the shoes of a sheriff or deputy tasked with bringing justice to a lawless town. Investigate crimes, solve mysteries, and decide whether to uphold the law or bend it to your will.",
    img: "/narrative-2.jpg",
    park: "Westworld",
  },
  {
    id: "narrative-3",
    title: "The Rancher’s Legacy",
    plot: "Help a family of ranchers defend their homestead from land grabbers and rival ranchers. Guests can choose to use diplomacy, form alliances, or take up arms to protect the land.",
    img: "/narrative-3.jpg",
    park: "Westworld",
  },
  {
    id: "narrative-4",
    title: "The Ronin’s Path",
    plot: "Assume the role of a wandering samurai seeking redemption. Guests can master the art of the sword, face off against powerful adversaries, and make choices that determine their legacy.",
    img: "/narrative-4.jpg",
    park: "Shōgunworld",
  },
  {
    id: "narrative-5",
    title: "The Geisha’s Secret",
    plot: "Unravel the mysteries of a geisha house, where intrigue and danger lurk behind every silk screen. Guests must navigate complex social dynamics and uncover hidden plots to protect those they care about.",
    img: "/narrative-5.jpg",
    park: "Shōgunworld",
  },
  {
    id: "narrative-6",
    title: "The Daimyo’s Court",
    plot: "Become an advisor to a powerful daimyo, navigating the treacherous waters of feudal politics. Guests must balance the demands of honor, loyalty, and power to ensure their daimyo’s supremacy.",
    img: "/narrative-6.jpg",
    park: "Shōgunworld",
  },
];

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
        className={`mx-auto flex flex-col`}
      >
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
            "Delos Destinations is offering you an unparalleled experiences in our state-of-the-art theme parks. Each park is a fully realized world where you can step into the past or an entirely different reality, living out your fantasies in environments that are as authentic as you are thrilling. These parks are not just attractions but entire worlds, where the boundary between fiction and reality blurs."
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
        className="m-auto my-32 h-screen"
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
              className={`w-full h-72 m-auto rounded-3xl p-3 cursor-pointer hover:bg-amber-700/40  transition-colors delay-200 duration-200 hover:delay-0`}
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
                className={`absolute -top-5 left-44 w-[70%] h-[60vh] rounded-3xl p-3 bg-amber-900`}
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
      </motion.div>
    </section>
  );
}
