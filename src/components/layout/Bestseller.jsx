import React from "react";
import Container from "./Container";
import Heading from "./Heading";
import Product from "./Product";
import Slider from "react-slick";
import { bestSellers } from "../../data/homeData";

const Bestseller = () => {
  const settings = {
    dots: false,
    autoplay: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: false,
    responsive: [
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 575,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <>
      <div className="mt-5 md:mt-32">
        <Container>
          <Heading title="Our Bestsellers" />
          <Slider {...settings}>
            {bestSellers.map((item, index) => (
              <Product key={index} src={item.image} title={item.title} badge={item.badge} />
            ))}
          </Slider>
        </Container>
      </div>
    </>
  );
};

export default Bestseller;
