import React, { useState } from "react";
import { menu, close } from "../assets";
import { navLinks } from "../constants";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);


  const toggleSidebar = () => {
    setToggle((prevState) => !prevState);
  };



  return (
    <nav className="w-full flex py-6 px-5 justify-between items-center navbar z-10">
      <ul className="list-none sm:flex hidden justify-end items-center flex-1 fixed right-8 z-10">
        {navLinks.map((nav, index) => (
                 <li
                 key={nav.id}
                 className={`font-Poppins font-normal cursor-pointer text-[16px] opacity-60 hover:border-b-2 hover:border-indigo-600 hover:opacity-100 ${
                    index === navLinks.length - 1 ? "mr-0" : "mr-10"
                  } text-white`}
                 
               >
            <a href={`${nav.link}`} target={`${nav.target}`}>
              {nav.title}
            </a>
          </li>
        ))}
      </ul>

      <div className="sm:hidden flex flex-1 justify-end items-center">
        <img
          src={toggle ? close : menu}
          alt="menu"
          className="w-[28px] h-[28px] object-contain cursor-pointer fixed top-0 z-10"
          onClick={toggleSidebar}
        />

        <div
          className={`${
            toggle ? "block" : "hidden"
          } bg-zinc-950 z-10 fixed top-0 left-0 h-full w-60 sidebar transition-transform transform translate-x-0 ease-in-out duration-300`}
        >
          <ul className="list-none flex flex-col h-full p-6 fixed">
            {navLinks.map((nav, index) => (
              <li
                key={nav.id}
                className={`font-Poppins font-normal cursor-pointer text-[16px] mb-4 text-white`}
              >
                <a href={`${nav.link}`}>{nav.title}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
