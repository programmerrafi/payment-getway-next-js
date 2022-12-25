import React from "react";
import { setBackgroundImage } from "../components/utils/helpers";
import Image from "next/image";
import Link from "next/link";
import { AiOutlineTwitter } from "react-icons/ai";
import { ImFacebook } from "react-icons/im";
import { BsInstagram } from "react-icons/bs";
import { FaLinkedinIn } from "react-icons/fa";
import Icons from "../components/shared/Icons";
import Text from "../components/shared/Text";
import Title from "../components/shared/Title";
import ButtonC from "../components/shared/ButtonC";

function Footer() {
  return (
    <footer className="relative mix-transition footer-gradient pt-[180px] md:pt-[220px] z-0 -mt-[135px]">
      {/* BackGround */}
      <div
        className="w-full h-full absolute top-0 left-0 mix-transition"
        style={setBackgroundImage("images/footer-bg.png", {
          backgroundPosition: "center left",
          opacity: 0.04,
        })}
      ></div>
      <div className="absolute left-0 -top-[1px] w-full rotate-180 overflow-hidden md:h-[90px] lg:h-[100px] h-auto">
        <img src="images/curve.svg" alt="svg" className="w-full" />
      </div>
      {/* =========== Footer Info started ============= */}
      <div className="container relative font-RadHatText">
        <div className="flex flex-wrap lg:flex-nowrap md:justify-center lg:justify-between lg:items-start md:items-center border-b border-gray-300 pb-10 md:pb-20 gap-12 lg:gap-20">
          {/* Left */}
          <div className="w-full lg:w-[25%] md:text-center lg:text-start">
            <Link href="/">
              <div className="w-[160px] md:w-[270px] md:h-auto lg:w-[160px] lg:h-[58px] block md:mx-auto lg:mx-0 overflow-hidden object-contain">
                <Image
                  src="/icons/footer-logo.png"
                  alt="footer logo"
                  width="300"
                  height="120"
                />
              </div>
            </Link>
            <p className="text-textGray text-sm md:text-base font-light font-RadHatText mt-3 md:mt-6 lg:mt-3">
              Lorem ipsum dolor sit amet, consectet adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore
            </p>
            {/* Icons */}
            <div className="flex items-center md:justify-center lg:justify-start gap-4 mt-4 md:mt-6">
              <Icons
                name={ImFacebook}
                iDiv="bg-colorSecondary rounded-full p-3 hover:scale-90 cursor-pointer transition-all"
                size="16"
                className="!text-white"
              />
              <Icons
                name={AiOutlineTwitter}
                iDiv="bg-colorSecondary rounded-full p-3 hover:scale-90 cursor-pointer transition-all"
                size="16"
                className="!text-white"
              />
              <Icons
                name={FaLinkedinIn}
                iDiv="bg-colorSecondary rounded-full p-3 hover:scale-90 cursor-pointer transition-all"
                size="16"
                className="!text-white"
              />
              <Icons
                name={BsInstagram}
                iDiv="bg-colorSecondary rounded-full p-3 hover:scale-90 cursor-pointer transition-all"
                size="16"
                className="!text-white"
              />
            </div>
          </div>
          {/* Right */}
          <div className="flex flex-wrap md:flex-nowrap lg:w-[73%] gap-8 md:gap-20">
            {/* bottom-details-other */}
            <div className="w-full md:w-[20%]">
              <Title title="Quick Links" />
              <Text text="Home" />
              <Text text="About Us" />
              <Text text="Services" />
              <Text text="Contact" />
              <Text text="Project" />
            </div>
            {/* Quick Links */}
            <div className="w-full md:w-[20%]">
              <Title title="Useful Links" />
              <Text text="Privacy Policy" />
              <Text text="Term Of Service" />
              <Text text="Disclaimer" />
              <Text text="Credits" />
              <Text text="FAQ" />
            </div>
            {/* Social media */}
            <div className="w-full md:w-[50%]">
              <Title title="Newsletter" />
              <p className="text-textGray text-sm md:text-base font-light font-RadHatText mt-3">
                Lorem ipsum dolor sit amet, consectet adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore
              </p>
              <div className="flex items-center md:justify-between flex-col md:flex-row gap-4 mt-4">
                <input
                  type="email"
                  className="border-none outline-none bg-white font-RadHatText text-gray-400 rounded-3xl px-6 py-[14px] shadow font-light w-full"
                  placeholder="Email Address"
                />
                <ButtonC
                  title="Subscribe"
                  className="!bg-colorSecondary !text-white hover:!translate-y-0 !w-full md:!w-auto"
                />
              </div>
            </div>
          </div>
        </div>
        {/* =========== Footer Info End ============= */}
        {/* author */}
        <div className="flex sm:justify-between justify-center items-center flex-col md:flex-row py-5 sm:py-5">
          <h1 className="text-gray-400 text-sm md:text-base font-[300] leading-7 ml-1 pb-2 sm:pb-0">
            Payment Gateway Services Template Kit by Md Rafi
          </h1>
          <h1 className="text-gray-400 text-sm md:text-base font-[300] leading-7 ml-1">
            Copyright © 2022. All rights reserved.
          </h1>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
