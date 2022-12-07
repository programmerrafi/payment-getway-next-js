import React, { useEffect, useState } from "react";
import { setBackgroundImage } from "../utils/helpers";
import ButtonC from "../shared/ButtonC";
import { IoIosArrowForward } from "react-icons/io";
import Image from "next/image";

function HeroHome() {
  const [showText, setShowText] = useState(false);

  useEffect(() => {
    const intervalId = setInterval(() => setShowText(!showText), [2200]);
    return () => clearInterval(intervalId);
  }, [showText]);

  return (
    <section className="relative rounded-br-[300px] mix-transition overflow-hidden mb-0 -mt-[95px] pt-[240px] pb-[120px] hero-gradient z-0">
      <div
        className="w-full h-full absolute top-0 left-0 mix-transition"
        style={setBackgroundImage("images/hero-bg-img.jpeg", {
          backgroundPosition: "center left",
          opacity: 0.1,
        })}
      ></div>
      <div className="relative container">
        <div className="flex flex-warp gap-8 lg:flex-nowrap">
          {/* Left */}
          <div className="lg:w-[50%]">
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
            <p className="mb-8 mt-[24px] text-smallText text-lg font-[300] font-RadHatText">
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
              masa commodo ligula eget dolor aenean massa. Cum sociis natoque
              penatibus et magnis dis parturient montes.
            </p>
            <div className="flex items-center gap-10">
              <ButtonC
                title="Get Started Now"
                className="text-lg text-colorSecondary font-[500]"
              />
              <div className="flex items-center gap-2 text-white cursor-pointer font-RadHatText text-lg">
                <p>Learn more</p>
                <IoIosArrowForward size={24} />
              </div>
            </div>
            <p className="my-8 text-smallText text-base font-[300] font-RadHatText">
              **Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
          </div>
          {/* Right */}
          <div className="lg:w-[50%]">
            <div className="-mt-8 flex justify-end">
              <Image
                src="/images/hero-project-images.png"
                width="520"
                height="520"
                alt="hero-project-images"
                className="object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroHome;
