import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";

import { figVariants, figCaptionVariants, titleVariants, } from "@/utils/motion";

export default function TechFig({ imgUrl, title, caption }) {
  return (
    <motion.div
      className="relative flex-col justify-around items-center my-32 min-h-[70vh]">
      <motion.h1
        variants={titleVariants}
        initial="hidden"
        whileInView={"visible"}
        viewport={{once: true}}
        className="w-full my-20 text-8xl text-center font-extrabold text-indigo-500 border-8 border-transparent ">
        {title}
      </motion.h1>
      <motion.figure
        variants={figVariants}
        initial="inActive"
        whileInView="active"
        viewport={{once: true}}
        className="w-full flex items-center relative"
      >
        <div className="w-3/5 mr-10 h-auto overflow-hidden rounded-3xl">
          <Image
            src={imgUrl}
            alt={title}
            className="w-full h-full object-cover"
          />
        </div>
        <motion.figcaption className="w-2/5 h-max text-lg font-mono text-indigo-300">
          {caption}
        </motion.figcaption>
      </motion.figure>
    </motion.div>
  );
}
