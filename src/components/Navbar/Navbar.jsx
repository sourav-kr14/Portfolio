import React, { useState } from "react";
import { BiSolidMoon } from "react-icons/bi";
import { FiMenu } from "react-icons/fi";
const navMenus = [
  {
    name: "Home",
    link: "/#home",
  },
  {
    name: "About",
    link: "/#about",
  },
  {
    name: "Services",
    link: "/#services",
  },
  {
    name: "Contact",
    link: "/#contact",
  },
];
const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };
  return (
    <>
      <nav className="bg-gray-50">
        <div className=" px-10 justify-between items-center flex py-3   ">
          <h1 className="text-3xl text-blue-600 font-bold">Sourav</h1>
          {/* Desktop Menu */}
          <div className="sm:flex">
            <ul className="flex items-center gap-4 cursor-pointer">
              {navMenus.map((navMenus) => (
                <li className=" hover:text-blue-400 hover:font-semibold">
                  <a
                    href={navMenus.link}
                    className="text-xl font-semibold px-2 py-4md:py-6 inline-block"
                  >
                    {" "}
                    {navMenus.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          {/* Mobile Menu */}
          <div className="block sm:hidden">
            <div className="flex items-center gap-4">
            <BiSolidMoon className="text-2xl cursor-pointer"></BiSolidMoon>
            <FiMenu onClick={toggleMenu} className="text-2xl cursor-pointer" />
            </div>
            {showMenu && (
              <div className="fixed top-16 bg-white shadow-md rounded-b-xl z-10 left-0 right-0 dark:bg-gray-900 dark:text-white" >
                <ul className="flex  flex-col items-center gap-4">
                  {navMenus.map((navMenus) => (
                    <li className="">
                      <a href={navMenus.link} className="text-xl font-semibold px-2 py-4 md:py-6 inline-block cursor-pointer">
                        {" "}
                        {navMenus.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
