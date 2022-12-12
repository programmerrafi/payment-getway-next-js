import React from "react";
import Icons from "../shared/Icons";
import { setBackgroundImage } from "../utils/helpers";
import { IoIosNotificationsOutline } from "react-icons/io";
import { GiCircularSawblade } from "react-icons/gi";
import { GiProgression } from "react-icons/gi";
import CircleProgress from "../Cart/CircleProgress";

function EasyPayment() {
  return (
    <section className="relative">
      <div className="flex flex-wrap lg:flex-nowrap">
        {/* left */}
        <div className="lg:w-[50%] w-full rounded-tl-[300px] overflow-hidden">
          {/* background image */}
          <div
            className="lg:w-[50%] w-full h-full absolute top-0 left-0 rounded-tl-[300px]"
            style={setBackgroundImage("images/platfrom-bg.jpeg", {
              backgroundPosition: "30% 0px",
            })}
          ></div>
          {/* info */}
          <div className="relative">
            <div className="pt-[19rem] pb-16 pr-12 pl-10">
              {/* Card 1 */}
              <div className="flex justify-end">
                <div className="bg-white rounded-lg py-6 px-5 w-[220px]">
                  <Icons
                    name={IoIosNotificationsOutline}
                    text="Anomaly Detection"
                    size="35"
                    iDiv="!gap-4"
                    textClass="!text-[22px] leading-[30px] !text-colorSecondary !font-medium"
                    className="!text-white"
                    iClassName="bg-colorSecondary p-3 rounded-md"
                  />
                </div>
              </div>
              {/* Card 2 */}
              <div className="flex justify-start">
                <div className="bg-white rounded-lg py-6 px-5 w-[220px]">
                  <Icons
                    name={GiCircularSawblade}
                    text="Platform Payments"
                    size="35"
                    iDiv="!gap-4"
                    textClass="!text-[22px] leading-[30px] !text-colorSecondary !font-medium"
                    className="!text-white"
                    iClassName="bg-colorSecondary p-3 rounded-md"
                  />
                </div>
              </div>
              {/* Card 3 */}
              <div className="flex justify-center pt-36">
                <div className="bg-white rounded-lg py-6 px-5 w-[220px]">
                  <Icons
                    name={GiProgression}
                    text="Recurring Payments"
                    size="35"
                    iDiv="!gap-4"
                    textClass="!text-[22px] leading-[30px] !text-colorSecondary !font-medium"
                    className="!text-white"
                    iClassName="bg-colorSecondary p-3 rounded-md"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Right */}
        <div className="lg:w-[50%] p-20 bg-colorSecondary font-RadHatText relative z-50">
          <h3 className=" text-lg text-white font-normal font-RadHatText">
            Our Experience
          </h3>
          <h1 className="text-[40px] md:text-[44px] lg:text-[48px] text-white leading-[62px] py-4 font-light">
            Our Roadmap To Reach Your Easy Payment Solution
          </h1>
          <p className="text-textGray text-sm md:text-base font-light font-RadHatText lg:flex flex-col mb-5">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud xercitation ullamco dolore.
          </p>
          {/* Counter circle */}
          <div className="flex gap-20">
            <div className="font-RadHatText w-[40%]">
              {/* Countdown Timer */}
              <CircleProgress />
              <h1 className="font-normal text-white text-xl pb-2">
                Success Payment
              </h1>
              <p className="text-textGray text-sm md:text-base font-light font-RadHatText lg:flex flex-col mb-5">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
            </div>
            <div className="font-RadHatText"></div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default EasyPayment;
