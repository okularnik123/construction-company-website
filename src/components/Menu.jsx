import React, { useState } from "react";

const Menu = () => {
  const [defaultSite, setDefaultSite] = useState("Main");

  return (
    <ul className="lg:flex text-xl font-medium pt-4 hidden">
      <li
        className={`hover:text-primary cursor-pointer hover:text-[21px] transition-all ${
          defaultSite === "Main"
            ? "underline decoration-primary decoration-2 underline-offset-[5px]"
            : ""
        }`}
      >
        Strona główna
      </li>
      <div className="w-[2px] h-7 bg-black5 mx-3"></div>
      <li
        className={`hover:text-primary cursor-pointer hover:text-[21px] transition-all ${
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
      <div className="w-[2px] h-7 bg-black5 mx-3"></div>
      <li
        className={`hover:text-primary cursor-pointer hover:text-[21px] transition-all ${
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
  );
};

export default Menu;
