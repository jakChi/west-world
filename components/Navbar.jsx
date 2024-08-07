"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

//import { navVariants } from "@/utils/motion";

const navLinks = [
  { title: "THE PARK", href: "" },
  { title: "THE HOSTS", href: "" },
  { title: "EXPERIENCE", href: "" },
  { title: "PACKAGES", href: "" },
];

export default function Navbar() {
  return (
    <motion.nav
      initial={{ y: -10, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 1 }}
      className="w-full h-16 p-1 m-auto text-center relative z-10  flex"
    >
      <Image src="" alt="logo" />

      <ul className="flex w-2/3 justify-start text-xl ">
        {navLinks.map((link, index) => (
          <Link href={link.href} key={index} className="mx-5 p-1 tracking-widest">
            {link.title}
          </Link>
        ))}
      </ul>
    </motion.nav>
  );
}
