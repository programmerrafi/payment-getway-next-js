import React from "react";
import { setBackgroundImage } from "../utils/helpers";

function HeroHome() {
  return (
    <section className="relative rounded-br-[300px] mix-transition overflow-hidden mb-0 -mt-[95px] pt-[200px] pb-[120px] hero-gradient z-0">
      <div
        className="w-full h-full absolute top-0 left-0 mix-transition"
        style={setBackgroundImage("images/hero-bg-img.jpeg", {
          backgroundPosition: "center left",
          opacity: 0.1,
        })}
      ></div>
      <div className="relative container">
        <h1>Hello Hero sections</h1>
      </div>
    </section>
  );
}

export default HeroHome;
