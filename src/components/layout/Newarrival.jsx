import React from "react";
import Container from "./Container";
import Heading from "./Heading";
import Product from "./Product";
import Slider from "react-slick";
import SampleNextArrow from "./SampleNextArrow";
import SamplePrevArrow from "./SamplePrevArrow";
import newArrival from "../../data/productData";


const Newarrival = () => {
  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow/>,
    responsive: [
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          arrows:false
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          arrows:false
        },
      },
      {
        breakpoint: 575,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
        },
      },
    ],
  };
  return (
    <>
      <div className="mt-5 md:mt-32">
        <Container>
          <Heading title="New Arrivals" />
           <Slider {...settings} >
             {newArrival.map((item, index) => (
                <Product key={index} src={item.image} badge={true}  />
            ))}
          </Slider>
        </Container>
      </div>
    </>
  );
};

export default Newarrival;


// <div className="sm:max-w-[300px] md:max-lg:max-w-[345px] lg:max-w-[370px]">
//               <Product src={P1} badge={true} />
//             </div>