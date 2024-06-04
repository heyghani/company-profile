"use client";

import React, { useState } from "react";

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <header className="bg-black p-4 text-white">
      <div>
        <div className="flex justify-between items-center">
          <h1 className="text-2xl">Ghani Corporation</h1>
          <div className="hidden md:block">
            <ul className="menu-list">
              <li className="un">
                <a href="#" className="hover:text-gray-300">
                  Home
                </a>
              </li>
              <li className="un">
                <a href="#" className="hover:text-gray-300">
                  About
                </a>
              </li>
              <li className="un">
                <a href="#" className="hover:text-gray-300">
                  Products
                </a>
              </li>
              <li className="un">
                <a href="#" className="hover:text-gray-300">
                  Contacts
                </a>
              </li>
            </ul>
          </div>
          <div className="block md:hidden">
            <button onClick={toggleMenu} className="focus:outline-none">
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
            </button>
          </div>
        </div>
        {/* mobile nav */}
        <div
          className={`navbar-overlay ${isOpen ? "block" : "hidden"}`}
          onClick={() => setIsOpen(false)}
        />
        <div className="relative">
          <div
            className={`mobile-navbar ${isOpen ? "right-0" : "-right-full"}`}
          >
            <div />
            {isOpen && (
              <button
                onClick={toggleMenu}
                className="float-right focus:outline-none"
              >
                <svg
                  className="w-6 h-6 "
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            )}
            <div className="my-12">
              <ul className="menu-list-mobile">
                <li>
                  <a href="#" className="hover:text-gray-300">
                    Home
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-gray-300">
                    About
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-gray-300">
                    Products
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-gray-300">
                    Contacts
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
