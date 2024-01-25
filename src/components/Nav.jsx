import React from "react";
import NikeLogo from "../assets/nike-logo.svg?react";
import { RxHamburgerMenu } from "react-icons/rx";

const ROUTES = ["Home", "About", "Services", "Pricing", "Contact"];

const Nav = () => {
  return (
    <nav className=" flex flex-wrap justify-between items-center ">
      {/* Logo  */}
      <a href="">
        <NikeLogo className="h-20 w-20" />
      </a>

      {/* Burger Button */}
      <button className=" rounded-lg hover:bg-gray-100 p-2 focus:ring-2 focus:ring-gray-200">
        <RxHamburgerMenu size={25} />
      </button>

      {/* Menu list */}
      <div className=" border border-gray-100 bg-gray-50 w-full text-lg rounded-lg p-4">
        <ul className=" bg-gray-50">
          {ROUTES.map((route, i) => {
            return (
              <li
                className={` rounded cursor-pointer px-3 py-2 ${i === 0 ? "bg-blue-500 text-white" : " hover:bg-gray-100"}`}
                key={route}
              >
                {route}
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
};

export default Nav;
