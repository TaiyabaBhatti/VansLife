import React from "react";
import Wrapper from "../../components/ui/Wrapper";
import { NavLink } from "react-router-dom";

export default function HostPage() {
  return (
    <Wrapper className={"min-h-screen"}>
      <nav className="flex flex-row items-center gap-x-2.5 font-semibold text-base text-medium-gray">
        <NavLink
          to={"dashboard"}
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          Dashboard
        </NavLink>
        <NavLink
          to={"income"}
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          Income
        </NavLink>
        {/* <NavLink
          to={"vans"}
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          Vans
        </NavLink> */}
        <NavLink
          to={"reviews"}
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          Reviews
        </NavLink>
      </nav>
    </Wrapper>
  );
}
