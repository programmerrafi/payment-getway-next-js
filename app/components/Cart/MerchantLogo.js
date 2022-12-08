import React from "react";

function MerchantLogo({ img }) {
  return (
    <div className="group w-[45%] h-[100px] sm:w-[190px] sm:h-[105px] lg:h-[115px] lg:w-[262px] border duration-150 ease-linear border-white hover:shadow-3xl rounded-lg flex items-center justify-center px-1">
      <img
        src={img}
        alt="com-logo"
        className="h-[70px] sm:h-[75px] lg:h-[95px] object-contain duration-200 ease-linear hover:opacity-100 hover:h-[105px] saturate-50 group-hover:saturate-150"
      />
    </div>
  );
}

export default MerchantLogo;
