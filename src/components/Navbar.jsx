import React from "react";
import { features, company } from "../constants/index";
import logo from "../assets/logo.svg";
import arrowDown from "../assets/icon-arrow-down.svg";
import arrowUp from "../assets/icon-arrow-up.svg";
import todoIcon from "../assets/icon-todo.svg";
import calendarIcon from "../assets/icon-calendar.svg";
import remindersIcon from "../assets/icon-reminders.svg";
import planningIcon from "../assets/icon-planning.svg";
import menu from "../assets/icon-menu.svg";
import close from "../assets/icon-close-menu.svg";

const Navbar = () => {
  return (
    <nav className="flex justify-between px-12 py-8">
      <div className="left flex items-center">
        <img
          className="w-[100px] h-[30px] mr-[60px]"
          src={logo}
          alt="logo-image"
        />
        <ul className="hidden sm:flex space-x-10 text-gray transition-all hover:text-black">
          <li>
            <a href="#">
              Features
              <img className="inline ml-2" src={arrowDown} alt="arrow-down" />
            </a>
          </li>
          <li>
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
      </div>
      <div className="right flex text-gray space-x-10">
        <p className="cursor-pointer py-2 transition-all hover:text-black">Login</p>
        <button className="border border-black rounded-xl px-4 py-2 transition-all hover:bg-black hover:text-white">Register</button>
      </div>
    </nav>
  );
};

export default Navbar;
