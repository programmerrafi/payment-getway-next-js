import React from "react";

function Icons({
  name = null,
  size = "32",
  className = "",
  textClass = "",
  text = null,
}) {
  const IconName = name;
  return (
    <div className="flex items-center gap-2">
      {IconName !== null && (
        <IconName
          size={Number(size)}
          className={`text-textGray transition-all ${className}`}
        />
      )}
      {text !== null && (
        <p
          className={`text-[#94999f] text-base font-light font-RadHatText ${textClass}`}
        >
          {text}
        </p>
      )}
    </div>
  );
}

export default Icons;
