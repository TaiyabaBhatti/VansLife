import React from "react";
import { Link, NavLink } from "react-router-dom";

export default function Header() {
  return (
    <header className="h-24 flex flex-row justify-between py-9 px-6">
      <div>
        <Link to={"home"} className="font-black text-2xl">
          #VANLIFE
        </Link>
      </div>
      <nav
        id="nav-tabs"
        className="flex flex-row items-center gap-x-2.5 font-semibold text-base text-medium-gray"
      >
        <NavLink
          to={"about"}
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          About
        </NavLink>
        <NavLink
          to={"vans"}
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          Vans
        </NavLink>
      </nav>
    </header>
  );
}
