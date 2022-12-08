import React from "react";

function PaymentGateway() {
  return (
    <section className="relative pt-[50px] md:pt-[80px] lg:pt-[100px]">
      <div className="container">
        {/* Text information */}
        <div className="font-RadHatText">
          <h3 className="text-center text-lg text-colorSecondary font-medium">
            What We Offer
          </h3>
          <h1 className="text-center text-[48px] text-colorPrimary py-4 font-normal">
            Smart Payment Gateway Solution
          </h1>
          <p className="text-textGray text-sm md:text-base font-light font-RadHatText text-center md:flex flex-col mb-5">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor{" "}
            <span>
              incididunt ut labore et dolore magna aliqua condimentum.
            </span>
          </p>
        </div>
        {/* Payment Gateway Card */}
        <div className="font-RadHatText text-center">Payment Gateway Card</div>
      </div>
    </section>
  );
}

export default PaymentGateway;
