import Image from "next/image";
import React from "react";
import { TitleText } from "./CustomTexts";

export default function AboutFig({ title, caption, imgUrl }) {
  return (
    <div className="flex justify-start">
      <TitleText
        title={title}
        textStyles={"inline w-1/2 h-20 border text-5xl"}
      />
      <figure className="w-1/2">
        <div className="w-[95%] h-[20rem] overflow-hidden rounded-3xl">
          <Image
            src={imgUrl}
            width={500}
            height={500}
            alt={title}
            className="w-full h-full object-cover"
          />
        </div>
        <figcaption>{caption}</figcaption>
      </figure>
    </div>
  );
}
