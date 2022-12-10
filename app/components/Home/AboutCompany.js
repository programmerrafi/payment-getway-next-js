import React from "react";
import { BsFillPlayFill } from "react-icons/bs";
import { IoMdCheckmark } from "react-icons/io";
import Icons from "../shared/Icons";
import ButtonC from "../shared/ButtonC";
import { useVarContext } from "../../Context/createConText";

function AboutCompany() {
  const global = useVarContext();

  return (
    <section className="relative py-[150px]">
      <div className="container">
        <div className="flex gap-16 flex-wrap lg:flex-nowrap">
          {/* left */}
          <div className="lg:w-[55%]">
            <div className="flex justify-between items-start h-[100px] relative z-10">
              {/* image */}
              <div className="p-4 bg-white">
                <img
                  src="images/girl-online-1.jpeg"
                  alt="girl"
                  className="w-[160px]"
                />
              </div>
              {/* video button */}
              <div className="flex items-center gap-4 mt-3">
                <div
                  className="w-[65px] h-[65px] flex items-center justify-center border border-colorSecondary rounded-full shadow-md cursor-pointer duration-300 ease-linear relative before:absolute before:top-0 before:left-0 before:w-full before:h-full before:rounded-full before:border-2 before:shadow-4xl before:opacity-60 before:-z-10 before:animate-before before:content-[' '] after:absolute after:top-0 after:left-0 after:w-full after:h-full after:rounded-full after:border-2 after:shadow-4xl after:opacity-60 after:-z-10 after:animate-before after:content-[' '] after:animation-delay-300"
                  onClick={global.handleOpenPopUp}
                >
                  <BsFillPlayFill
                    size={32}
                    className="text-colorPrimary ml-1"
                  />
                </div>
                <h2 className="text-colorSecondary text-base font-RadHatText font-medium">
                  Watch Video
                </h2>
              </div>
            </div>
            <div className="rounded-lg overflow-hidden">
              <img
                src="images/shopping-img.jpeg"
                alt="shopping"
                className="w-full h-full"
              />
            </div>
          </div>
          {/* Right */}
          <div className="lg:w-[45%]">
            <h3 className=" text-lg text-colorSecondary font-medium">
              About Company
            </h3>
            <h1 className="text-[40px] md:text-[44px] lg:text-[48px] text-colorPrimary py-4 font-light">
              Help Every Phase Of Your Business Growth
            </h1>
            <p className="text-textGray text-sm md:text-base font-light font-RadHatText lg:flex flex-col mb-5">
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
              masa commodo ligula eget dolor aenean massa. Cum sociis natoque
              penatibus et magnis dis parturient montes.
            </p>
            {/* Details option in our company */}
            <div className="flex gap-24 pt-4 pb-8">
              <div className="">
                <Icons
                  name={IoMdCheckmark}
                  text="Startups & Early"
                  size="20"
                  className="!text-colorPrimary"
                />
                <Icons
                  name={IoMdCheckmark}
                  text="Growing Businesses"
                  size="20"
                  className="!text-colorPrimary"
                  iDiv="!mt-2"
                />
                <Icons
                  name={IoMdCheckmark}
                  text="Press Release"
                  size="20"
                  className="!text-colorPrimary"
                  iDiv="!mt-2"
                />
                <Icons
                  name={IoMdCheckmark}
                  text="Legal Notice"
                  size="20"
                  className="!text-colorPrimary"
                  iDiv="!mt-2"
                />
              </div>
              <div className="">
                <Icons
                  name={IoMdCheckmark}
                  text="Subscriptions"
                  size="20"
                  className="!text-colorPrimary"
                />
                <Icons
                  name={IoMdCheckmark}
                  text="Ticket Support"
                  size="20"
                  className="!text-colorPrimary"
                  iDiv="!mt-2"
                />
                <Icons
                  name={IoMdCheckmark}
                  text="Merchant Refund"
                  size="20"
                  className="!text-colorPrimary"
                  iDiv="!mt-2"
                />
                <Icons
                  name={IoMdCheckmark}
                  text="In-Store Payment"
                  size="20"
                  className="!text-colorPrimary"
                  iDiv="!mt-2"
                />
              </div>
            </div>
            {/* Button */}
            <ButtonC
              className="!bg-colorSecondary !text-white"
              title="Read More"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutCompany;
