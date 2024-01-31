import React, { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";
import Product from "./Product";
import shopData from "../../data/shopData";


function Items({ currentItems }) {
  return (
    <>
      {currentItems && currentItems.map((item,index) => (
          <div key={index} className="md:w-[49%] lg:w-[32%] mb-4">
            <Product key={index} src={item.image} title={item.title} badge={item.badge}/>
          </div>
        ))}
    </>
  );
}

const Pagination = ({ itemsPerPage }) => {
  const [itemOffset, setItemOffset] = useState(0);
  const endOffset = itemOffset + itemsPerPage;
  const currentItems = shopData.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(shopData.length / itemsPerPage);

  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % shopData.length;
    setItemOffset(newOffset);
  };

  return (
    <>
      <div className="md:flex md:flex-wrap md:justify-between">
        <Items currentItems={currentItems} />
      </div>
      <ReactPaginate
        breakLabel="..."
        breakClassName="page-item"
        breakLinkClassName="page-link"
        nextLabel=""
        onPageChange={handlePageClick}
        pageRangeDisplayed={4}
        marginPagesDisplayed={1}
        pageCount={pageCount}
        previousLabel=""
        renderOnZeroPageCount={null}
        previousClassName="hidden"
        nextClassName="hidden"
        pageClassName="inline-block border border-solid border-[#F0F0F0] py-2 px-3.5 font-dm font-normal text-sm"
        containerClassName="flex flex-wrap gap-x-3.5 gap-y-3.5 md:gap-y-0 mt-12"
        activeClassName="inline-block border border-solid border-[#F0F0F0] py-2 px-3.5 font-dm font-normal text-sm text-white bg-black"
      />
      <p className="lg:absolute lg:bottom-0 lg:right-0 mt-2.5 lg:mt-0 font-dm text-sm font-normal text-[#767676]">
        Products from {itemOffset} to {itemOffset + itemsPerPage} of {shopData.length}
      </p>
    </>
  );
};

export default Pagination;



