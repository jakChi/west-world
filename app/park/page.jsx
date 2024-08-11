"use client";

import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";

import { hosts } from "@/data/hosts";
import HostProfile from "@/components/HostProfile";

const locations = [
  {
    name: "Train Platform",
    img: "/train-platform.jpg",
    description:
      "The Train Platform is a location in the series Westworld. It is where the train, the 'Black Ridge Limited', stops in Sweetwater when it brings passengers, guests and at least one host (Teddy), into the park. There is no station building, only a platform where the train stops and passengers disembark.",
  },
  {
    name: "Sweet Water",
    img: "/sweet-water.jpeg",
    description:
      "The train will deposit you in this bustling town upon your arrival to Westworld. This vibrant community features a number of friendly people engaged in all sorts of trade, but stay on your toes — the occasional bandit or ne'er-do-well could sneak in. Play a game of faro at the Mariposa Saloon or relax in luxury lodging at the Coronado — no matter what you choose, our hosts aim to please.",
  },
  {
    name: "Mariposa Saloon",
    img: "/mariposa-saloon.jpg",
    description:
      "The Mariposa Saloon was the local saloon and brothel in Sweetwater, Westworld. It is mainly run by madam Maeve Millay, with her assistant and fellow courtesan, Clementine Pennyfeather.",
  },
  {
    name: "Abernathy Ranch",
    img: "/abernathy-ranch.png",
    description:
      "Abernathy Ranch is the home of the decent and hardworking Abernathy family. Located near Sweetwater Hills, the breathtaking homestead overlooks the rolling hills and offers spectacular views of the Sweetwater River. Tend to the herd and work the land during the day...just stay alert after dark, as the secluded ranch is known to be a target of bandits.",
  },
];

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
  const localHosts = hosts.filter(
    (host) =>
      host.history.map((hist) => {
        return hist.park;
      }).includes("park-1")
  );

  return (
    <div>
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
              src="/maeves.webp"
              width={100}
              height={50}
              alt="people"
              className="absolute top-52 right-[33rem] object-cover rounded-full w-[50px] h-[50px] border-2 border-red-800"
            />
          </Link>

          <Link href={"#Abernathy Ranch"}>
            <Image
              src="/dolores.webp"
              width={100}
              height={50}
              alt="people"
              className="absolute top-64 right-[37rem] object-cover rounded-full w-[50px] h-[50px] border-2 border-yellow-500"
            />
          </Link>
        </motion.div>

        <motion.div>
          <motion.h1 className="text-5xl text-center font-extrabold m-5 p-4 rounded-lg text-emerald-500">
            Map of the Park
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
      <motion.section id="loations" className="w-2/3 m-auto">
        {locations.map((location, index) => (
          <motion.div
            key={index}
            id={location.name}
            className="flex justify-center items-center h-screen my-10"
          >
            <div className="w-1/3 mx-2">
              <h1 className="my-2 text-3xl tracking-widest">{location.name}</h1>
              <p className="font-mono">{location.description}</p>
            </div>
            <div className="w-2/3">
              <Image
                src={location.img}
                width={1000}
                height={1000}
                alt={location.name}
                quality={100}
                className="rounded-3xl"
              />
            </div>
          </motion.div>
        ))}
      </motion.section>
      <motion.section>
        {localHosts.map((host, i) => (
          <HostProfile key={i} {...host} />
        ))}
      </motion.section>
    </div>
  );
}
