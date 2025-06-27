import React from "react";
import Wrapper from "../../components/ui/Wrapper";
import Login from "./Login";

export default function AccountPage() {
  return (
    <Wrapper className={"min-h-screen"}>
      <div className="mt-5">
        <h1 className="text-center font-bold mb-5">Sign in to your Account</h1>
        <Login />
      </div>
    </Wrapper>
  );
}
