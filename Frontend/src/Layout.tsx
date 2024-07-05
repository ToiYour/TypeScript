import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./components/Headers";
import Footer from "./components/Footers";
import Modal from "./components/Modal";
import { ToastContainer } from "react-toastify";

const Layout = () => {
  return (
    <>
      <ToastContainer />
      <Header />
      <Outlet />
      <Modal />
      <Footer />
    </>
  );
};

export default Layout;
