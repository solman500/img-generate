import { Navlinks } from '@/components/constants/constant'
import { XIcon } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

type Props ={
  
  showNavState:boolean;
  closeNavFun:()=>void;
}

const MobileNav = ({  showNavState, closeNavFun }:Props) => {
const navOpen= showNavState? "translate-y-0 ": "translate-y-[-200%]"

  
  return <div className="">
    <div className= {`text-white fixed justify-center  flex flex-col h-screen transform ${navOpen} transition-all duration-1000 w-full bg-gray-950  space-y-6 z-[1050] top-0 `}>
      {Navlinks.map((nav)=>{
        return <Link key={nav.id} href={nav.url} className="">
          <p className=" w-fit pb-1  text-xl ml-12  text-white transition-all duration-500 relative after:absolute after:content-[''] after:w-full after:scale-0 
                         after:h-[2px] after:left-0 after:-bottom-1 
                         after:bg-yellow-400 after:transition-all after:duration-300
                         hover:after:scale-100">{nav.label}</p>
        </Link>
      })}
      <XIcon onClick={closeNavFun} className='absolute top-[0.7rem] right-[1.4rem] sm-w-8 w-6 h-6 ' />
    </div>
  </div>

}

export default MobileNav