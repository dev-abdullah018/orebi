import React from "react";
import Image from "./Image";
import Badge from "./Badge";
import Flex from "./Flex";
import { FaHeart, FaShoppingCart } from "react-icons/fa";
import { TfiReload } from "react-icons/tfi";

const Product = ({src,badge,title}) => {
  return (
    <div className="px-5">
      <div className="group relative overflow-y-hidden">
        <Image className="w-full" src={src} />
         {badge &&  <Badge title={title}/>}
        <div className="absolute bottom-[-44%] lg:max-xl:bottom-[-75%] left-0 h-[156px] w-full bg-white px-7 py-6 duration-300 ease-in group-hover:bottom-0">
          <Flex className="flex items-center justify-end gap-x-1 sm:gap-x-4">
            <p className="font-dm text-base font-normal text-[#6d6d6d] lg:max-xl:text-sm">
              Add to Wish List
            </p>
            <FaHeart className="text-base" />
          </Flex>
          <Flex className="my-5 flex items-center justify-end gap-x-1 sm:gap-x-4">
            <p className="font-dm text-base font-normal text-[#6d6d6d] lg:max-xl:text-sm">
              Compare
            </p>
            <TfiReload className="stroke-[1px] text-base" />
          </Flex>
          <Flex className="flex items-center justify-end gap-x-1 sm:gap-x-4">
            <p className="font-dm text-base font-normal text-[#6d6d6d] lg:max-xl:text-sm">
              Add to Cart
            </p>
            <FaShoppingCart className="text-base" />
          </Flex>
        </div>
      </div>
      <div className="mb-12 md:mb-0">
        <Flex className="mt-0 flex items-center justify-between md:mt-6">
          <h3 className="font-dm text-xl font-bold lg:max-xl:text-sm">
            Basic Crew Neck Tee
          </h3>
          <p className="font-dm text-base font-normal text-[#767676] lg:max-xl:text-sm">
            $44.00
          </p>
        </Flex>
        <p className="mt-1 font-dm text-base font-normal text-[#767676] md:mt-4 lg:max-xl:text-sm">
          Black
        </p>
      </div>
    </div>
  );
};

export default Product;
