import React, { useState } from "react";
import { IoCloseCircleOutline } from "react-icons/io5";

const Menu = ({ isMenuOpened, setMenuState }) => {
  const [defaultSite, setDefaultSite] = useState("Main");
  return (
    <>
      <div
        className={`w-[100vw] lg:w-auto z-50 lg:hidden bg-white fixed lg:block top-0 flex transition-all duration-700 justify-center  ${
          isMenuOpened ? "translate-y-0" : "translate-y-[-400px]"
        }`}
      >
        <IoCloseCircleOutline
          size={40}
          className="absolute lg:hidden top-0 right-0 cursor-pointer hover:text-red-600 transition-all duration-500 active:text-red-950"
          onClick={() => setMenuState(false)}
        />
        <ul className="lg:flex lg:text-xl font-medium lg:pt-4 transition-all z-50top-0 flex flex-col lg:flex-row lg:items-center text-center">
          <li
            className={`hover:text-primary cursor-pointer hover:lg:text-[21px] transition-all ${
              defaultSite === "Main"
                ? "underline decoration-primary decoration-2 underline-offset-[5px]"
                : ""
            }`}
          >
            Strona główna
          </li>
          <div className="w-[2px] h-7 bg-black5 mx-3 lg:block hidden"></div>
          <li
            className={`hover:text-primary cursor-pointer hover:lg:text-[21px] transition-all py-2 ${
              defaultSite === "About"
                ? "underline decoration-primary decoration-2 underline-offset-[5px]"
                : ""
            }`}
          >
            O nas
          </li>
          <div className="w-[2px] h-7 bg-black5 mx-3 lg:block hidden"></div>
          <li
            className={`hover:text-primary cursor-pointer hover:lg:text-[21px] transition-all ${
              defaultSite === "Offert"
                ? "underline decoration-primary decoration-2 underline-offset-[5px]"
                : ""
            }`}
          >
            Usługi
          </li>
          <div className="w-[2px] h-7 bg-black5 mx-3 lg:block hidden"></div>
          <li
            className={`hover:text-primary cursor-pointer hover:lg:text-[21px] transition-all py-2 ${
              defaultSite === "Projects"
                ? "underline decoration-primary decoration-2 underline-offset-[5px]"
                : ""
            }`}
          >
            Projekty
          </li>
          <div className="w-[2px] h-7 bg-black5 mx-3 lg:block hidden"></div>
          <li
            className={`hover:text-primary cursor-pointer hover:lg:text-[21px] transition-all ${
              defaultSite === "Contact"
                ? "underline decoration-primary decoration-2 underline-offset-[5px]"
                : ""
            }`}
          >
            Kontakt
          </li>
        </ul>
      </div>
      <div className="hidden lg:flex transition-all duration-700 justify-center">
        <IoCloseCircleOutline
          size={40}
          className="absolute lg:hidden top-0 right-0 cursor-pointer hover:text-red-600 transition-all duration-500 active:text-red-950"
          onClick={() => setMenuState(false)}
        />
        <ul className="flex text-xl font-medium pt-4 transition-all z-50top-0 flex-row items-center text-center">
          <li
            className={`hover:text-primary cursor-pointer hover:text-[21px] transition-all ${
              defaultSite === "Main"
                ? "underline decoration-primary decoration-2 underline-offset-[5px]"
                : ""
            }`}
          >
            Strona główna
          </li>
          <div className="w-[2px] h-7 bg-black5 mx-3 "></div>
          <li
            className={`hover:text-primary cursor-pointer hover:text-[21px] transition-all py-2 ${
              defaultSite === "About"
                ? "underline decoration-primary decoration-2 underline-offset-[5px]"
                : ""
            }`}
          >
            O nas
          </li>
          <div className="w-[2px] h-7 bg-black5 mx-3"></div>
          <li
            className={`hover:text-primary cursor-pointer hover:text-[21px] transition-all ${
              defaultSite === "Offert"
                ? "underline decoration-primary decoration-2 underline-offset-[5px]"
                : ""
            }`}
          >
            Usługi
          </li>
          <div className="w-[2px] h-7 bg-black5 mx-3 "></div>
          <li
            className={`hover:text-primary cursor-pointer hover:text-[21px] transition-all py-2 ${
              defaultSite === "Projects"
                ? "underline decoration-primary decoration-2 underline-offset-[5px]"
                : ""
            }`}
          >
            Projekty
          </li>
          <div className="w-[2px] h-7 bg-black5 mx-3"></div>
          <li
            className={`hover:text-primary cursor-pointer hover:text-[21px] transition-all ${
              defaultSite === "Contact"
                ? "underline decoration-primary decoration-2 underline-offset-[5px]"
                : ""
            }`}
          >
            Kontakt
          </li>
        </ul>
      </div>
    </>
  );
};

export default Menu;
