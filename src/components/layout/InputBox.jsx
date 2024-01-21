import React from "react";

const InputBox = (props) => {
  return (
    <div className="mt-6">
      <h4 className="mb-2.5 font-dm text-base font-bold placeholder:font-dm placeholder:text-sm placeholder:font-normal placeholder:text-[#767676]">
       {props.title}
      </h4>
      <props.as
        {...props}
        className={`border-b border-solid border-[#f0f0f0] pb-2.5 w-full outline-none resize-none ${props.className}`}
      >{props.children}</props.as>
    </div>
  );
};

export default InputBox;

