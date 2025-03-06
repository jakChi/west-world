"use client";

import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";

import { hosts } from "@/data/hosts";
import { TypingText } from "@/components/CustomTexts";
import { listItem } from "@/utils/motion";
import InfiniteImages from "@/components/InfiniteImages";
import { locations } from "@/data/locations";


const areas = [
  "High Plains",
  "Mines",
  "Lowlands",
  "Old Fields",
  "Badlands",
  "Ranch Land",
  "Canyons",
  "Desert",
  "Sand Dunes",
  "Old Territory",
  "Unclaimed Territories",
  "Sector 3",
  "Sector 16",
  "Sector 17",
  "Sector 19",
  "Sector 20",
  "Where the Mountains Meet the Sea",
];

export default function Park() {
  const localHosts = hosts.filter((host) =>
    host.history
      .map((hist) => {
        return hist.park;
      })
      .includes("park-1")
  );

  const localImages = localHosts.map(
    (host) => host.history[host.history.length - 1].imgUrl
  );

  return (
    <div className="w-full m-auto">
      <motion.section id="map" className="w-full h-screen flex">
        <motion.div className="relative">
          <Image
            className="m2 m-auto rounded-[50px]"
            src={"/map-1.png"}
            alt="map"
            width={1200}
            height={1000}
          ></Image>
          <div className="absolute w-full h-1/2 left-20 top-1/3 rounded-full inset-0 gradient-01 -z-10" />

          <Link href={"#Sweet Water"}>
            <Image
              src="/host-2.webp"
              width={100}
              height={50}
              alt="people"
              className="absolute top-52 right-[33rem] object-cover rounded-full w-[50px] h-[50px] border-2 border-red-800"
            />
          </Link>

          <Link href={"#Abernathy Ranch"}>
            <Image
              src="/host-1-4.webp"
              width={100}
              height={50}
              alt="people"
              className="absolute top-64 right-[37rem] object-cover rounded-full w-[50px] h-[50px] border-2 border-yellow-500"
            />
          </Link>
        </motion.div>

        <motion.div>
          <motion.h1 className="text-5xl text-center font-extrabold m-5 p-4 rounded-lg text-emerald-500">
            WESTWORLD
          </motion.h1>
          <ul className="text-xl text-center">
            {areas.map((area, index) => (
              <li
                key={index}
                className="p-1 w-2/3 font-mono  mx-auto rounded-3xl hover:cursor-pointer hover:text-emerald-500"
              >
                {area}
              </li>
            ))}
          </ul>
        </motion.div>
      </motion.section>
      <motion.section
        id="loations"
        className="w-2/3 m-auto"
        initial="hidden"
        whileInView="show"
      >
        <TypingText title={"| Locations of Westworld"} />
        {locations.map((location, index) => (
          <motion.div
            key={index}
            id={location.name}
            variants={listItem}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: true }}
            className="relative flex justify-center items-center h-[70vh]  my-10"
          >
            <div className="w-1/3 mx-2">
              <h1 className="my-2 text-6xl font-semibold tracking-widest">{location.name}</h1>
            </div>
            <div className="w-2/3">
              <Image
                src={location.img}
                width={1000}
                height={1000}
                alt={location.name}
                className="rounded-3xl"
              />
            </div>
            <p className="absolute bottom-20 w-full p-5 rounded-2xl rounded-tr-none bg-teal-800/50 backdrop-blur-lg font-mono">{location.description}</p>
          </motion.div>
        ))}
      </motion.section>
      <motion.section className="" initial="hidden" whileInView="show">
        <TypingText title={"| Hosts of the Westworld"} />

        <InfiniteImages images={localImages} />
      </motion.section>
    </div>
  );
}
