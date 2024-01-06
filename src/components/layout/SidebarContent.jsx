import React, { useState } from "react";
import { VscTriangleDown } from "react-icons/vsc";
import LeftSidebarItem from "./LeftSidebarItem";

const SidebarContent = ({dropDown}) => {
  let [drop, setDrop] = useState(dropDown);
  let [show, setShow] = useState(false);
  return (
    <div>
      {drop ? (
        <div
          onClick={() => setShow(!show)}
          className="flex items-center justify-between cursor-pointer"
        >
          <h3>Shop by Category</h3>
          <VscTriangleDown />
        </div>
      ) : (
        <h3 className="cursor-pointer">Shop by Category</h3>
      )}

      {show && (
        <div>
          <LeftSidebarItem subdropdown={true}/>
          <LeftSidebarItem subdropdown={false}/>
          <LeftSidebarItem subdropdown={true}/>
          <LeftSidebarItem subdropdown={false}/>
          <LeftSidebarItem subdropdown={true}/>
        </div>
      )}
    </div>
  );
};

export default SidebarContent;
