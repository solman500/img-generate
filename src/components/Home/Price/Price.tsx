import { Check } from "lucide-react";
import React from "react";
import PriceCard from "./PriceCard";

const Price = () => {
  return (
    <div
      className=" py-16
    "
    >
      <div className="w-[80%] mx-auto grid text-white grid-cols-1 xl:grid-cols-2 gap-10 items-center  ">
        {/* -------------------Content------------ */}
        <div className=" ">
          <h1 className="text-2xl font-bold upperacase">
            {" "}
            Flexble & Affordable
          </h1>
          <h1 className="text-3xl md:text-4xl lg:text-6xl mb-6 ">
            Our Pricing Plans
          </h1>
          <p className="text-white font-medium text-opacity-70 ">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquam
            exercitationem repellat, amet consectetur adipisicing elit. Aliquam
            exercitationem repellat, modi non enim illum? lore10
            {/* -------------------Pricing Table------------ */}
          </p>
          <div className="mt-8 ">
            <div className="flex items-center space-x-3 mb-3  ">
              <Check className="w-6 h-6 text-green-600" />
              <p className="text-lg text-white font-semibold text-opacity-60">
                High Quality Services
              </p>
            </div>
            <div className="flex items-center space-x-3 mb-3  ">
              <Check className="w-6 h-6 text-green-600" />
              <p className="text-lg text-white font-semibold text-opacity-60">
                24/7 customer Support
              </p>
            </div>
            <div className="flex items-center space-x-3 mb-3  ">
              <Check className="w-6 h-6 text-green-600" />
              <p className="text-lg text-white font-semibold text-opacity-60">
                affortable Rates
              </p>
            </div>
          </div>
        </div>

        {/* --------------------------Card For Price ----------------------------- */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div   data-aos="fade-right"
          data-aos-anchor-placment="top-center" className="">
            <PriceCard price="4" user="3" type="silver Pack" />
          </div>
          <div data-aos="fade-right"
          data-aos-anchor-placment="top-center"
          data-aos-delay="100"
          className="">
            <PriceCard price="6" user="10" type="Golden Pack" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Price;
