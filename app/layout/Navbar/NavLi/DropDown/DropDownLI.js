import React, { useState } from "react";
import SUbli from "./SubLI/SUbli";
import { IoIosArrowDown } from "react-icons/io";
import { pages, contacts } from "../../../../data/dropDownData";
import Link from "next/link";

const DropDownLI = ({ text }) => {
  const [navToggele, setnavToggele] = useState("");
  const handleToggel = () => {
    if (navToggele === "") {
      setnavToggele("toggel-button");
    } else if (navToggele === "toggel-button") {
      setnavToggele("");
    }
  };

  return (
    <li className="sub-menu-head lg:py-[18px]" onClick={handleToggel}>
      <Link href="#">
        <div className="hover:text-[#6b5eff] transition-all flex gap-1 text-colorWhite uppercase">
          {text}
          <IoIosArrowDown className="arrow" size={18} />
        </div>
      </Link>
      <SUbli
        pages={text === "PAGES" ? pages : contacts}
        navToggele={navToggele}
        page
      />
    </li>
  );
};

export default DropDownLI;
