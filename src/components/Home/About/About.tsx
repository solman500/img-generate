import { Button } from "@/components/ui/button";
import Image from "next/image";
import React from "react";

const About = () => {
  return (
    <div className="py-16">
      <div className="w-[80%] mx-auto grid grid-cols-1 xl:grid-cols-2 gap-10 items-center">
        {/* ------------------Images------------------------ */}
        <div
          data-aos="zoom-in"
          data-aos-anchor-placment="top-center"
          className="order-2 xl:order-1
         
        
        "
        >
          <Image
            src={"/Images/about.jpg"}
            alt=""
            width={400}
            height={400}
            className="rounded-lg w-full"
          />
        </div>

        {/* --------------------Content----------------------- */}
        <div className="order-1 xl:order-2">
          <h1 className=" font-semibold text-lg capitalize text-white ">
            what we do
          </h1>
          <h1 className="text-3xl font-bold  sm:text-4xl lg:text-6xl  text-white  ">
            Create your Own AI
          </h1>
          <p className="text-xl font-medium leading-relaxed text-gray-100">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo
            perferendis omnis reprehenderit asperiores quam similique aliquam ad
            ullam architecto unde.
          </p>

          <Button className="bg-blue-500 text-white px-4 py-2 rounded-md">
            About Us
          </Button>
        </div>
      </div>
    </div>
  );
};

export default About;
