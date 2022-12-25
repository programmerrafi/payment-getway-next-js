import React from "react";

function Title({ title, className }) {
  return (
    <p
      className={`text-colorSecondary text-lg md:text-xl font-medium mb-2 md:mb-4 ${className}`}
    >
      {title}
    </p>
  );
}

export default Title;
