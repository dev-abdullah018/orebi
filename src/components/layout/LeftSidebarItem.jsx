import React, { useState } from "react";
import { VscTriangleDown } from "react-icons/vsc";

const LeftSidebarItem = ({subDropDown,title,children}) => {
    let [drop, setDrop] = useState(subDropDown);
    let [show, setShow] = useState(false);
  return (
    <div>
    {drop ? (
      <div
        onClick={() => setShow(!show)}
        className="flex items-center justify-between cursor-pointer"
      >
        <h3>{title}</h3>
        <VscTriangleDown />
      </div>
    ) : (
      <h3 className="cursor-pointer">{title}</h3>
    )}

    {show && (
      <div>
       {children}
      </div>
    )}
  </div>
  )
}

export default LeftSidebarItem;