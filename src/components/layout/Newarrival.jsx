import React from "react";
import Container from "./Container";
import Heading from "./Heading";
import Product from "./Product";
import P1 from "../../assets/p1.png";
import Slider from "react-slick";
import SampleNextArrow from "./SampleNextArrow";
import SamplePrevArrow from "./SamplePrevArrow";

const Newarrival = () => {
  
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow/>,
    // responsive: [
    //   {
    //     breakpoint: 734,
    //     settings: {
    //       slidesToShow: 2,
    //       slidesToScroll: 1,
    //       infinite: true,
    //     }
    //   },
    //   {
    //     breakpoint: 600,
    //     settings: {
    //       slidesToShow: 2,
    //       slidesToScroll: 1,
    //     }
    //   },
    //   {
    //     breakpoint: 480,
    //     settings: {
    //       slidesToShow: 1,
    //       slidesToScroll: 1,
    //       arrows: false,
    //     }
    //   }
    // ]
  };
  return (
    <>
      <div className="mt-5 md:mt-32">
        <Container>
          <Heading title="New Arrivals" />
          <Slider {...settings}>
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
            <div className="sm:max-w-[300px] md:max-lg:max-w-[345px] lg:max-w-[370px]">
              <Product src={P1} badge={true} />
            </div>
          </Slider>
        </Container>
      </div>
    </>
  );
};

export default Newarrival;
