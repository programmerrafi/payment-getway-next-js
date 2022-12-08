import React from "react";
import CountUp from "react-countup";

function MerchantJoin() {
  return (
    <section className="relative pt-[50px] md:pt-[80px] lg:pt-[100px]">
      <div className="container">
        {/* Merchant join counter */}
        <section className="flex items-center flex-wrap md:flex-nowrap gap-8 md:gap-14 lg:gap-20">
          {/* counter */}
          <div className="w-full md:w-[25%]">
            <h1 className="text-colorPrimary text-[45px] md:text-[50px] font-light font-RadHatText flex items-start gap-2 justify-center">
              <CountUp separator="," end={1859} />{" "}
              <span className="text-lg mt-2 md:mt-4 font-normal">K</span>
            </h1>
            <p className="text-textGray text-sm md:text-base font-light font-RadHatText text-center -mt-1">
              Merchant Join
            </p>
          </div>
          {/* Merchant Info */}
          <h1 className="font-RadHatText italic text-base sm:text-lg md:text-xl font-normal sm:font-light text-textGray w-full text-center lg:text-left md:w-[75%]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
            tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo dolore
            magna aliqua erat libero condimentu. Incididunt ut labore et dolore
            magna aliqua. Ut enim ad minim veniam, quis nostrud xercitation.
          </h1>
        </section>
        {/* Merchant Company Logo */}
        <section className=""></section>
      </div>
    </section>
  );
}

export default MerchantJoin;
