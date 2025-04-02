  'use client'
  import React, { useState } from "react";
  import Nav from "./Nav";
  import MobileNav from "./MobileNav";
  const ResponsiveNavbar = () => {
    const [showNav, setShowNav] = useState(false);

    const openNave=() => {
      setShowNav(true);
    };

    const closeNav = () => {
      setShowNav(false);
    };


    return (
      <div className="">

        <Nav openNavFun={openNave}/>
        <MobileNav showNavState={showNav} closeNavFun={closeNav}/>
      </div>
    );
  };

  export default ResponsiveNavbar;
