import React from "react";

function ButtonC({ title, className, width, text, ...rest }) {
  return (
    <button
      className={` 
        px-8 py-4 text-colorWhite font-medium
        rounded-full cursor-pointer
        bg-btn2 hover:text-white
        hover:bg-btn2
        transition-all duration-300 ease-in-out
        ${className}
      `}
      style={{ fontSize: text, width: width }}
      {...rest}
    >
      {title}
    </button>
  );
}

export default ButtonC;
