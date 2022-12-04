import React from "react";
import Link from "next/link";

const SUbli = ({ pages, navToggle, page }) => {
  return (
    <ul
      className={`sub-menu lg:w-max lg:absolute lg:top-20 lg:left-0 lg:opacity-0 py-4 px-2 lg:invisible lg:rounded-lg lg:duration-700 lg:ease-in-out lg:-translate-x-[35%] lg:group-hover:visible lg:group-hover:opacity-100 lg:group-hover:translate-x-0 lg:bg-blue-500 relative w-full opacity-100 visible translate-x-0 hidden lg:!block ${
        page && navToggle ? "!block" : ""
      } `}
    >
      {pages.map((menu) => {
        return (
          <li key={menu.id} className="p-3">
            <Link href="#">
              <div className="font-normal">{menu.text}</div>
            </Link>
          </li>
        );
      })}
    </ul>
  );
};

export default SUbli;
