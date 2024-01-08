import React, { useEffect, useState } from "react";
import Container from "../components/layout/Container";
import Breadcrumb from "../components/layout/Breadcrumb";
import Flex from "../components/layout/Flex";
import Pagination from "../components/layout/Pagination";
import LeftSideBar from "../components/layout/LeftSideBar";
import { IoFilterCircle } from "react-icons/io5";
import { IoIosCloseCircle } from "react-icons/io";

const Shop = () => {
  let [showNumber, setShowNumber] = useState(12);
  let [show,setShow] = useState(true);

  useEffect(()=>{
    function scrollWidth(){
      if(window.innerWidth < 575){
        setShow(false)
      }else{
        setShow(true)
      }
    }
    scrollWidth()
    window.addEventListener("resize", scrollWidth)
  },[])
  return (
    <>
      <Container>
        <Breadcrumb />
        <Flex className="relative flex gap-x-10">
        {
          show && (
            <div className="absolute left-0 top-0 z-50 w-full bg-white p-5 sm:bg-transparent sm:static sm:w-[25%]">
            <IoIosCloseCircle className="block sm:hidden" onClick={()=> setShow(!show)}/>
            <LeftSideBar />
          </div>
          )
        }
          <div className="relative w-full md:w-[75%]">
            <div className="mb-3.5 flex gap-x-12">
              <div className="mb-4 flex items-end">
                <IoFilterCircle onClick={()=> setShow(!show)} className="inline-block text-2xl text-[#767676] sm:hidden " />
              </div>
              <div className="items-center gap-x-3.5 md:flex">
                <span className="inline-block font-dm text-base font-normal text-[#767676]">
                  Sort by:
                </span>
                <select
                  id="countries"
                  class="block w-full rounded-lg border border-[#f0f0f0] p-2.5 font-dm text-base font-normal text-[#767676] focus:border-black focus:ring-black md:w-[239px]"
                >
                  <option selected>Featured</option>
                  <option value="US">United States</option>
                  <option value="CA">Canada</option>
                  <option value="FR">France</option>
                  <option value="DE">Germany</option>
                </select>
              </div>
              <div className="items-center gap-x-3.5 md:flex">
                <span className="inline-block font-dm text-base font-normal text-[#767676]">
                  Show:
                </span>
                <select
                  onChange={(e) => setShowNumber(+e.target.value)}
                  id="countries"
                  class="block w-full rounded-lg border border-[#f0f0f0] p-2.5 font-dm text-base font-normal text-[#767676] focus:border-black focus:ring-black md:w-[139px]"
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
