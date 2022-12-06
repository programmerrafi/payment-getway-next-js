import React from "react";
import Link from "next/link";

const NavLi = ({ text }) => {
  return (
    <li>
      <Link href="#">
        <div className="text-colorSecondary lg:text-navTextColor text-sm font-medium lg:font-normal lg:text-base font-RadHatText">
          {text}
        </div>
      </Link>
    </li>
  );
};

export default NavLi;
