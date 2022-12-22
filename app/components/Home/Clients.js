import React from "react";
import { setBackgroundImage } from "../utils/helpers";
import ClientSlider from "../Cart/ClientSlider";

function Clients() {
  return (
    <section className="relative">
      <div className="flex flex-wrap lg:flex-nowrap">
        {/* left */}
        <div className="lg:w-[50%] w-full lg:py-[90px] lg:px-20 md:py-16 md:px-14 py-12 px-6 bg-colorSecondary font-RadHatText relative z-10">
          <div
            className="w-full h-full absolute top-0 left-0 mix-transition -z-10"
            style={setBackgroundImage("images/clien-bg-1.jpeg", {
              backgroundPosition: "25% 0",
              opacity: 0.1,
            })}
          ></div>
          <h3 className=" text-lg text-white font-normal font-RadHatText">
            What Client Says
          </h3>
          <h1 className="text-[40px] md:text-[44px] lg:text-[48px] text-white leading-[62px] py-4 font-light">
            Best Feedback From Clients
          </h1>
          <p className="text-textGray text-sm md:text-base font-light font-RadHatText lg:flex flex-col mb-6 md:mb-12">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud xercitation ullamco dolore.
          </p>
          {/* Clients Slider */}
          <ClientSlider />
        </div>
        {/* right */}
        <div className="lg:w-[50%] w-full rounded-br-[100px] md:rounded-br-[200px] lg:rounded-br-[300px] overflow-hidden -z-10 lg:z-0 relative">
          {/* background image */}
          <img
            src="images/client-bg-2.jpeg"
            alt=""
            className="h-[600px] md:w-full md:h-full object-cover"
          />
        </div>
      </div>
    </section>
  );
}

export default Clients;
