import React from "react";
import { setBackgroundImage } from "../components/utils/helpers";

function Footer() {
  console.log("hello footer!");
  return (
    <footer className="relative mix-transition footer-gradient pb-10 pt-[220px] z-0 -mt-[135px]">
      <div
        className="w-full h-full absolute top-0 left-0 mix-transition"
        style={setBackgroundImage("images/footer-bg.png", {
          backgroundPosition: "center left",
          opacity: 0.04,
        })}
      ></div>
      <div className="absolute left-0 -top-[1px] w-full rotate-180 overflow-hidden md:h-[90px] lg:h-[100px] h-auto">
        <img src="images/curve.svg" alt="svg" className="w-full" />
      </div>
      <div className="container relative">
        <h1>Hello footer</h1>
      </div>
    </footer>
  );
}

export default Footer;
