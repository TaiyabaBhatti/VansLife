import React from "react";
import { Link, useSearchParams } from "react-router-dom";

export default function TabFilter({ type, value, text }) {
  const [searchParams, setSearchParams] = useSearchParams();

  const genNewQueryParamString = (key, value) => {
    setSearchParams((prevParam) => {
      if (value === null) {
        prevParam.delete(key);
      } else {
        prevParam.set(key, value);
      }
      return prevParam;
    });
  };

  return (
    <button
      onClick={() => genNewQueryParamString(type, value)}
      className="bg-dull-orange text-gray-600 rounded-md  cursor-pointer font-bold text-base text-center py-1.5 px-3 "
    >
      {text}
    </button>
  );
}
