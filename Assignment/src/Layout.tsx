import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./components/Headers";
import Footer from "./components/Footers";

const Layout = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};

export default Layout;
