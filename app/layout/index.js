import React from "react";
import Footer from "./Footer";
import Navbar from "./Navbar/Navbar";
import PopUp from "../components/shared/PopUp/PopUp";

const Layout = ({ children }) => {
  return (
    <div className="w-full h-full relative">
      <PopUp />
      <Navbar />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
