import React from "react";

function ButtonC({ title, className, width, ...rest }) {
  return (
    <button
      className={` 
        px-8 py-[14px] text-textSecondary font-medium font-RadHatText
        rounded-full cursor-pointer
        bg-white
        duration-300 ease-out hover:-translate-y-2 shadow-sm
        ${className}
      `}
      style={{ width: width }}
      {...rest}
    >
      {title}
    </button>
  );
}

export default ButtonC;
