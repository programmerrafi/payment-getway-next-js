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
              <span
                className={`font-medium relative inline-block text-transition duration-300 ease-out align-bottom overflow-hidden ${
                  !showText ? "w-[110px]" : "w-[120px]"
                }`}
              >
                <span
                  className={`dynamic-text ${
                    showText
                      ? "relative rotate-x-0 animate-showText"
                      : "inline-block rotate-x-180 visible absolute animate-hideText"
                  }`}
                >
                  Easy{" "}
                </span>
                <span
                  className={`dynamic-text ${
                    showText
                      ? "inline-block rotate-x-180 visible absolute animate-hideText"
                      : "relative rotate-x-0 animate-showText"
                  }`}
                >
                  Fast{" "}
                </span>
              </span>
              <span className={``}> Payment Gateway Solution</span>
            </h1>
          </div>
          <div className="lg:w-[45%]">Hero Project Image</div>
        </div>
      </div>
    </section>
  );
}

export default HeroHome;
