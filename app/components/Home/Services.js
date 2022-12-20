import React from "react";
import { ServicesData } from "../../data/servicesData";
import Service from "../Cart/Service";

function Services() {
  return (
    <section className="relative py-[100px]">
      <div className="container">
        {/* Text information */}
        <div className="font-RadHatText">
          <h3 className="text-center text-lg text-colorSecondary font-medium">
            Our Services
          </h3>
          <h1 className="text-center text-[40px] md:text-[44px] lg:text-[48px] text-colorPrimary py-4 font-light lg:font-normal">
            We Provide Best Payment Services
          </h1>
          <p className="text-textGray text-sm md:text-base font-light font-RadHatText text-center lg:flex flex-col mb-5">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor{" "}
            <span>
              incididunt ut labore et dolore magna aliqua condimentum.
            </span>
          </p>
        </div>
        {/* Services Card */}
        <div className="flex flex-wrap justify-between pt-10">
          {ServicesData.map((item) => (
            <Service key={item.id} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;
