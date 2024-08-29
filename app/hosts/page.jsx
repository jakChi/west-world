"use client";

import React, { useState } from "react";
import Image from "next/image";
import { hosts } from "@/data/hosts";

import SearchIcon from "@/public/SearchIcon"

const flattenedHosts = hosts.reduce((histories, host) => {
  return histories.concat(host.history);
}, []);

export default function HostProfile() {
  const [selectedHost, setSelectedHost] = useState(flattenedHosts[0]);

  return (
    <div className="flex h-screen">
      <div className="w-1/3 overflow-scroll p-4 m-5 border-2 border-transparent border-r-indigo-500">
        <div className="w-full flex justify-between items-center">
          <h2 className="text-3xl font-bold">Host Profiles</h2>
          
          {/* TODO: create search component */}
          <div className="text-white">
            <SearchIcon />
          </div>
        </div>
        <ul className="mt-10">
          {flattenedHosts.map((host) => (
            <li
              key={host.vesionId}
              className={`flex items-center p-2 mb-2 cursor-pointer rounded-lg hover:bg-blue-300 border ${
                selectedHost.versionId === host.versionId
                  ? "border-blue-500"
                  : "border-transparent"
              }`}
              onClick={() => setSelectedHost(host)}
            >
              <Image
                width={100}
                height={100}
                src={host.imgUrl}
                alt={host.name}
                className="w-12 h-12 rounded-full mr-3 object-cover"
              />
              <span className="font-medium text-indigo-300">{`${host.versionId}: ${host.firstName} ${host.lastName} `}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="w-2/3 p-6">
        <div className="w-[20rem] mx-10 float-left">
          <Image
            width={300}
            height={300}
            src={selectedHost.imgUrl}
            alt={selectedHost.firstName}
            className="w-full h-full object-cover"
          />
        </div>
        <p className="text-gray-500">
          <span className="font-semibold text-gray-200">Id:</span>{" "}
          {selectedHost.versionId}
        </p>
        <p className="text-gray-500">
          <span className="font-semibold text-gray-200">Frist Name:</span>{" "}
          {selectedHost.firstName}
        </p>
        <p className="text-gray-700">
          <span className="font-semibold text-gray-200">Last Name:</span>{" "}
          {selectedHost.lastName}
        </p>
        <p className="text-gray-700">
          <span className="font-semibold text-gray-200">Gender:</span>{" "}
          {selectedHost.gender}
        </p>
        <p className="text-gray-700">
          <span className="font-semibold text-gray-200">Ethnicity:</span>{" "}
          {selectedHost.ethnicity}
        </p>
        <p className="text-gray-700">
          <span className="font-semibold text-gray-200">Launch Date:</span>{" "}
          {selectedHost.launchDate.toString()}
        </p>
        <p className="text-gray-700">
          <span className="font-semibold text-gray-200">Resign Date:</span>{" "}
          {selectedHost.resignDate.toString()}
        </p>

        <p className="text-gray-700">
          <span className="font-semibold text-gray-200">age:</span>{" "}
          {selectedHost.age}
        </p>
        <p className="text-gray-700">
          <span className="font-semibold text-gray-200">Bio:</span>{" "}
          {selectedHost.description}
        </p>
        <p className="text-gray-700">
          <span className="font-semibold text-gray-200">Park:</span>{" "}
          {selectedHost.park}
        </p>
        <ul className="text-gray-700">
          <span className="font-semibold text-gray-200">Relevant Hosts:</span>
          {selectedHost.relevantHosts.map((host, i) => (
            <li key={i}>{host}</li>
          ))}
        </ul>
        <p className="text-gray-700">
          <span className="font-semibold text-gray-200">Narrative Role:</span>{" "}
          {selectedHost.narrativeRole}
        </p>
        <p className="text-gray-700">
          <span className="font-semibold text-gray-200">Change Reason:</span>{" "}
          {selectedHost.changeReason}
        </p>
      </div>
    </div>
  );
}
