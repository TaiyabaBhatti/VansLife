import React from "react";
import Wrapper from "../../components/ui/Wrapper";
import { NavLink, Outlet } from "react-router-dom";
import PageTabs from "../../components/ui/PageTabs";

export default function HostPage() {
  return (
    <Wrapper className={"min-h-screen"}>
      <nav className="flex flex-row items-center gap-x-2.5 font-semibold text-base text-medium-gray mb-10">
        <PageTabs text="Dashboard" path={`.`} attribute={true} />
        <PageTabs text="Income" path={`income`} />
        <PageTabs text="Reviews" path={`reviews`} />
      </nav>
      <Outlet />
    </Wrapper>
  );
}
