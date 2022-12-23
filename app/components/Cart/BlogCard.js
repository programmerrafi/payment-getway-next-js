import React from "react";

function BlogCard({ img, title, type }) {
  return (
    <div className="w-full lg:w-[360px] rounded-lg mb-10 lg:mb-0 [&:nth-child(3)]:mb-0">
      <div className="w-full h-[480px] md:h-auto relative rounded-lg overflow-hidden mb-6 cursor-pointer">
        <img src={img} alt="blog" className="w-full h-full object-cover" />
        <span className="rounded-lg bg-white font-medium text-sm p-3 absolute bottom-0 left-0 rounded-tl-none rounded-br-none">
          {type}
        </span>
      </div>
      {/* Info */}
      <h1 className="font-RadHatText font-medium text-[22px] text-colorPrimary">
        {title}
      </h1>
      <p className="text-textGray text-sm md:text-base font-light font-RadHatText lg:flex flex-col my-3">
        Lorem ipsum dolor sit amet, consectetur adipis cing elit. Donec vel
        dignissim lectus. Pellentesque et scelerisque nunc. Sed vel ipsum...
      </p>
      <h1 className="font-RadHatText font-medium text-sm md:text-base text-colorSecondary cursor-pointer">
        Read More
      </h1>
    </div>
  );
}

export default BlogCard;
