import React from "react";

const Heading = ({ title }) => {
  return (
    <>
      <h2 className="mb-6 md:mb-12 font-dm text-2xl font-bold md:text-[39px] text-primary">
        {title}
      </h2>
    </>
  );
};

export default Heading;
