import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { clients } from "../../data/clientsData";

function ClientSlider() {
  const settings = {
    infinite: true,
    autoplay: true,
    speed: 1000,
    slidesToScroll: 1,
    slidesToShow: 2,
    arrows: false,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
        },
      },
    ],
  };
  return (
    <section className="relative lg:w-[124%] !z-50">
      <div className="">
        <Slider {...settings}>
          {clients.map((client) => {
            return (
              <div
                key={client.id}
                className="!w-full md:!w-[95%] lg:!w-[350px]"
              >
                <div className="p-10 bg-white rounded-lg mx-2 overflow-hidden">
                  {/* Icons */}
                  <div className="flex items-center gap-2 mb-4">
                    {client.icon} {client.icon} {client.icon} {client.icon}{" "}
                    {client.icon}
                  </div>
                  {/* Image and name */}
                  <div className="flex items-center gap-6 mb-8">
                    <img
                      src={client.imgUrl}
                      alt=""
                      className="w-[60px] h-[60px] rounded-full shadow object-contain"
                    />
                    <div className="">
                      <h1 className="text-lg font-RadHatText font-medium text-colorSecondary">
                        {client.name}
                      </h1>
                      <p className="text-sm text-gray-400 font-medium">
                        Client
                      </p>
                    </div>
                  </div>
                  {/* Client Desc */}
                  <p className="text-textGray text-sm md:text-base font-light font-RadHatText">
                    {client.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </Slider>
      </div>
    </section>
  );
}

export default ClientSlider;
