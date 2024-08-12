"use client";

import React from "react";
import Image from "next/image";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
// import { wrap } from "popmotion";

const variants = {
  enter: (direction) => {
    return {
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
    };
  },
  center: {
    zIndex: 1,
    x: 0,
    opacity: 1,
  },
  exit: (direction) => {
    return {
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
    };
  },
};

const swipeConfidenceThreshold = 10000;
const swipePower = (offset, velocity) => {
  return Math.abs(offset) * velocity;
};

export default function HostCard({ ...props }) {
  const [[page, direction], setPage] = useState([0, 0]);

  const images = ["/host-1.webp", "/host-2.webp", "/host-3.webp"];

  const paginate = (newDirection) => {
    setPage([page + newDirection, newDirection]);
  };

  //const currentVersion = props.history[props.history.length - 1];

  // const idToName = (id) => {
  //   hosts.map(elem => {
  //     const version = elem.history.filter(hist => id === hist.versionId);
  //     const name =
  //   })
  // }

  //const hostAge = new Date(currentVersion.launchDate - new Date()).getFullYear();

  // const imageIndex = wrap(0, images.length, page);

  return (
    <div className="relative">
      <AnimatePresence initial={false} custom={direction}>
        <motion.img
          key={page}
          className="w-96"
          src={images[page]}
          custom={direction}
          variants={variants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{
            x: { type: "tween", stiffness: 500, damping: 20 },
            opacity: { duration: 0 },
          }}
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          dragElastic={1}
          onDragEnd={(e, { offset, velocity }) => {
            const swipe = swipePower(offset.x, velocity.x);

            if (swipe < -swipeConfidenceThreshold) {
              page !== images.length - 1
                ? paginate(1)
                : paginate(-(images.length - 1));
            } else if (swipe > swipeConfidenceThreshold) {
              page !== 0 ? paginate(-1) : paginate(images.length - 1);
            }
          }}
        />
      </AnimatePresence>
      <div
        className="text-5xl absolute bottom-0 left-10"
        onClick={() =>
          page !== images.length - 1
            ? paginate(1)
            : paginate(-(images.length - 1))
        }
      >
        {">"}
      </div>
      <div
        className="text-5xl absolute bottom-0"
        onClick={() =>
          page !== 0 ? paginate(-1) : paginate(images.length - 1)
        }
      >
        {"<"}
      </div>
    </div>
  );
}
