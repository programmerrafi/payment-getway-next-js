import React, { useState } from "react";
import SUbli from "./SubLI/SUbli";
import { IoIosArrowDown } from "react-icons/io";
import { services, features } from "../../../../data/dropDownData";
import Link from "next/link";

const DropDownLI = ({ text }) => {
  const [navToggle, setNavToggle] = useState(false);

  return (
    <li
      className="group lg:py-[34px] cursor-pointer relative"
      onClick={() => setNavToggle(!navToggle)}
    >
      <Link href="#">
        <div className="flex gap-1 items-center text-colorSecondary font-medium lg:font-normal text-sm lg:text-navTextColor lg:text-[15px] font-RadHatText capitalize">
          {text}
          <IoIosArrowDown
            className="duration-300 ease-linear group-hover:rotate-180"
            size={17}
          />
        </div>
      </Link>
      <SUbli
        pages={text === "Services" ? services : features}
        navToggle={navToggle}
        page
      />
    </li>
  );
};

export default DropDownLI;
