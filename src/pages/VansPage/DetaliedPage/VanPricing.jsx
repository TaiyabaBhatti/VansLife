import React from "react";
import { useOutletContext } from "react-router-dom";

export default function VanPricing() {
  const van = useOutletContext();
  return (
    <div>
      <h5 className="text-dark-salete">
        <span className="text-2xl">${van.vanData.price}</span>/day
      </h5>
    </div>
  );
}
