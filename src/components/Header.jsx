import React, { useState } from "react";
import logo from "../assets/shared/logo.svg";
import hamIcon from "../assets/shared/icon-hamburger.svg";
import closeIcon from "../assets/shared/icon-close.svg";

export default function Header({ selectedNavItem, onNav, isHamOpen, onOpenHamMenu }) {
  

  function handleHamManuOpen() {
    onOpenHamMenu(true);
    
  }
  function handleHamManuclose() {
    onOpenHamMenu(false);
  }

  function handleNavItemClick(itemName) {
    onNav(itemName)
    handleHamManuclose();
  }
  const navItems = [
    { name: "Home", itemNumber: "00" },
    { name: "Destination", itemNumber: "01" },
    { name: "Crew", itemNumber: "02" },
    { name: "Technology", itemNumber: "03" },
  ];
  return (
    <>
      <header className="flex justify-center items-center pt-8 max-xl:pt-0 max-sm:p-6">
        <div className="flex items-center w-1/2 relative max-xl:w-[15%] max-sm:w-1/2">
          <img
            src={logo}
            alt="logo"
            className="w-12 h-12 ml-16 max-xl:ml-10 max-sm:ml-0"
          />
          <hr className="ml-44 w-[80%] border-t z-10 border-white/25 absolute max-xl:hidden" />
        </div>
        <div className="w-1/2 bg-white/5 backdrop-blur-[80px] h-24 px-16 flex justify-end items-center max-xl:px-10 max-xl:w-[85%] max-sm:hidden">
        <ul className="flex justify-end items-center gap-12">
          {navItems.map((item) => (
            <li
              onClick={() => handleNavItemClick(item.name.toLowerCase())}
              className="flex justify-center items-center gap-3 font-barlow-condensed tracking-[2px] h-24 relative hover:cursor-pointer"
              key={item.itemNumber}
            >
              <span className="font-bold">{item.itemNumber}</span>
              {item.name}
              {selectedNavItem === item.name.toLowerCase() && <div className="w-[100%] bg-white h-[3px] absolute bottom-0"></div>}
            </li>
          ))}
        </ul>
      </div>
        <div className="hidden w-1/2 justify-end items-center max-sm:flex">
          <div className="hover:cursor-pointer" onClick={handleHamManuOpen}>
            <img src={hamIcon} alt="hamburger icon" className="w-6 h-6" />
          </div>
        </div>
      </header>
      <div
        className={`w-2/3 absolute z-20 top-0 bg-[#0B0D17]/15 backdrop-blur-[80px] h-screen pl-8 ${isHamOpen ? "right-0" : "-right-2/3"} transition-all duration-300`}
      >
        <div className="w-full py-8 pr-6 flex justify-end items-center">
          <img
            src={closeIcon}
            alt="Close Menu"
            className="w-6 h-6 hover:cursor-pointer"
            onClick={handleHamManuclose}
          />
        </div>
        <ul className="flex flex-col gap-8 w-full">
          {navItems.map((item) => (
            <li
              onClick={() => handleNavItemClick(item.name.toLowerCase())}
              className="flex justify-start items-center gap-3 font-barlow-condensed tracking-[2px] w-full relative hover:cursor-pointer"
              key={item.itemNumber}
            >
              <span className="font-bold">{item.itemNumber}</span>
              {item.name}
              {selectedNavItem === item.name.toLowerCase() && (
                <div className="w-[3px] bg-white h-full absolute right-0"></div>
              )}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
