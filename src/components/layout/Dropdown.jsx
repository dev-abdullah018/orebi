import React from "react";

const Dropdown = ({ children, className, titleicon, titletext, dropref }) => {
  return (
    <>
      <div ref={dropref} className={className}>
        <p className="flex items-center gap-3 font-dm font-sm font-normal">
          <span>{titleicon}</span>
          <span className="hidden lg:inline-block">{titletext}</span>
        </p>
        {children}
      </div>
    </>
  );
};


export default Dropdown;
