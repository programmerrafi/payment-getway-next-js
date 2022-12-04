import React from "react";
import Link from "next/link";

const SUbli = ({ pages, navToggle, page }) => {
  return (
    <ul
      className={`sub-menu w-max absolute top-20 left-0 opacity-0 py-4 px-2 invisible rounded-lg duration-700 ease-in-out -translate-x-[35%] group-hover:visible group-hover:opacity-100 group-hover:translate-x-0 lg:bg-blue-500 ${
        page && navToggle ? "!block" : "none"
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
