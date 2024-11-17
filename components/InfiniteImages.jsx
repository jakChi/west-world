import React from "react";
import { motion } from "framer-motion";
import ImageCircle from "./ImageCircle";

export default function InfiniteImages ({ images }) {
  const containerWidth = images.length * 200; // Assume each image + margin takes 200px width

  return (
    <div
      className="w-full overflow-hidden my-20"
    >
      <motion.div
        style={{ display: "flex", width: `${containerWidth * 2}px` }}
        animate={{ x: [-containerWidth, 0] }}
        transition={{
          x: {
            repeat: Infinity,
            repeatType: "loop",
            ease: "linear",
            duration: images.length * 4, // Adjust speed based on the number of images
          },
        }}
      >
        {images.map((image, index) => (
          <div
            key={index}
            style={{
              width: "200px",
              padding: "0 10px",
              boxSizing: "border-box",
            }}
          >
            <ImageCircle img={image} />
          </div>
        ))}
        {/* Duplicate the images to create a seamless loop */}
        {images.map((image, index) => (
          <div
            key={index + images.length}
            style={{
              width: "200px",
              padding: "0 10px",
              boxSizing: "border-box",
            }}
          >
            <ImageCircle img={image} />
          </div>
        ))}
      </motion.div>
    </div>
  );
};

