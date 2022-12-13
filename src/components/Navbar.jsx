import React from "react";
import { features, company } from "../constants/index";
import logo from "../assets/logo.svg";
import arrowDown from "../assets/icon-arrow-down.svg";
import arrowUp from "../assets/icon-arrow-up.svg";
import menu from "../assets/icon-menu.svg";
import close from "../assets/icon-close-menu.svg";
import { useState } from "react";

const Navbar = () => {

  const [toggleDropdownOne, setToggleDropdownOne] = useState(true);
  const [toggleDropdownTwo, setToggleDropdownTwo] = useState(true);

  const handleDropdownOne = () => {
    setToggleDropdownOne(prev => !prev);
  };

  const handleDropdownTwo = () => {
    setToggleDropdownTwo(prev => !prev);
  };

  return (
    <nav className="flex justify-between px-12 py-8 relative">
      <div className="left flex items-center">
        <img
          className="w-[100px] h-[30px] mr-[60px] cursor-pointer"
          src={logo}
          alt="logo-image"
        />
        <ul className="hidden sm:flex space-x-10 text-gray transition-all hover:text-black">
          <li onClick={handleDropdownOne}>
            <a href="#">
              Features
              <img className="inline ml-2" src={arrowDown} alt="arrow-down" />
            </a>
          </li>
          <li onClick={handleDropdownTwo}>
            <a href="#">
              Company
              <img className="inline ml-2" src={arrowDown} alt="arrow-down" />
            </a>
          </li>
          <li>
            <a href="#">Careers</a>
          </li>
          <li>
            <a href="#">About</a>
          </li>
        </ul>

        <div className={`${toggleDropdownOne ? "hidden" : "block"} dropdown-one flex justify-center w-[200px] bg-white z-10 p-6 shadow-xl rounded-xl absolute top-[80px] left-[100px]`}>
          <ul>
            {features.map((feature, idx) => {
              return (
                <li
                  className="flex items-center justify-start space-x-5 space-y-3"
                  key={feature.id}
                >
                  <img src={feature.img} alt="icon" />
                  <a className="transition-all hover:translate-x-2" href="#">{feature.title}</a>
                </li>
              );
            })}
          </ul>
        </div>

        <div className={`${toggleDropdownTwo ? "hidden" : "block"} dropdown-two flex justify-center w-[150px] bg-white z-10 p-6 shadow-xl rounded-xl absolute top-[80px] left-[360px]`}>
          <ul>
            {company.map((item, idx) => {
              return (
                <li
                  className={`${
                    idx != company.length - 1 ? "mb-4" : "mb-0"
                  } flex items-center justify-start mb-4`}
                  key={item.id}
                >
                  <a className="transition-all hover:translate-x-2" href="#">{item.title}</a>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
      <div className="right flex text-gray space-x-10">
        <p className="cursor-pointer py-2 transition-all hover:text-black">
          Login
        </p>
        <button className="border border-black rounded-xl px-4 py-2 transition-all hover:bg-black hover:text-white">
          Register
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
