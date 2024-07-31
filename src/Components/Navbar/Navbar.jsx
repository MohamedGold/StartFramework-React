import React, { useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import navStyle from './Navbar.module.css';

export default function Navbar() {
  const [scrolled, setScroll] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navScroll = scrolled
    ? `bg-[#2c3e50] text-white border-gray-200 ${navStyle.transition} dark:bg-gray-900 py-1 fixed z-30 top-0 left-0 right-0`
    : `bg-[#2c3e50] text-white border-gray-200 ${navStyle.transition} dark:bg-gray-900 py-4 fixed z-30 top-0 left-0 right-0`;

  useEffect(() => {
    const handleScroll = () => {
      setScroll(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className={navScroll}>
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <Link
          to="/startFramework-react"
          className="flex items-center space-x-3 rtl:space-x-reverse"
        >
          <span className="self-center text-2xl font-[700] whitespace-nowrap dark:text-white text-[25px] md:text-[32px] uppercase">
            Start Framework
          </span>
        </Link>
        <button
          data-collapse-toggle="navbar-default"
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          aria-controls="navbar-default"
          aria-expanded={isMenuOpen}
          onClick={toggleMenu}
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-5 h-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>
        <div
          className={`w-full md:block md:w-auto ${
            isMenuOpen ? 'block' : 'hidden'
          }`}
          id="navbar-default"
        >
          <ul className="font-medium flex flex-col p-4 md:mx-0 md:p-0 mt-4 border rounded-lg md:flex-row md:space-x-4 rtl:space-x-reverse md:mt-0 md:border-0 dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            <li>
              <NavLink
                to="/startFramework-react/about"
                className="block py-2 px-3 text-white rounded-lg font-[700] uppercase"
                aria-current="page"
              >
                About
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/startFramework-react/portfolio"
                className="block py-2 px-3 text-white rounded-lg font-[700] uppercase"
              >
                Portfolio
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/startFramework-react/contact"
                className="block py-2 px-2 text-white rounded-lg font-[700] uppercase"
              >
                Contact
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
