import React from "react";

function Service({ item }) {
  return (
    <div className="group w-full md:w-[48%] lg:h-auto lg:w-[356px] border border-white [&:nth-child(1)]:shadow-3xl hover:shadow-3xl rounded-lg px-10 lg:mb-12 mb-8 duration-300 ease-out hover:-translate-y-2">
      <div className="">
        <div className="group/icon h-[90px]">
          <div className="bg-colorSecondary text-white pb-4 w-[70px] h-[90px] group-hover/icon:h-[80px] rounded-b-[5px] justify-center flex items-end duration-300 ease-out">
            {item?.icon}
          </div>
        </div>
        <h1 className="pt-8 font-RadHatText font-medium text-[22px] text-colorPrimary">
          {item.title}
        </h1>
        <p className="text-textGray text-sm md:text-base font-light font-RadHatText lg:flex flex-col my-5">
          {item.desc}
        </p>
        <h1 className="pb-8 font-RadHatText font-medium text-sm md:text-base text-colorSecondary">
          {item.text}
        </h1>
      </div>
    </div>
  );
}

export default Service;
