"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

//import { navVariants } from "@/utils/motion";

const navLinks = [
  { title: "THE PARK", href: "/park" },
  { title: "THE HOSTS", href: "/hosts" },
  { title: "EXPERIENCE", href: "/explore" },
  { title: "PACKAGES", href: "/explore" },
  { title: "ABOUT", href: "/about" },
];

export default function Navbar() {
  return (
    <motion.nav
      initial={{ y: -10, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 1 }}
      className="absolute w-full h-20 p-3 px-20 m-auto text-center z-10 flex justify-start"
    >
      <Image
        src="/logo-3.png"
        alt="logo"
        width={100}
        height={100}
        className="mx-10"
      />

      <ul className="flex w-2/3 justify-start text-xl text-black">
        {navLinks.map((link, index) => (
          <Link
            href={link.href}
            key={index}
            className="mx-5 p-3 tracking-widest"
          >
            {link.title}
          </Link>
        ))}
      </ul>
    </motion.nav>
  );
}
