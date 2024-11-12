import React from "react";

import { motion } from "framer-motion";
import { fadeIn } from "@/utils/motion";
import Image from "next/image";
import Link from "next/link";

export default function ExploreCard({
  id,
  img,
  logo,
  name,
  description,
  index,
  active,
  handleClick,
}) {
  return (
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.3)}
      className={`relative ${
        active === id ? "lg:flex-[3.5] flex-[10]" : "lg:flex-[0.5] flex-[2]"
      } flex items-center justify-center min-w-[120px] h-[700px] transition-[flex] duration-[0.7s] ease-out-flex`}
    >
      <Image
        src={img}
        alt={name}
        className="absolute w-full h-full object-cover rounded-[24px]"
        width={2000}
        height={1000}
      />
      {active !== id ? (
        <div
          onClick={() => handleClick(id)}
          className={`flex items-center justify-center w-16 h-16 rounded-[24px] backdrop-blur-sm bg-stone-700/50 cursor-pointer`}
        >
          <Image
            src={logo}
            alt={`${id} ${logo}`}
            className="object-cover w-full"
            fill
          />
        </div>
      ) : null}
      {active !== id ? (
        <h3 className="w-56 font-bold sm:text-[26px] text-[18px] text-white absolute bg-stone-700/60 backdrop-blur-sm rounded-3xl p-3 m-2 z-0 text-center lg:bottom-20 lg:rotate-[-90deg] lg:origin-[0,0]">
          {name}
        </h3>
      ) : (
        <div className="absolute bottom-0 p-8 flex justify-start w-full max-h-72 flex-col bg-[rgba(0,0,0,0.7)] rounded-b-[24px]">
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ type: "spring", delay: 0.1, duration: 1 }}
            className="font-extralight text-[16px] text-white"
          >
            {description}
          </motion.p>
          <div className="flex justify-between items-center">
            <h2 className="font-extrabold sm:text-[32px] text-[50px] tracking-wider">
              <Link href={`${id}`}>{name}</Link>
            </h2>
            <div className="w-1/3 h-[1px] bg-white" />
            <div
              className={`flex items-center justify-center w-16 h-16 rounded-[24px] backdrop-blur-sm bg-yellow-100/20 backdrop-brightness-200`}
            >
              <Image
                src={logo}
                alt={`${id} ${logo}`}
                className="object-cover w-full"
                fill
              />
            </div>
          </div>
        </div>
      )}
    </motion.div>
  );
}
