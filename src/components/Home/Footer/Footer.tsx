import React from "react";

const Footer = () => {
  return (
    <div className="py-16 bg-black text-white ">
      <div className="w-[80%] mx-auto grid md:grid-cols-2 lg:grid-cols-4 gap-10 items-start pb-8  border-b-2 border-gray-900 space-y-6 sm:space-y-0  ">
        <div className="col-span-2 ">
          <p className="text-2xl sm:text-3xl md:text-4xl text-white w-[88%] font-bold">
            We Develop & Create digital Future
          </p>
        </div>
        <div className="">
          <h1 className="text-xl font-bold "> Address </h1>
          <p className="opacity-60 text-white   mt-4"> QENA , Qeft</p>
          <p className="opacity-60 text-white  ">EGYPT</p>
        </div>
        <div className="">
          <h1 className="text-xl font-bold "> Contact </h1>
          <p className="opacity-60    mt-4"> Email :</p>
          <p className="opacity-60 ">ahmedsolliman28@gmail.com</p>
          <p className="opacity-60    mt-4"> Phone :</p>
          <p className="opacity-60 ">01067643230</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
