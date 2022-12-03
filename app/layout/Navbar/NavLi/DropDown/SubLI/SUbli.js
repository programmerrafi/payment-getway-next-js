import React from "react";
import Link from "next/link";

const SUbli = ({ pages, navToggele, page }) => {
  return (
    <ul className={`sub-menu lg:bg-blue-500 ${page && navToggele} `}>
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
