import React, { useEffect } from "react";
import Wrapper from "../../components/ui/Wrapper";
import {
  NavLink,
  Outlet,
  redirect,
  useLoaderData,
  useNavigate,
} from "react-router-dom";
import PageTabs from "../../components/ui/PageTabs";

export function loaderLoad() {
  const random = Math.floor(Math.random() * 5) + 2;
  const authState = random % 2 === 0 ? true : false;
  console.log(authState);
  return authState;
}

export default function HostPage() {
  const state = useLoaderData();
  const navigate = useNavigate();
  console.log(state);

  useEffect(() => {
    if (state) {
      console.log("Navigating you to login page");
      setTimeout(() => {
        navigate("/account");
      }, 2000);
    }
  });

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
