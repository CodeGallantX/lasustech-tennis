import Header from "./Header";
import { HiArrowLongDown } from "react-icons/hi2";

const Hero = () => {
  return (
    <>
    <Header />
    <section className="relative h-screen flex items-center justify-center text-white">
      <video
        autoPlay
        loop
        muted
        className="absolute top-0 left-0 w-full h-full object-cover"
      >
        <source src="/bg-video2.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-40"></div>

      <div className="z-10 text-center px-4 space-y-6">
        <h1 className="text-6xl md:text-[8rem] text-white font-bold">MAKE YOUR GAME</h1>
        <p className="text-lg md:text-xl">
          The academy offers everything you need to become the best
        </p>
        <a
          href="/membership-form"
          className="px-8 py-5 bg-[#aed638] text-white text-sm font-semibold hover:bg-white hover:text-[#aed638] transition"
        >
          JOIN OUR CLUB
        </a>
      </div>
        <a href="#WhatWeOffer" className="absolute left-1/2 -translate-x-1/2 bottom-5 text-4xl animate-bounce">
        <HiArrowLongDown />
        </a>
      
    </section>
    </>
  );
};

export default Hero;
