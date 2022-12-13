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
    <main className="p-[150px] flex">
      <div className="left basis-1/2">
        <h1 className="text-7xl font-[700]">
          Make <br /> remote work
        </h1>
        <p className="text-gray py-10">
          Get your team in sync, no matter your location. <br />
          Streamline processes, create team rituals, and <br /> watch
          productivity soar.
        </p>
        <Button/>
        <div className="clients flex items-center space-x-10 mt-[100px]">
          <img className="w-[100px] cursor-pointer transition-all duration-500 hover:scale-150" src={client1} alt="databiz" />
          <img className="w-[100px] cursor-pointer transition-all duration-500 hover:scale-150" src={client2} alt="databiz" />
          <img className="w-[100px] cursor-pointer transition-all duration-500 hover:scale-150" src={client3} alt="databiz" />
          <img className="w-[100px] cursor-pointer transition-all duration-500 hover:scale-150" src={client4} alt="databiz" />
        </div>
      </div>
      <div className="right basis-1/2 -mt-[150px] flex items-center justify-end">
        <img className="h-[600px]" src={heroImgDesktop} alt="hero-image" />
      </div>
    </main>
  );
};

export default Hero;
