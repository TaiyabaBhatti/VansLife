import React from "react";
import { Link, NavLink } from "react-router-dom";

export default function PageTabs({ path, text, attribute = false }) {
  return (
    <NavLink
      to={path}
      end={attribute}
      className={({ isActive }) => {
        return `text-medium-gray font-semibold ${
          isActive ? "underline !text-dark-salete" : ""
        }`;
      }}
    >
      {text}
    </NavLink>
  );
}
