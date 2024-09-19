import React, { useState } from "react";
import Logo from "../assets/Logo.png";
import { IoMdMenu } from "react-icons/io";
import { FaPhone } from "react-icons/fa6";
import Menu from "./Menu";

function Navbar() {
  const [isMenuOpened, setMenuState] = useState(false);

  return (
    <div className="flex justify-center">
      <div className="flex justify-between items-center lg:px-8 w-full lg:p-0 lg:max-w-screen-2xl">
        <img src={Logo} className="h-16 md:h-20 lg:h-20 w-auto" />

        <Menu isMenuOpened={isMenuOpened} setMenuState={setMenuState} />

        <div className="lg:flex hidden lg:items-center text-2xl pt-4 font-medium">
          <FaPhone color="#003366" />
          <p>+48 123 456 789</p>
        </div>
        <div className=" mt-4">
          <IoMdMenu
            size={45}
            onClick={() => setMenuState(true)}
            className="cursor-pointer hover:text-primary lg:hidden transition-all duration-300 active:text-gray-800"
          />
        </div>
      </div>
    </div>
  );
}

export default Navbar;
