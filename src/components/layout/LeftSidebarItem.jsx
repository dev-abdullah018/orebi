import React, { useState } from "react";
import { FaPlus } from "react-icons/fa";

const LeftSidebarItem = (props) => {
  let [drop, setDrop] = useState(props.subDropDown);
  let [show, setShow] = useState(false);
  return (
    <div>
      {drop ? (
        <div
          onClick={() => setShow(!show)}
          className="flex items-center justify-between border-b border-solid border-[#767676]"
        >
          <h3 className="cursor-pointer py-5 font-dm text-base font-normal text-[#767676]">
            {props.color && (
              <span
                className="mr-2 inline-block h-[11px] w-[11px] rounded-full"
                style={{ background: props.color }}
              ></span>
            )}
            {props.title}
          </h3>
          <FaPlus className="text-[#767676]" />
        </div>
      ) : (
        <h3 className="cursor-pointer border-b border-solid border-[#767676] py-5 font-dm text-base font-normal text-[#767676]">
          {props.color && (
            <span
              className="mr-2 inline-block h-[11px] w-[11px] rounded-full"
              style={{ background: props.color }}
            ></span>
          )}
          {props.title}
        </h3>
      )}

      {show && <div>{props.children}</div>}
    </div>
  );
};

export default LeftSidebarItem;
