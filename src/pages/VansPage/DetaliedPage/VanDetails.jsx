import React from "react";
import { useOutletContext } from "react-router-dom";

export default function VanDetails() {
  const van = useOutletContext();

  return (
    <div className="space-y-2 text-sm text-dark-salete">
      <h5 className=" ">
        <span className="font-bold ">Name: </span>
        {van.vanData.name}
      </h5>
      <h5 className="">
        <span className="font-bold ">Category: </span>
        {van.vanData.type}
      </h5>
      <p className="">
        <span className="font-bold ">Description: </span>
        {van.vanData.description}
      </p>
      <h5 className="">
        <span className="font-bold ">Visibility: </span>
      </h5>
    </div>
  );
}
