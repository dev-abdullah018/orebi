import React, { useState } from "react";
import { VscTriangleDown } from "react-icons/vsc";
import LeftSidebarItem from "./LeftSidebarItem";

const SidebarContent = ({ dropDown, droptitle, data }) => {
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
          {data.map((item,index) => 
             item.subCategory ? (
              <LeftSidebarItem
              subDropDown={item.subCategory ? true : false}
              title={item.name}
              color={item.code}
            >
              {item.subCategory &&
                item.subCategory.map((subitem) => (
                  <h1 className="cursor-pointer border-b border-solid border-[#767676] py-5 font-dm text-base font-normal text-[#767676]">
                    {subitem.name}
                  </h1>
                ))}
            </LeftSidebarItem>
             ) : (
              <LeftSidebarItem
              subDropDown={item.subCategory ? true : false}
              title={item.name}
              color={item.code}
            >
              {item.subCategory &&
                item.subCategory.map((subitem) => (
                  <h1 className="cursor-pointer border-b border-solid border-[#767676] py-5 font-dm text-base font-normal text-[#767676]">
                    {subitem.name}
                  </h1>
                ))}
            </LeftSidebarItem>
             )
           
          )}
        </div>
      )}

      {!drop && (
        <div>
          {data.map((item,index) => 
             item.subCategory ? (
              <LeftSidebarItem
              subDropDown={item.subCategory ? true : false}
              title={item.name}
              color={item.code}
            >
              {item.subCategory &&
                item.subCategory.map((subitem) => (
                  <h1 className="cursor-pointer border-b border-solid border-[#767676] py-5 font-dm text-base font-normal text-[#767676]">
                    {subitem.name}
                  </h1>
                ))}
            </LeftSidebarItem>
             ) : (
              <LeftSidebarItem
              subDropDown={item.subCategory ? true : false}
              title={item.name}
              color={item.code}
            >
              {item.subCategory &&
                item.subCategory.map((subitem) => (
                  <h1 className="cursor-pointer border-b border-solid border-[#767676] py-5 font-dm text-base font-normal text-[#767676]">
                    {subitem.name}
                  </h1>
                ))}
            </LeftSidebarItem>
             )
           
          )}
        </div>
      )}
    </div>
  );
};

export default SidebarContent;


{/* <div>
          {data.map((item) => (
            <LeftSidebarItem
              subDropDown={item.subCategory ? true : false}
              title={item.name}
            >
              {item.subCategory &&
                item.subCategory.map((subitem) => (
                  <h1 className="cursor-pointer border-b border-solid border-[#767676] py-5 font-dm text-base font-normal text-[#767676]">
                    {subitem.name}
                  </h1>
                ))}
            </LeftSidebarItem>
          ))}
        </div> */}