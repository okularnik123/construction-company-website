import React from "react";
import Logo from "../assets/Logo.png";
import { SlEnvolopeLetter } from "react-icons/sl";
import { HiOutlinePhone } from "react-icons/hi";
import { FiMapPin } from "react-icons/fi";

function Footer() {
  return (
    <footer className="mt-10  border-primary border-t-[1px] px-8 pt-6">
      <div className="flex items-center flex-col md:flex-row">
        <div className="mb-4">
          <img src={Logo} className="h-16 md:h-20 lg:h-20 w-auto" />
          <p>Odezwij się do nas, a my zajmiemy się resztą</p>
        </div>
        <div className="flex flex-wrap justify-around w-full">
          <div className="mx-2">
            <h3 className="text-xl font-medium">Szybkie linki</h3>
            <ul>
              <li>
                <a>Strona główna</a>
              </li>
              <li>
                <a>O nas</a>
              </li>
              <li>
                <a>Usługi</a>
              </li>
              <li>
                <a>Projekty</a>
              </li>
              <li>
                <a>Kontakt</a>
              </li>
            </ul>
          </div>
          <div className="mx-2">
            <h3 className="text-xl font-medium">Szybkie linki</h3>
            <ul>
              <li>
                <a>FAQ</a>
              </li>
              <li>
                <a>Pomoc</a>
              </li>
            </ul>
          </div>
          <div className="mx-2">
            <h3 className="text-xl font-medium">Szybkie linki</h3>
            <ul>
              <li className="flex items-baseline">
                <SlEnvolopeLetter />
                <p className="ml-1">info@solidbuild.pl</p>
              </li>
              <li className="flex items-baseline">
                <HiOutlinePhone />
                <p className="ml-1">+48 546 659 956</p>
              </li>
              <li className="flex items-baseline">
                <FiMapPin />
                <p className="ml-1">Gostynin, Polska</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <p className="mt-2 text-black75">
        Copyright &copy; Wszelkie prawa zastrzeżone
      </p>
    </footer>
  );
}

export default Footer;
