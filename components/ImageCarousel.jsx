import React, { useState } from "react";
import { motion } from "framer-motion";

import ImageCircle from "./ImageCircle";

const ImageCarousel = ({ images }) => {
  const [currentPage, setCurrentPage] = useState(0);
  const imagesPerPage = 5;

  const totalPages = Math.ceil(images.length / imagesPerPage);

  const nextPage = () => {
    setCurrentPage((prevPage) =>
      prevPage < totalPages - 1 ? prevPage + 1 : prevPage
    );
  };

  const prevPage = () => {
    setCurrentPage((prevPage) => (prevPage > 0 ? prevPage - 1 : prevPage));
  };

  const getVisibleImages = () => {
    const start = currentPage * imagesPerPage;
    const end = start + imagesPerPage;
    return images.slice(start, end);
  };

  return (
    <div className="w-full flex">
      <button onClick={prevPage} disabled={currentPage === 0}>
        Previous
      </button>
      <motion.div
        className="flex m-auto justify-around overflow-hidden"
        animate={{ x: `-${currentPage * 100}%` }}
        transition={{ duration: 1 }}
      >
        {getVisibleImages().map((image, index) => (
          <div key={index}>
            <ImageCircle img={image} />
          </div>
        ))}
      </motion.div>
      <button onClick={nextPage} disabled={currentPage === totalPages - 1}>
        Next
      </button>
    </div>
  );
};

export default ImageCarousel;
