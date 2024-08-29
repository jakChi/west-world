import React from 'react'
import Image from 'next/image'

export default function ImageCircle({ img, name, size}) {
  return (
    <div className={`w-40 h-40 shrink-0 mx-5 overflow-hidden rounded-full border-4 border-sky-500`}>
      <Image
        src={img}
        width={500}
        height={500}
        alt={"name"}
        className="w-full h-full object-cover"
      />
    </div>
  );
}
