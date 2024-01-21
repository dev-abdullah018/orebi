import React from "react";
import { FaAngleRight } from "react-icons/fa";
import { Link } from "react-router-dom";

const Breadcrumb = ({title}) => {
  const subpath = window.location.pathname.split("/")[1];
  return (
    <div className="my-32">
      <h1 className="mb-3 font-dm text-5xl font-bold capitalize">{title ? title : subpath}</h1>
      <p className="flex  items-center gap-x-2 font-dm text-xs font-normal text-[#767676] capitalize">
       <Link to="/">Home</Link> <FaAngleRight /> {title ? title : subpath}
      </p>
    </div>
  );
};

export default Breadcrumb;
