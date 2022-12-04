import React from "react";
import Link from "next/link";

const NavLi = ({ text }) => {
  return (
    <li>
      <Link href="#">
        <div className="text-navTextColor transition-all text-[15px] font-RadHatText">
          {text}
        </div>
      </Link>
    </li>
  );
};

export default NavLi;
