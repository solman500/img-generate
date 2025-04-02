"use client";
import Image from "next/image";
import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
const ImageSlider = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
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
      {["img1", "img2", "img3", "img4", "img5"].map((item, index) => {
        return (
          <div key={index} className="p-4">
            <div className="h-[350px] relative">
              <Image src={`/Images/${item}.webp`} alt={item} 
              className="object-cover rounded-lg "
              fill
              />
            </div>
          </div>
        );
      })}
    </Carousel>
  );
};

export default ImageSlider;
