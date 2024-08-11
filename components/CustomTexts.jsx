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
    className={`m-14 font-bold text-violet-300 ${textStyles}`}
  >
    {title}
  </motion.h2>
);

//variants={fadeIn("up", "tween", 0.2, 1)}

export const DescriptionText = ({ text, textStyles }) => (
  <motion.p
    variants={textVariant2}
    initial="hidden"
    whileInView="show"
    className={`m-10 text-2xl font-light text-center text-teal-200 ${textStyles}`}
  >
    {text}
  </motion.p>
);
