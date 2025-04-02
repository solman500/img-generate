import React from "react";

type Props = {
  heading: string;
};
const SectionHeading = ({ heading }: Props) => {
  return (
    <div className="w-[80%] m-auto">
      <h1 className="text-3xl font-bold  text-white ">{heading}</h1>
      <div className="text-sm sm:text-base md:text-lg font-medium mt-2 text-gray-200 ">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit.maiores ipsam
        voluptatum.
      </div>
    </div>
  );
};

export default SectionHeading;
