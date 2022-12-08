import React from "react";
import { IoLogoUsd } from "react-icons/io";
import { FaCcVisa } from "react-icons/fa";
import { FaCcMastercard } from "react-icons/fa";
import { FaCcAmazonPay } from "react-icons/fa";
import { FaCcPaypal } from "react-icons/fa";
import { ImMobile2 } from "react-icons/im";
import { MdSecurity } from "react-icons/md";
import { BsFillCreditCard2FrontFill } from "react-icons/bs";
import { RiCellphoneFill } from "react-icons/ri";
import { AiFillApple } from "react-icons/ai";
import { MdAndroid } from "react-icons/md";
import Icons from "../shared/Icons";
import PaymentInfo from "../Cart/PaymentInfo";

function PaymentGateway() {
  return (
    <section className="relative pt-[50px] md:pt-[80px] lg:pt-[100px]">
      <div className="container">
        {/* Text information */}
        <div className="font-RadHatText">
          <h3 className="text-center text-lg text-colorSecondary font-medium">
            What We Offer
          </h3>
          <h1 className="text-center text-[40px] md:text-[44px] lg:text-[48px] text-colorPrimary py-4 font-light lg:font-normal">
            Smart Payment Gateway Solution
          </h1>
          <p className="text-textGray text-sm md:text-base font-light font-RadHatText text-center lg:flex flex-col mb-5">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor{" "}
            <span>
              incididunt ut labore et dolore magna aliqua condimentum.
            </span>
          </p>
        </div>
        {/* Payment Gateway Card */}
        <div className="font-RadHatText flex justify-center lg:justify-between flex-wrap lg:flex-nowrap gap-6 lg:gap-0 pt-4">
          {/* Card  1*/}
          <div className="bg-[#f1f3f7] px-6 pt-8 pb-6 rounded-xl w-full md:w-[48%] lg:w-[350px] shadow">
            {/* Card info */}
            <PaymentInfo
              iconName={IoLogoUsd}
              h1Text="Online Payment"
              pText="Lorem ipsum dolor sit amet."
            />
            {/* payment Logos */}
            <div className="flex justify-center items-center gap-8 pt-6">
              <Icons name={FaCcVisa} className="hover:text-colorSecondary" />
              <Icons
                name={FaCcMastercard}
                className="hover:text-colorSecondary"
              />
              <Icons
                name={FaCcAmazonPay}
                className="hover:text-colorSecondary"
              />
              <Icons name={FaCcPaypal} className="hover:text-colorSecondary" />
            </div>
          </div>
          {/* Card 2 */}
          <div className="bg-colorPrimary px-6 pt-8 pb-6 rounded-xl w-full md:w-[48%] lg:w-[350px] shadow">
            <PaymentInfo
              iconName={ImMobile2}
              iClass="text-colorPrimary"
              iDivClass="bg-white"
              textClass="!text-white"
              h1Text="Platform Support"
              pText="Lorem ipsum dolor sit amet."
            />
            {/* payment Logos */}
            <div className="flex justify-center gap-12 items-center pt-6">
              <Icons
                name={AiFillApple}
                text="iOs"
                size="25"
                className="!text-white"
                textClass="!text-white"
              />
              <Icons
                name={MdAndroid}
                text="Android"
                size="25"
                className="!text-white"
                textClass="!text-white"
              />
            </div>
          </div>
          {/* Card 3 */}
          <div className="bg-[#f1f3f7] px-6 pt-8 pb-6 rounded-xl w-full md:w-[48%] lg:w-[350px] shadow">
            <PaymentInfo
              iconName={MdSecurity}
              size={30}
              h1Text="Secure Transaction"
              pText="Lorem ipsum dolor sit amet."
            />
            {/* payment Logos */}
            <div className="flex md:justify-between justify-center gap-16 md:gap-0 items-center pt-6">
              <Icons
                name={BsFillCreditCard2FrontFill}
                text="Ready Refund"
                size="25"
                className="!text-colorSecondary"
              />
              <Icons
                name={RiCellphoneFill}
                text="24/7 Support"
                size="25"
                className="!text-colorSecondary"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default PaymentGateway;
