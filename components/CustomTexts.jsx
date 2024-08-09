"use client";

import { motion } from "framer-motion";
import { textContainer, textVariant, textVariant2 } from "@/utils/motion";

export const TypingText = ({ title, textStyles }) => (
  <motion.p
    variants={textContainer}
    className={`w-1/3 my-10 m-auto font-mono text-2xl bg-clip-text bg-gradient-to-r from-violet-500 to-teal-500 text-transparent ${textStyles}`}
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
    className={`mt-[8px] font-bold text-white ${textStyles}`}
  >
    {title}
  </motion.h2>
);

//variants={fadeIn("up", "tween", 0.2, 1)}

export const DescriptionText = ({ text }) => (
  <motion.p
    variants={textVariant2}
    initial="hidden"
    whileInView="show"
    className="mt-[8px] text-2xl font-light text-center text-secondary-white"
  >
    {text}
  </motion.p>
);
