import { AnimatePresence, delay, motion } from "framer-motion";
import { useState } from "react";
import Image from "next/image";

const slideVariants = {
  hiddenRight: {
    x: "100%",
    opacity: 0,
  },
  hiddenLeft: {
    x: "-100%",
    opacity: 0,
  },
  visible: {
    x: "0",
    opacity: 1,
    transition: {
      duration: 0.5,
    },
  },
  exit: {
    opacity: 0,
    scale: 0.8,
    transition: {
      duration: 0.5,
    },
  },
};

const slidersVariants = {
  hover: {
    scale: 1.2,
    backgroundColor: "#ff00008e",
  },
};

const dotsVariants = {
  initial: {
    y: 0,
  },
  animate: {
    y: -10,
    scale: 1.3,
    transition: { type: "spring", stiffness: 1000, damping: "10" },
  },
  hover: {
    scale: 1.1,
    transition: { duration: 0.2 },
  },
};

const images = ["/host-1.webp", "/host-2.webp", "/host-3.webp"];

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState("left");

  const handleNext = () => {
    setDirection("right");
    setCurrentIndex((prevIndex) =>
      prevIndex + 1 === images.length ? 0 : prevIndex + 1
    );
  };
  const handlePrevious = () => {
    setDirection("left");
    setCurrentIndex((prevIndex) =>
      prevIndex - 1 < 0 ? images.length - 1 : prevIndex - 1
    );
  };
  const handleDotClick = (index) => {
    setDirection(index > currentIndex ? "right" : "left");
    setCurrentIndex(index);
  };

  return (
    <div className="relative flex flex-col items-center w-[50rem] h-[60vh] m-auto ">
      <AnimatePresence>
        <motion.img
          key={currentIndex}
          src={images[currentIndex]}
          variants={slideVariants}
          initial={direction === "right" ? "hiddenRight" : "hiddenLeft"}
          animate="visible"
          exit="exit"
          className="absolute w-[50%] h-[50vh] object-contain object-top rounded-3xl"
        />
      </AnimatePresence>

      <div className="slide_direction absolute top-1/2 left-0 right-0 flex justify-between px-4 -translate-y-1/2">
        <motion.div
          variants={slidersVariants}
          whileHover="hover"
          className="cursor-pointer bg-gray-800 text-white p-2 rounded-full hover:bg-gray-700 transition-colors"
          onClick={handlePrevious}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="20"
            viewBox="0 96 960 960"
            width="20"
          >
            <path d="M400 976 0 576l400-400 56 57-343 343 343 343-56 57Z" />
          </svg>
        </motion.div>
        <motion.div
          variants={slidersVariants}
          whileHover="hover"
          className="cursor-pointer bg-gray-800 text-white p-2 rounded-full hover:bg-gray-700 transition-colors"
          onClick={handleNext}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="20"
            viewBox="0 96 960 960"
            width="20"
          >
            <path d="m304 974-56-57 343-343-343-343 56-57 400 400-400 400Z" />
          </svg>
        </motion.div>
      </div>

      <div className="absolute bottom-0 flex space-x-2">
        {images.map((_, index) => (
          <motion.div
            key={index}
            className={`h-2 w-2 rounded-full cursor-pointer ${
              currentIndex === index ? "bg-blue-500" : "bg-gray-300"
            }`}
            initial="initial"
            animate={currentIndex === index ? "animate" : ""}
            whileHover="hover"
            variants={dotsVariants}
            onClick={() => handleDotClick(index)}
          ></motion.div>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
