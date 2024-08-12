import React from 'react'

export default function HostProfile({props}) {
  return (
    <div>
      <h2>gedner: {currentVersion.gender}</h2>
      <h2>age: {hostAge}</h2>
      <h3>
        Is connected to:
        <span className="text-nowrap font-mono">
          {currentVersion.relevantHosts.join(", ")}
        </span>
      </h3>
    </div>
  );
}
