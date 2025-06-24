import React from "react";

export default function Button({
  text,
  bgColor = "bg-shook-orange",
  textColor = "text-white",
  className = "",
}) {
  return (
    <button
      className={`rounded-md ${bgColor} ${className} cursor-pointer font-bold text-base text-center py-1.5 px-5 ${textColor} `}
    >
      {text}
    </button>
  );
}
