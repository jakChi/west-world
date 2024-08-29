import React from "react";
import { motion } from "framer-motion";

const HoverButton = () => {
  return (
    <motion.button
      className="text-white margin-auto my-20 "
      whileHover="hover"
      initial="rest"
      animate="rest"
      variants={{
        rest: {
          borderImageSource: "linear-gradient(0deg, transparent 100%, #FFF 100%)",
          borderImageSlice: 1,
        },
        hover: {
          borderImageSource: [
            "linear-gradient(0deg, transparent 50%, #FFF 50%)",
            "linear-gradient(90deg, transparent 50%, #FFF 50%)",
            "linear-gradient(180deg, transparent 50%, #FFF 50%)",
            "linear-gradient(270deg, transparent 50%, #FFF 50%)",
            "linear-gradient(360deg, transparent 0%, #FFF 0%)",
          ],
          transition: {
            duration: 0.4, // Duration of the animation
            ease: "easeInOut",
          },
        },
      }}
      style={{
        border: "2px solid white", // Ensuring the border is visible
        borderImageSlice: 1,
        padding: "10px 20px",
        backgroundColor: "transparent",
        
        cursor: "pointer",
      }}
    >
      Hover Me
    </motion.button>
  );
};

export default HoverButton;
