"use client";

import { motion } from "framer-motion";
import { textContainer, textVariant, textVariant2 } from "@/utils/motion";

export const TypingText = ({ title, textStyles }) => (
  <motion.p
    variants={textContainer}
    className={`w-fit my-6 m-auto font-mono text-2xl bg-clip-text bg-gradient-to-r from-violet-500 to-teal-500 text-transparent ${textStyles}`}
  >
    {Array.from(title).map((letter, index) => (
      <motion.span variants={textVariant2} key={index}>
        {letter === " " ? "\u00A0" : letter}
      </motion.span>
    ))}
  </motion.p>
);

export const TitleText = ({ title, textStyles }) => (
  <motion.h2
    variants={textVariant2}
    initial="hidden"
    whileInView="show"
    className={`my-10 font-bold text-violet-300 ${textStyles}`}
  >
    {title}
  </motion.h2>
);

//variants={fadeIn("up", "tween", 0.2, 1)}

export const DescriptionText = ({ text, textStyles }) => (
  <motion.p
    variants={textVariant(1)}
    className={`w-3/4 text-pretty my-16 m-auto text-2xl font-light text-teal-300 font-serif ${textStyles}`}
  >
    {text}
  </motion.p>
);
