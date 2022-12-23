import React from "react";
import BlogCard from "../Cart/BlogCard";
import ButtonC from "../shared/ButtonC";

function Blog() {
  return (
    <section className="relative py-[100px]">
      <div className="container font-RadHatText">
        <h3 className=" text-lg text-colorSecondary font-medium mb-2">
          Our Blog
        </h3>
        <div className="flex items-center justify-between mb-3 sm:flex-nowrap flex-wrap">
          <h1 className="text-[40px] md:text-[44px] lg:text-[48px] text-colorPrimary leading-[62px] py-4 font-light">
            Latest Blog
          </h1>
          {/* Button */}
          <ButtonC
            className="!bg-colorSecondary !text-white"
            title="View All Blog"
          />
        </div>
        {/* Blog Card */}
        <div className="lg:flex justify-between">
          {/* Single Card */}
          <BlogCard
            img={`images/blog-1.jpeg`}
            title="Inflation Is Now The Right Time To Get More Worried"
            type="Business"
          />
          <BlogCard
            img={`images/blog-2.jpeg`}
            title="Few Dare To Follow As France Bank FBVA Lifts Bet"
            type="Bank"
          />
          <BlogCard
            img={`images/blog-3.jpeg`}
            title="Trusted Digital Identity Is The Key To Digital Future"
            type="Digital"
          />
        </div>
      </div>
    </section>
  );
}

export default Blog;
