import React, { useState } from "react";
import { VscTriangleDown } from "react-icons/vsc";

const LeftSidebarItem = ({subdropdown}) => {
    let [drop, setDrop] = useState(subdropdown);
    let [show, setShow] = useState(false);
  return (
    <div>
    {drop ? (
      <div
        onClick={() => setShow(!show)}
        className="flex items-center justify-between cursor-pointer"
      >
        <h3>Category 1</h3>
        <VscTriangleDown />
      </div>
    ) : (
      <h3 className="cursor-pointer">Category 1</h3>
    )}

    {show && (
      <div>
        <p>lslfls</p>
        <p>lslfls</p>
        <p>lslfls</p>
        <p>lslfls</p>
        <p>lslfls</p>
      </div>
    )}
  </div>
  )
}

export default LeftSidebarItem;