import React from "react";
import client1 from "../assets/client-databiz.svg";
import client2 from "../assets/client-audiophile.svg";
import client3 from "../assets/client-meet.svg";
import client4 from "../assets/client-maker.svg";
import heroImgDesktop from "../assets/image-hero-desktop.png";
import heroImgMobile from "../assets/image-hero-mobile.png";
import Button from "../constants/Button";


const Hero = () => {
  return (
    <main className="md:p-[150px] flex flex-col-reverse md:flex-row">
      <div className="left text-center md:text-left md:basis-1/2">
        <h1 className="hidden md:block text-7xl font-[700]">
          Make <br /> remote work
        </h1>
        <h1 className="md:hidden text-4xl font-[700] mt-10">
          Make remote work
        </h1>
        <p className="text-gray py-6 md:py-10">
          Get your team in sync, no matter your location. <br />
          Streamline processes, create team rituals, and <br /> watch
          productivity soar.
        </p>
        <Button/>
        <div className="clients flex items-center justify-between px-[20px] md:px-0 md:justify-start space-x-4 md:space-x-10 mt-[50px] md:mt-[100px]">
          <img className="w-[80px] cursor-pointer transition-all duration-500 hover:scale-150" src={client1} alt="databiz" />
          <img className="w-[80px] cursor-pointer transition-all duration-500 hover:scale-150" src={client2} alt="databiz" />
          <img className="w-[80px] cursor-pointer transition-all duration-500 hover:scale-150" src={client3} alt="databiz" />
          <img className="w-[80px] cursor-pointer transition-all duration-500 hover:scale-150" src={client4} alt="databiz" />
        </div>
      </div>
      <div className="right md:flex md:items-center md:justify-end md:basis-1/2 md:-mt-[150px]">
        <img className="hidden md:block md:h-[600px]" src={heroImgDesktop} alt="hero-image" />
        <img className="md:hidden w-[100%]" src={heroImgMobile} alt="hero-image" />
      </div>
    </main>
  );
};

export default Hero;
