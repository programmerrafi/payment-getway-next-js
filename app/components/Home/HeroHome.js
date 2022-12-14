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
    <section className="relative rounded-br-[100px] md:rounded-br-[200px] lg:rounded-br-[300px] mix-transition overflow-hidden mb-0 -mt-[95px] pt-[175px] md:pt-[210px] lg:pt-[242px] pb-[100px] hero-gradient z-0">
      <div
        className="w-full h-full absolute top-0 left-0 mix-transition"
        style={setBackgroundImage("images/hero-bg-img.jpeg", {
          backgroundPosition: "center left",
          opacity: 0.1,
        })}
      ></div>
      <div className="relative container">
        <div className="flex flex-wrap gap-10 lg:flex-nowrap">
          {/* Left */}
          <div className="lg:w-[54%] md:w-[80%] w-full md:mx-auto lg:mx-0">
            <h1 className="text-[44px] md:text-[54px] text-center lg:text-left text-white font-RadHatText font-thin leading-[60px] sm:leading-[72px] transition-all tracking-[1px]">
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
            <p className="mb-8 mt-[20px] text-center lg:text-left text-smallText text-base md:text-lg font-[300] font-RadHatText">
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
              masa commodo ligula eget dolor aenean massa. Cum sociis natoque
              penatibus et magnis dis parturient montes.
            </p>
            {/* Button */}
            <div className="flex items-center md:justify-center lg:justify-start gap-10">
              <ButtonC
                title="Get Started Now"
                className="sm:text-lg text-base text-colorSecondary font-[500]"
              />
              <div className="flex items-center gap-2 text-white cursor-pointer font-RadHatText text-base sm:text-lg">
                <p>Learn more</p>
                <IoIosArrowForward size={24} />
              </div>
            </div>
            <p className="my-8 text-smallText md:text-center lg:text-left text-sm sm:text-base font-[300] font-RadHatText">
              **Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
          </div>
          {/* Right Image*/}
          <div className="lg:w-[50%] w-full">
            <div className="md:-mt-16 flex mx-auto lg:justify-end w-[90%] h-[90%] md:w-[600px] md:h-[600px] lg:w-[520px] lg:h-[520px]">
              <Image
                src="/images/hero-project-images.png"
                width="600"
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
