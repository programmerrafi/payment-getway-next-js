import React from "react";

function PaymentCard({ name = null, text }) {
  const IconName = name;
  return (
    <div className="bg-[#f3f6f9] rounded-lg py-6 px-5 w-[160px] md:w-[220px]">
      <div className={`flex items-center gap-4 flex-col md:flex-row`}>
        <div className={`bg-colorSecondary p-3 rounded-md`}>
          <IconName size={35} className={`text-white`} />
        </div>
        <p
          className={`text-[22px] leading-[30px] text-colorSecondary font-medium font-RadHatText text-center md:text-start`}
        >
          {text}
        </p>
      </div>
    </div>
  );
}

export default PaymentCard;
