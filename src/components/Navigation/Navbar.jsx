import React from "react";
import logo from "../../logo.png";
import { motion, useCycle } from "framer-motion";
import { BsInstagram, BsLinkedin } from "react-icons/bs";
import { AiFillTwitterSquare } from "react-icons/ai";

function Navbar() {
  const user = {
    name: "Erik",
    email: "test5@gmail.com",
    loggedIn: true,
  };
  const [mobileNav, toggleMobileNav] = useCycle(false, true);
  // toggleMobileNav(); | equals true
  return (
    <nav className="bg-[#75B657] sticky top-0 inset-x-0 h-16 z-10">
      <div className="container mx-auto h-full px-4 flex items-center justify-between">
        <div className="absolute z-10 md:hidden">
          {/* <!-- Mobile menu button--> */}
          <motion.button
            type="button"
            className="flex flex-col space-y-1 items-center justify-center rounded-md p-2 text-gray-400 hover:bg-[#75B657]"
            aria-controls="mobile-menu"
            aria-expanded="false"
            animate={mobileNav ? "open" : "closed"}
            onClick={() => toggleMobileNav()}
          >
            <motion.span
              variants={{
                closed: { rotate: 0, y: 0 },
                open: { rotate: 45, y: 5 },
              }}
              className="w-5 h-px bg-white block"
            ></motion.span>
            <motion.span
              variants={{
                closed: { opacity: 1 },
                open: { opacity: 0 },
              }}
              className="w-5 h-px bg-white block"
            ></motion.span>
            <motion.span
              variants={{
                closed: { rotate: 0, y: 0 },
                open: { rotate: -45, y: -5 },
              }}
              className="w-5 h-px bg-white block"
            ></motion.span>
          </motion.button>
        </div>
        <div className="relative flex flex-1 items-center justify-center sm:items-stretch sm:justify-start sm:hidden md:flex">
          <div className="flex flex-shrink-0 items-center">
            <a href="/">
            <img
              className="sm:block h-8 w-auto lg:hidden rounded-full"
              src={logo}
              alt="Your Company"
            ></img>
            <img
              className="hidden h-8 w-auto lg:block rounded-full"
              src={logo}
              alt="Your Company"
            ></img>

            </a>

          </div>
          <div className="hidden sm:ml-6 sm:block">
            <div className="flex space-x-4">
              {/* <!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" --> */}
              <a
                href="/"
                className="bg-gray-900 text-white rounded-md px-3 py-2 text-sm font-medium"
                aria-current="page"
              >
                Home
              </a>
              <a
                href="https://google.com"
                className="text-white hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium"
              >
                Team
              </a>
              <a
                href="https://google.com"
                className="text-white hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium"
              >
                About
              </a>
              <a
                href="https://google.com"
                className="text-white hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium"
              >
                Contact
              </a>
            </div>
          </div>
        </div>
        <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
          <button
            type="button"
            className="rounded-full p-1 bg-white text-red-500 hover:text-[#75B657] focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
          >
            <span className="sr-only">View notifications</span>
            <svg
              className="h-6 w-6 "
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0"
              />
            </svg>
          </button>

          {/* <!-- Profile dropdown --> */}
          {!user ? (
            <div className="relative ml-3 z-30">
              <div>
                <button
                  type="button"
                  className="flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                  id="user-menu-button"
                  aria-expanded="false"
                  aria-haspopup="true"
                >
                  <span className="sr-only">Open user menu</span>
                  <img
                    className="h-8 w-8 rounded-full"
                    src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                    alt=""
                  ></img>
                </button>
              </div>

              {/* <!--
                                  Dropdown menu, show/hide based on menu state.
  
                                  Entering: "transition ease-out duration-100"
                                  From: "transform opacity-0 scale-95"
                                  To: "transform opacity-100 scale-100"
                                  Leaving: "transition ease-in duration-75"
                                  From: "transform opacity-100 scale-100"
                                  To: "transform opacity-0 scale-95"
            --> */}
              <div
                className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
                role="menu"
                aria-orientation="vertical"
                aria-labelledby="user-menu-button"
                tabIndex="-1"
              >
                {/* <!-- Active: "bg-gray-100", Not Active: "" --> */}
                <a
                  href="https://google.com"
                  className="block px-4 py-2 text-sm text-gray-700"
                  role="menuitem"
                  tabIndex="-1"
                  id="user-menu-item-0"
                >
                  Your Profile
                </a>
                <a
                  href="https://google.com"
                  className="block px-4 py-2 text-sm text-gray-700"
                  role="menuitem"
                  tabIndex="-1"
                  id="user-menu-item-1"
                >
                  Settings
                </a>
                <a
                  href="https://google.com"
                  className="block px-4 py-2 text-sm text-gray-700"
                  role="menuitem"
                  tabIndex="-1"
                  id="user-menu-item-2"
                >
                  Sign out
                </a>
              </div>
            </div>
          ) : (
            <div className="ml-3 text-white">
              <a href="/login">Login</a>
            </div>
          )}
        </div>
      </div>

      { mobileNav &&  
        <motion.div variants={{
          open:{
            x:"0%"
          },
          closed:{
            x:"-100%"
          }
        }}
        initial="closed"
        animate="open"
        className="fixed inset-0 space-y-10 p-6 bg-[#75B657] mx-auto flex flex-col justify-center">
        <div className="container mx-auto">
          <ul className="space-y-5">
            <li>
              <a
                href="https://google.com"
                className="bg-gray-900 text-white block rounded-md px-3 py-2 text-base font-medium"
                aria-current="page"
              >
                Dashboard
              </a>
            </li>
            <li>
            <a
            href="https://google.com"
            className="text-white hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium"
          >
            Team
          </a>
            </li>
            <li>
            <a
            href="https://google.com"
            className="text-white hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium"
          >
            About
          </a>
            </li>

            <li>
            <a
            href="https://google.com"
            className="text-white hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium"
          >
            Calendar
          </a>
            </li>
          </ul>
        </div>

        <div className="w-full bg-white h-px"></div>
        <div className="">
          <ul className="flex items-center justify-center gap-x-5">
            <li className="w-14 h-14 rounded-md bg-white">
              <a href="https://google.com" className="w-full h-full flex items-center justify-center">
                <BsInstagram className="text-5xl"/>
              </a>
            </li>
            
            <li className="w-14 h-14 rounded-md bg-white">
              <a href="https://google.com" className="w-full h-full flex items-center justify-center">
                <AiFillTwitterSquare className="w-full h-full flex items-center justify-center"/>
              </a>
            </li>
            <li className="w-14 h-14 rounded-md bg-white">
              <a href="https://google.com" className="w-full h-full flex items-center justify-center">
                <BsLinkedin className="w-full h-full flex items-center justify-center"/>
              </a>
            </li>
          </ul>
        </div>
        </motion.div>
      }
    </nav>
  );
}

export default Navbar;
