import React, { useState } from "react";
import Logo from "../assets/Logo.png";
import { IoMdMenu } from "react-icons/io";
import { FaPhone } from "react-icons/fa6";
import Menu from "./Menu";

function Navbar() {
  return (
    <div className="flex justify-center">
      <div className="flex justify-between items-center px-8 w-full lg:p-0 lg:max-w-[1240px]">
        <img src={Logo} className="h-16 md:h-20 lg:h-20 w-auto" />

        <Menu />

        <div className="lg:flex hidden lg:items-center text-2xl pt-4 font-medium">
          <FaPhone color="#003366" />
          <p>+48 123 456 789</p>
        </div>
        <div className="p-4 lg:hidden mt-3">
          <IoMdMenu size={45} />
        </div>
      </div>
    </div>
  );
}

export default Navbar;
