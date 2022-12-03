import React from "react";
import Link from "next/link";

const NavLi = ({ text }) => {
  return (
    <li>
      <Link href="#">
        <div className="hover:text-[#6b5eff] text-colorWhite transition-all">
          {text}
        </div>
      </Link>
    </li>
  );
};

export default NavLi;
