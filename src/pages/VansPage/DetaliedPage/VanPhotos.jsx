import React from "react";
import { useOutletContext } from "react-router-dom";

export default function VanPhotos() {
  const van = useOutletContext();

  return (
    <div>
      <img
        src={van.vanData.imageUrl}
        alt=""
        className="rounded-md object-cover h-32"
      />
    </div>
  );
}
