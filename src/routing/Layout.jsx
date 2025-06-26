import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Outlet } from "react-router-dom";
Outlet;

export default function Layout({ children }) {
  return (
    <>
      <Header />
      {/* {children} */}
      <Outlet />
      <Footer />
    </>
  );
}
