import React from "react";
import Container from "./Container";
import Heading from "./Heading";
import Flex from "./Flex";
import Product from "./Product";
import P1 from "../../assets/p1.png";

const Newarrival = () => {
  return (
    <>
      <div className="mt-5 md:mt-32">
        <Container>
          <Heading title="New Arrivals" />
          <Flex className="sm:flex sm:max-lg:flex-wrap sm:max-md:justify-between md:gap-x-10">
            <div className="sm:max-w-[300px] md:max-lg:max-w-[345px] lg:max-w-[370px]">
              <Product src={P1} badge={true} />
            </div>
            <div className="sm:max-w-[300px] md:max-lg:max-w-[345px] lg:max-w-[370px]">
              <Product src={P1} badge={false} />
            </div>
            <div className="sm:max-w-[300px] md:max-lg:max-w-[345px] lg:max-w-[370px]">
              <Product src={P1} badge={true} />
            </div>
            <div className="sm:max-w-[300px] md:max-lg:max-w-[345px] lg:max-w-[370px]">
              <Product src={P1} badge={true} />
            </div>
          </Flex>
        </Container>
      </div>
    </>
  );
};

export default Newarrival;
