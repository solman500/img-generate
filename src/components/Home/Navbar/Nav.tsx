import { Navlinks } from "@/components/constants/constant";
import { MenuIcon, Search, ShoppingCart } from "lucide-react";
import Link from "next/link";
import React, { useEffect, useState } from "react";

type Props = {
  openNavFun: () => void;
};

const Nav = ({ openNavFun }: Props) => {

const [navBg,setNavBg]=useState(false);

useEffect(()=>{
  const handler =()=>{
    if (window.scrollY >= 90) {
      setNavBg(true);
    } else {
      setNavBg(false);
    }

  };
  window.addEventListener("scroll", handler);
  return () => window.removeEventListener("scroll", handler);
},[])

const bgStyle=navBg?"bg-gray-900 shadow-md ":""

  return (
    <div className={` ${bgStyle} flex items-center justify-between h-[12vh] fixed z-[100] w-full mx-auto transition-all duration-200 text-white`}>
      <h1 className="text-3xl font-bold ml-8 md:ml-16">GeniImage</h1>
      <div className="md:flex items-center space-x-10 hidden">
        {Navlinks.map((link) => (
          <Link
            href={link.url}
            key={link.label}
            className="relative inline-block transition-all duration-300
                         after:absolute after:content-[''] after:w-full after:scale-0 
                         after:h-[2px] after:left-0 after:-bottom-1 
                         after:bg-yellow-400 after:transition-all after:duration-300
                         hover:after:scale-100"
          >
            {link.label}
          </Link>
        ))}
      </div>
      <div className="flex items-center space-x-5 md:space-x-5 text-white  mr-8 md:mr-16">
        <ShoppingCart className="cursor-pointer w-6 h-6 " />
        <Search className="cursor-pointer w-6 h-6 " />
        <MenuIcon
          onClick={openNavFun}
          className="cursor-pointer w-6 h-6  md:hidden"
        />
      </div>
    </div>
  );
};
export default Nav;
