import React, { useEffect, useState } from "react";
import { setBackgroundImage } from "../utils/helpers";

function HeroHome() {
  const [showText, setShowText] = useState(false);

  useEffect(() => {
    const intervalId = setInterval(() => setShowText(!showText), [2200]);
    return () => clearInterval(intervalId);
  }, [showText]);

  return (
    <section className="relative rounded-br-[300px] mix-transition overflow-hidden mb-0 -mt-[95px] pt-[230px] pb-[120px] hero-gradient z-0">
      <div
        className="w-full h-full absolute top-0 left-0 mix-transition"
        style={setBackgroundImage("images/hero-bg-img.jpeg", {
          backgroundPosition: "center left",
          opacity: 0.1,
        })}
      ></div>
      <div className="relative container">
        <div className="flex flex-warp lg:flex-nowrap">
          <div className="lg:w-[55%]">
            <h1 className="text-[55px] text-white font-RadHatText font-thin leading-[75px] transition-all">
              <span>Everpay </span>
              <span className="font-medium relative inline-block w-[120px] duration-300 ease-linear align-bottom">
                <span
                  className={`dynamic-text ${
                    showText ? "show-text" : "hide-text"
                  }`}
                >
                  Easy{" "}
                </span>
                <span
                  className={`dynamic-text ${
                    showText ? "hide-text" : "show-text"
                  }`}
                >
                  Fast{" "}
                </span>
              </span>
              <span
                className={`relative z-100 ${
                  !showText && "-ml-2 transition-all"
                }`}
              >
                {" "}
                Payment Gateway Solution
              </span>
            </h1>
          </div>
          <div className="lg:w-[45%]">Hero Project Image</div>
        </div>
      </div>
    </section>
  );
}

export default HeroHome;
