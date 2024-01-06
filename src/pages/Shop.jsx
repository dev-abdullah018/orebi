import React, { useState } from "react";
import Container from "../components/layout/Container";
import Breadcrumb from "../components/layout/Breadcrumb";
import Flex from "../components/layout/Flex";
import Pagination from "../components/layout/Pagination";
import LeftSideBar from "../components/layout/LeftSideBar";

const Shop = () => {
  let [showNumber,setShowNumber] = useState(12);
  return (
    <>
      <Container>
        <Breadcrumb />
        <Flex className="flex gap-x-10">
          <div className="w-[25%] bg-red-600">
          <LeftSideBar/>
          </div>
          <div className="relative w-[75%]">
            <div className="flex gap-x-12 mb-3.5">
            <div className="md:flex items-center gap-x-3.5">
            <span className="inline-block font-dm font-normal text-base text-[#767676]">Sort by:</span>
            <select
              id="countries"
              class="block md:w-[239px] w-full rounded-lg border border-[#f0f0f0] p-2.5 font-dm text-base font-normal text-[#767676] focus:border-black focus:ring-black"
            >
              <option selected>Featured</option>
              <option value="US">United States</option>
              <option value="CA">Canada</option>
              <option value="FR">France</option>
              <option value="DE">Germany</option>
            </select>
            </div>
            <div className="md:flex items-center gap-x-3.5">
            <span className="inline-block font-dm font-normal text-base text-[#767676]">Show:</span>
            <select
              onChange={(e)=> setShowNumber(+e.target.value)}
              id="countries"
              class="block md:w-[139px] w-full rounded-lg border border-[#f0f0f0] p-2.5 font-dm text-base font-normal text-[#767676] focus:border-black focus:ring-black"
            >
              <option value="12">12</option>
              <option value="24">24</option>
              <option value="48">48</option>
            </select>
            </div>
            </div>
            <Pagination itemsPerPage={showNumber} />
          </div>
        </Flex>
      </Container>
    </>
  );
};

export default Shop;
