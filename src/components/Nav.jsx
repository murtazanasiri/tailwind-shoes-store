import { TbShoppingBag } from "react-icons/tb";
import React, { useState } from "react";
import NikeLogo from "../assets/nike-logo.svg?react";
import { RxHamburgerMenu } from "react-icons/rx";

const ROUTES = ["Home", "About", "Services", "Pricing", "Contact"];

const Nav = () => {
  const [isMobileMenuShow, setIsMobileMenuShown] = useState(false);
  return (
    <nav className=" flex flex-wrap justify-between items-center ">
      {/* Logo  */}
      <a href="">
        <NikeLogo className="h-20 w-20" />
      </a>

      {/* Burger Button */}
      <button
        onClick={() => setIsMobileMenuShown(!isMobileMenuShow)}
        className=" lg:hidden rounded-lg hover:bg-gray-100 p-2 focus:ring-2 focus:ring-gray-200"
      >
        <RxHamburgerMenu size={25} />
      </button>

      {/* Menu list */}
      <div
        className={`${isMobileMenuShow === false ? "hidden" : ""} w-full lg:w-auto lg:block  `}
      >
        <ul className=" lg:space-x-8 flex flex-col lg:flex-row border border-gray-100 lg:border-none bg-gray-50 lg:bg-transparent text-lg rounded-lg p-4">
          {ROUTES.map((route, i) => {
            return (
              <li
                className={` rounded cursor-pointer px-3 py-2 ${i === 0 ? "bg-blue-500 text-white lg:bg-transparent lg:text-blue-500" : " hover:bg-gray-100"}`}
                key={route}
              >
                {route}
              </li>
            );
          })}
        </ul>
      </div>
      {/* Cart button  */}
      <div className="fixed left-4 bottom-4 lg:static">
        <div className=" flex justify-center items-center h-12 w-12 rounded-full bg-white shadow-md">
          <TbShoppingBag />
        </div>
      </div>
    </nav>
  );
};

export default Nav;
