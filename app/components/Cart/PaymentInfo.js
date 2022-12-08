import React from "react";

function PaymentInfo({
  iconName = null,
  size = "25",
  iClass = "",
  iDivClass = "",
  textClass = "",
  h1Text,
  pText,
}) {
  const IconName = iconName;

  return (
    <div className="flex flex-col justify-center items-center md:justify-start md:item-start md:flex-row gap-4 border-b pb-8 border-[#D4DBE4]">
      <div
        className={`w-[58px] h-[58px] flex items-center justify-center bg-colorSecondary rounded-md ${iDivClass}`}
      >
        {IconName !== null && (
          <IconName size={Number(size)} className={`text-white ${iClass}`} />
        )}
      </div>
      <div className="">
        <p
          className={`text-colorSecondary text-[22px] font-medium ${textClass}`}
        >
          {h1Text}
        </p>
        <p className="text-textGray text-sm md:text-base font-light font-RadHatText">
          {pText}
        </p>
      </div>
    </div>
  );
}

export default PaymentInfo;
