import React, { useState } from "react";
import { VscTriangleDown } from "react-icons/vsc";
import LeftSidebarItem from "./LeftSidebarItem";

const SidebarContent = ({ dropDown, droptitle }) => {
  let [drop, setDrop] = useState(dropDown);
  let [show, setShow] = useState(dropDown);
  return (
    <div className="mb-14">
      {drop ? (
        <div
          onClick={() => setShow(!show)}
          className="mb-9 flex cursor-pointer items-center justify-between"
        >
          <h3 className="cursor-pointer font-dm text-xl font-bold">
            {droptitle}
          </h3>
          <VscTriangleDown />
        </div>
      ) : (
        <h3 className="mb-9 cursor-pointer font-dm text-xl font-bold">
          {droptitle}
        </h3>
      )}

      {show && (
        <div>
          <LeftSidebarItem subDropDown={false} title="Category 1" color="black">
            <h1 className="cursor-pointer border-b border-solid border-[#767676] py-5 font-dm text-base font-normal text-[#767676]">
              abdulla
            </h1>
          </LeftSidebarItem>
          <LeftSidebarItem subDropDown={true} title="Category 2" color="">
            <h1 className="cursor-pointer border-b border-solid border-[#767676] py-5 font-dm text-base font-normal text-[#767676]">
              abdulla
            </h1>
          </LeftSidebarItem>
          <LeftSidebarItem subDropDown={true} title="Category 3" color="yellow">
            <h1 className="cursor-pointer border-b border-solid border-[#767676] py-5 font-dm text-base font-normal text-[#767676]">
              abdulla
            </h1>
          </LeftSidebarItem>
          <LeftSidebarItem subDropDown={true} title="Category 4" color="blue">
            <h1 className="cursor-pointer border-b border-solid border-[#767676] py-5 font-dm text-base font-normal text-[#767676]">
              abdulla
            </h1>
          </LeftSidebarItem>
          <LeftSidebarItem subDropDown={true} title="Category 5" color="green">
            <h1 className="cursor-pointer border-b border-solid border-[#767676] py-5 font-dm text-base font-normal text-[#767676]">
              abdulla
            </h1>
          </LeftSidebarItem>
        </div>
      )}
      {!drop && (
        <div>
          <LeftSidebarItem subDropDown={true} title="Category 1" color="black">
            <h1 className="cursor-pointer border-b border-solid border-[#767676] py-5 font-dm text-base font-normal text-[#767676]">
              abdulla
            </h1>
          </LeftSidebarItem>
          <LeftSidebarItem subDropDown={true} title="Category 2" color="red">
            <h1 className="cursor-pointer border-b border-solid border-[#767676] py-5 font-dm text-base font-normal text-[#767676]">
              abdulla
            </h1>
          </LeftSidebarItem>
          <LeftSidebarItem subDropDown={true} title="Category 3" color="yellow">
            <h1 className="cursor-pointer border-b border-solid border-[#767676] py-5 font-dm text-base font-normal text-[#767676]">
              abdulla
            </h1>
          </LeftSidebarItem>
          <LeftSidebarItem subDropDown={true} title="Category 4" color="blue">
            <h1 className="cursor-pointer border-b border-solid border-[#767676] py-5 font-dm text-base font-normal text-[#767676]">
              abdulla
            </h1>
          </LeftSidebarItem>
          <LeftSidebarItem subDropDown={true} title="Category 5" color="green">
            <h1 className="cursor-pointer border-b border-solid border-[#767676] py-5 font-dm text-base font-normal text-[#767676]">
              abdulla
            </h1>
          </LeftSidebarItem>
        </div>
      )}
    </div>
  );
};

export default SidebarContent;
