import { QuoteIcon } from "lucide-react";
import Image from "next/image";
import React from "react";

type PropsReview = {
  image: string;
  name: string;
  role: string;
};
const ReviewCard = ({ image, name, role }: PropsReview) => {
  return (
    <div className="flex items-center justify-center flex-col ">
      <QuoteIcon className="w-10 h-10 text-yellow-300" />
      <p className="text-center mt-4 text-white text-base md:text-lg lg:text-xl font-semibold text-opacity-80 ">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Expedita
        repellat accusantium sit quae numquam commodi necessitatibus sed, saepe
        fugaaccusantium sit quae numquam commodi necessitatibus sed, saepe
      </p>
      <div className="mt-8 ">
        <Image
          className="mx-auto mt-6 rounded-full"
          src={image}
          width={80}
          height={80}
          alt={name}
        />
        <div className="text-sm md:text-lg font-bold tetx-white text-center">
          {name} / {role}
        </div>
 </div>
    </div>
  );
};

export default ReviewCard;
