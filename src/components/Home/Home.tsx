"use client";
import React, { useEffect } from "react";
import Hero from "./Hero/Hero";
import RecentImage from "./RecentImage/RecentImage";
import About from "./About/About";
import Price from "./Price/Price";
import Review from "./Review/Review";
import Faq from "./Faq/Faq";
import AOS from "aos";
import "aos/dist/aos.css";

const Home = () => {
  useEffect(() => {
    const initAOS = async () => {
      await import("aos");
      AOS.init({
        duration: 1000,
        once: true,

        anchorPlacement: "top-bottom",

        easing: "ease",
      });
    };
    initAOS();
  }, []);

  return (
    <div className="overflow-hidden">
      <Hero />
      <RecentImage />
      <About />
      <Price />
      <Review />
      <Faq />
    </div>
  );
};

export default Home;
