import React from "react";
import { setBackgroundImage } from "../utils/helpers";
import { IoMdCall } from "react-icons/io";
import { RiMessage2Fill } from "react-icons/ri";
import { MdLocationOn } from "react-icons/md";

function Contact() {
  // console.log("did nothing");
  return (
    <section className="relative z-[1]">
      <div className="container">
        <div className="relative z-0 hero-gradient mix-transition py-[42px] px-16 rounded-2xl md:rounded-full overflow-hidden">
          <div
            className="w-full h-full absolute top-0 left-0 mix-transition -z-10"
            style={setBackgroundImage("images/hero-bg-img.jpeg", {
              backgroundPosition: "left center",
              opacity: 0.27,
            })}
          ></div>
          {/* contact info */}
          <div className="flex md:justify-between md:flex-row gap-8 md:gap-0 flex-col items-center font-RadHatText">
            {/* card 1*/}
            <div className="flex w-full md:text-left text-center justify-center md:justify-start flex-col md:flex-row md:w-auto gap-3 lg:gap-6 items-center">
              <div className="rounded-full p-3 bg-white">
                <IoMdCall size={26} className="text-colorSecondary" />
              </div>
              <div className="">
                <h1 className="lg:text-xl text-lg text-white font-normal lg:mb-1">
                  Give Us A Call
                </h1>
                <h1 className="text-base text-gray-200 font-light">
                  (+62)81 122 4121
                </h1>
              </div>
            </div>
            {/* Card 2 */}
            <div className="flex w-full md:text-left text-center justify-center md:justify-start flex-col md:flex-row md:w-auto gap-3 lg:gap-6 items-center">
              <div className="rounded-full p-3 bg-white">
                <RiMessage2Fill size={26} className="text-colorSecondary" />
              </div>
              <div className="">
                <h1 className="lg:text-xl text-lg text-white font-normal lg:mb-1">
                  Email Address
                </h1>
                <h1 className="text-base text-gray-200 font-light">
                  support@domain.com
                </h1>
              </div>
            </div>
            {/* card 3 */}
            <div className="flex w-full md:text-left text-center justify-center md:justify-start flex-col md:flex-row md:w-auto gap-3 lg:gap-6 items-center">
              <div className="rounded-full p-3 bg-white">
                <MdLocationOn size={26} className="text-colorSecondary" />
              </div>
              <div className="">
                <h1 className="lg:text-xl text-lg text-white font-normal lg:mb-1">
                  Office Location
                </h1>
                <h1 className="text-base text-gray-200 font-light">
                  Jl. Sunset Road 46
                </h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
