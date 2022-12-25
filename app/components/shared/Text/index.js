import React from "react";

function Text({ text, className }) {
  return (
    <h3
      className={`text-gray-400 text-sm md:text-base font-light font-RadHatText hover:text-colorSecondary cursor-pointer transition-all pt-2 leading-7s ${className}`}
    >
      {text}
    </h3>
  );
}

export default Text;
