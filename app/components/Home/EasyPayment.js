import React from "react";
import { setBackgroundImage } from "../utils/helpers";
import { IoIosNotificationsOutline } from "react-icons/io";
import { GiCircularSawblade } from "react-icons/gi";
import { GiProgression } from "react-icons/gi";
import CircleProgress from "../Cart/CircleProgress";
import ButtonC from "../shared/ButtonC";
import PaymentCard from "../Cart/PaymentCard";

function EasyPayment() {
  return (
    <section className="relative">
      <div className="flex flex-wrap lg:flex-nowrap">
        {/* left */}
        <div className="lg:w-[50%] w-full rounded-tl-[100px] md:rounded-tl-[200px] lg:rounded-tl-[300px] overflow-hidden -z-10 lg:z-0">
          {/* background image */}
          <div
            className="lg:w-[50%] w-full lg:h-full md:h-[48%] h-[41%] absolute top-0 left-0 rounded-tl-[100px] md:rounded-tl-[200px] lg:rounded-tl-[300px] sm:!bg-cover"
            style={setBackgroundImage("images/platfrom-bg.jpeg", {
              backgroundPosition: "30% 0px",
            })}
          ></div>
          {/* info */}
          <div className="relative">
            <div className="lg:pt-[19rem] pt-[10rem] pb-16 pr-4 sm:pr-24 lg:pr-12 pl-10">
              {/* Card 1 */}
              <div className="flex justify-end mt-16">
                <PaymentCard
                  text="Anomaly Detection"
                  name={IoIosNotificationsOutline}
                />
              </div>
              {/* Card 2 */}
              <div className="flex justify-start">
                <PaymentCard
                  text="Platform Payments"
                  name={GiCircularSawblade}
                />
              </div>
              {/* Card 3 */}
              <div className="md:flex justify-center pt-16 lg:pt-36 hidden md:block">
                <PaymentCard text="Recurring Payments" name={GiProgression} />
              </div>
            </div>
          </div>
        </div>
        {/* Right */}
        <div className="lg:w-[50%] lg:p-20 md:p-12 py-12 px-6 hero-gradient font-RadHatText relative overflow-hidden z-0">
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
      </div>
    </section>
  );
}

export default EasyPayment;
