import React from "react";
import Image from "next/image";

export default function HostProfile({ ...props }) {
  // if (!Array.isArray(props.history) || props.history.length === 0) {
  //   console.error("Data is not loaded or not an array.");
  //   console.log(props.history)
  //   return;
  // }

  const currentVersion = props.history[props.history.length - 1];

  return (
    <div className="flex w-1/3 p-5 bg-amber-600 rounded-3xl">
      <Image
        src={currentVersion.imgUrl}
        alt={currentVersion.name}
        width={300}
        height={300}
        className="rounded-3xl w-1/2"
      />
      <div className="flex flex-col w-1/2 mx-5">
        <h2 className="">
          name: {currentVersion.name} {currentVersion.lastName}
        </h2>
        <h2>gedner: {currentVersion.gender}</h2>
        <h2>age: {currentVersion.age}</h2>
        <ol>
          Is connected with:
          {props.history
            .reduce(
              (relatives, currentHist) =>
                relatives.concat(currentHist.relevantHosts),
              ["braile"]
            )
            .map((host, i) => (
              <li key={i}>{host}</li>
            ))}
        </ol>
      </div>
    </div>
  );
}
