import React, { useState } from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import Image from './Image';
import banner from "../../assets/banner.png"
import { Link } from 'react-router-dom';


const Banner = () => {
    let [dotActive, setDotActive] = useState("")
    const settings = {
        dots: true,
        beforeChange: (prev,next)=>{
         setDotActive(next)
        },
        arrows: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        infinite: true,
        appendDots: dots => (
            <div
              style={{
                position: 'absolute',
                top: "50%",
                left: "8%",
                transform: "translateY(-50%)"
              }}
            >
              <ul style={{ margin: "0px" }}> {dots} </ul>
            </div>
          ),
          customPaging: i => (
            <div
            style={i === dotActive ? {
                width: "30px",
                color: "#262626",
                borderRight: "3px #262626 solid",
                padding: "10px 0"
            }: {
                width: "30px",
                color: "transparent",
                borderRight: "3px white solid",
                padding: "10px 0"
            }}
            >
              0{i + 1}
            </div>
          )
      };
  return (
    <>
      <Slider {...settings}>
        <Link to="#">
          <div>
            <Image src={banner}/>
          </div>
        </Link> 
        <Link to="#">
          <div>
            <Image src={banner}/>
          </div>
        </Link>
        <Link to="#">
          <div>
            <Image src={banner}/>
          </div>
        </Link>
      </Slider>
    </>
  )
}

export default Banner;
