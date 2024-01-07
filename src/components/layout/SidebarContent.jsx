import React, { useState } from "react";
import { VscTriangleDown } from "react-icons/vsc";
import LeftSidebarItem from "./LeftSidebarItem";

const SidebarContent = ({dropDown}) => {
  let [drop, setDrop] = useState(dropDown);
  let [show, setShow] = useState(dropDown);
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
          <LeftSidebarItem subDropDown={true} title="Category 1">
           <p>ljlg</p>
           <p>ljlg</p>
           <p>ljlg</p>
           <p>ljlg</p>
           <p>ljlg</p>
          </LeftSidebarItem>
          <LeftSidebarItem subDropDown={false} title="Category 1">
           <p>ljlg</p>
           <p>ljlg</p>
           <p>ljlg</p>
           <p>ljlg</p>
           <p>ljlg</p>
          </LeftSidebarItem>
          <LeftSidebarItem subDropDown={true} title="Category 1">
           <p>ljlg</p>
           <p>ljlg</p>
           <p>ljlg</p>
           <p>ljlg</p>
           <p>ljlg</p>
          </LeftSidebarItem>
          <LeftSidebarItem subDropDown={false} title="Category 1">
           <p>ljlg</p>
           <p>ljlg</p>
           <p>ljlg</p>
           <p>ljlg</p>
           <p>ljlg</p>
          </LeftSidebarItem>
          <LeftSidebarItem subDropDown={true} title="Category 1">
           <p>ljlg</p>
           <p>ljlg</p>
           <p>ljlg</p>
           <p>ljlg</p>
           <p>ljlg</p>
          </LeftSidebarItem>
        </div>
      )}
      {
        !drop && (
          <div>
          <LeftSidebarItem subDropDown={true} title="Category 1">
           <p>ljlg</p>
           <p>ljlg</p>
           <p>ljlg</p>
           <p>ljlg</p>
           <p>ljlg</p>
          </LeftSidebarItem>
          <LeftSidebarItem subDropDown={false} title="Category 1">
           <p>ljlg</p>
           <p>ljlg</p>
           <p>ljlg</p>
           <p>ljlg</p>
           <p>ljlg</p>
          </LeftSidebarItem>
          <LeftSidebarItem subDropDown={true} title="Category 1">
           <p>ljlg</p>
           <p>ljlg</p>
           <p>ljlg</p>
           <p>ljlg</p>
           <p>ljlg</p>
          </LeftSidebarItem>
          <LeftSidebarItem subDropDown={false} title="Category 1">
           <p>ljlg</p>
           <p>ljlg</p>
           <p>ljlg</p>
           <p>ljlg</p>
           <p>ljlg</p>
          </LeftSidebarItem>
          <LeftSidebarItem subDropDown={true} title="Category 1">
           <p>ljlg</p>
           <p>ljlg</p>
           <p>ljlg</p>
           <p>ljlg</p>
           <p>ljlg</p>
          </LeftSidebarItem>
        </div>
        )
      }
    </div>
  );
};

export default SidebarContent;
