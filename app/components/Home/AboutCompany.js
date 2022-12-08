import React from "react";
import { BsFillPlayFill } from "react-icons/bs";

function AboutCompany() {
  return (
    <section className="relative py-[150px]">
      <div className="container">
        <div className="flex gap-8">
          <div className="w-[55%]">
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
                <div className="w-[65px] h-[65px] flex items-center justify-center border border-colorSecondary rounded-full shadow-md cursor-pointer">
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
          <div className="w-[45%] ">About of company</div>
        </div>
      </div>
    </section>
  );
}

export default AboutCompany;
