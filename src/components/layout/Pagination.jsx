import React, { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";
import Product from "./Product";
import P1 from "../../assets/p1.png";

const items = [...Array(120).keys()];

function Items({ currentItems }) {
  return (
    <>
      {currentItems && currentItems.map((item,index) => (
          <div className="md:w-[49%] lg:w-[32%]">
            <Product key={index} src={P1} badge={true} />
          </div>
        ))}
    </>
  );
}

const Pagination = ({ itemsPerPage }) => {
  const [itemOffset, setItemOffset] = useState(0);
  const endOffset = itemOffset + itemsPerPage;
  const currentItems = items.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(items.length / itemsPerPage);

  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % items.length;
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
        Products from {itemOffset} to {itemOffset + itemsPerPage} of {items.length}
      </p>
    </>
  );
};

export default Pagination;
