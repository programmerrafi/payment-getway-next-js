import React from "react";
import { setBackgroundImage } from "../utils/helpers";
import { IoIosNotificationsOutline } from "react-icons/io";
import { GiCircularSawblade } from "react-icons/gi";
import { GiProgression } from "react-icons/gi";
import CircleProgress from "../Cart/CircleProgress";
import ButtonC from "../shared/ButtonC";
import PaymentCard from "../Cart/PaymentCard";

function Clients() {
  return (
    <section className="relative">
      <div className="flex flex-wrap lg:flex-nowrap">
        {/* left */}
        <div className="lg:w-[50%] lg:p-20 md:p-12 py-12 px-6 bg-colorSecondary font-RadHatText relative overflow-hidden z-10">
          <div
            className="w-full h-full absolute top-0 left-0 mix-transition -z-10"
            style={setBackgroundImage("images/clien-bg-1.jpeg", {
              backgroundPosition: "25% 0",
              opacity: 0.1,
            })}
          ></div>
          <h3 className=" text-lg text-white font-normal font-RadHatText">
            Our Experience
          </h3>
          <h1 className="text-[40px] md:text-[44px] lg:text-[48px] text-white leading-[62px] py-4 font-light">
            Our Roadmap To Reach Your Easy Payment Solution
          </h1>
          <p className="text-textGray text-sm md:text-base font-light font-RadHatText lg:flex flex-col mb-2 lg:mb-5">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud xercitation ullamco dolore.
          </p>
          {/* Counter circle */}
          <div className="flex gap-0 md:gap-10 lg:gap-20 mb-8 md:mb-14 flex-col md:flex-row">
            {/* Left Circle */}
            <div className="font-RadHatText lg:w-[40%]">
              {/* Countdown Timer */}
              <div className="w-[25%] md:w-[42%] mt-8 lg:w-[63%] mb-4">
                <CircleProgress bWith={2} pNumber={87} />
              </div>
              <h1 className="font-normal text-white text-[24px] pb-2">
                Success Payment
              </h1>
              <p className="text-textGray text-sm md:text-base font-light font-RadHatText lg:flex flex-col mb-5">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
            </div>
            {/* Right Circle */}
            <div className="font-RadHatText lg:w-[40%]">
              {/* Countdown Timer */}
              <div className="w-[25%] md:w-[42%] mt-4 lg:mt-8 lg:w-[63%] mb-4">
                <CircleProgress bWith={2} pNumber={95} />
              </div>
              <h1 className="font-normal text-white text-[24px] pb-2">
                Positive Reviews
              </h1>
              <p className="text-textGray text-sm md:text-base font-light font-RadHatText lg:flex flex-col mb-5">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
            </div>
          </div>
          {/* Button */}
          <ButtonC title="Get Free Trail" />
        </div>
        {/* right */}
        <div className="lg:w-[50%] w-full rounded-br-[100px] md:rounded-br-[200px] lg:rounded-br-[300px] overflow-hidden -z-10 lg:z-0 relative">
          {/* background image */}
          <img
            src="images/client-bg-2.jpeg"
            alt=""
            className="w-full h-full object-cover"
          />
          {/* <div
            className="w-full md:h-full h-[41%] rounded-br-[100px] md:rounded-br-[200px] lg:rounded-br-[300px] sm:!bg-cover"
            style={setBackgroundImage("images/client-bg-2.jpeg", {
              backgroundPosition: "30% 0px",
            })}
          ></div> */}
        </div>
      </div>
    </section>
  );
}

export default Clients;
