"use client";
import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import ReviewCard from "./ReviewCard";
const Slider = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 1,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  return (
    <Carousel
      ssr={true}
      arrows={true}
      responsive={responsive}
      infinite={true}
      autoPlay={true}
      autoPlaySpeed={5000}
      keyBoardControl={true}
    >
      <div>
        <ReviewCard image={"/Images/u1.jpg"} name="Soliman" role="Engineer" />
      </div>

      <div className="">
        <ReviewCard image={"/Images/u2.jpg"} name="Ahmed" role="DevOps" />
      </div>
      <div className="">
        <ReviewCard image={"/Images/u3.jpg"} name="Mohamed" role="Ui/Ux" />
      </div>
    </Carousel>
  );
};

export default Slider;
