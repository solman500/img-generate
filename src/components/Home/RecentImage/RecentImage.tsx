import ImageSlider from "@/components/Helper/ImageSlider";
import SectionHeading from "@/components/Helper/SectionHeading";
import React from "react";

const RecentImage = () => {
  return (
    <div className="pt-16 pb-16 bg-gray-950 text-white">
      <SectionHeading heading="Expolre Our Recent Image " />
   
   <div className="w-[90%] md:w-[80%] mx-auto mt-16 ">
    <ImageSlider/>
   </div>

    </div>
  );
};

export default RecentImage;
