import React from "react";
import Link from "next/link";

const SUbli = ({ pages, navToggle, page }) => {
  return (
    <ul
      className={`sub-menu lg:w-max lg:absolute lg:top-[92px] lg:right-1/2 lg:translate-x-1/2 lg:opacity-0 py-4 px-2 lg:invisible lg:rounded-b-lg lg:duration-700 lg:ease-in-out lg:origin-top lg:scale-y-0 lg:group-hover:visible lg:group-hover:opacity-100 lg:group-hover:scale-y-100 lg:bg-blue-500 relative w-full opacity-100 visible scale-y-100 hidden lg:!block ${
        page && navToggle ? "!block" : ""
      } `}
    >
      {pages.map((menu) => {
        return (
          <li
            key={menu.id}
            className="p-3 lg:hover:bg-colorPrimary lg:rounded-md lg:transition-all"
          >
            <Link href="#">
              <div className="font-normal text-navTextColor font-RadHatText">
                {menu.text}
              </div>
            </Link>
          </li>
        );
      })}
    </ul>
  );
};

export default SUbli;
