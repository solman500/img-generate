import Image from "next/image";
import React from "react";
import FaqCard from "./FaqCard";

const Faq = () => {
  return (
    <div className=" text-white py-16 ">
      <div className="w-[80%] mx-auto grid grid-cols-1 mt-16 md:grid-cols-2 gap-10 items-center">
        <div className="">
          <Image src= {"/Images/faq.png"} alt="faq" width={500} height={500} />
        </div>

        {/* ------------faqCard----------- */}

        <FaqCard/>
      </div>
    </div>
  );
};

export default Faq;
