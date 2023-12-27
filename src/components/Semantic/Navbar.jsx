import logo from "../../logo.png";
import avatar from "../../avatar.svg";
import { motion, useCycle } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";
import { UserAuth } from "../../context/AuthContext";
import { useState } from "react";
import SignUpModal from "../Modals/SignUpModal";

function Navbar() {
  const { user, logOut } = UserAuth();
  const navigate = useNavigate();
  const [mobileNav, toggleMobileNav] = useCycle(false, true);
  const [accountNav, toggleAccountNav] = useCycle(false, true);
  const [signUpOpen, setSignUpOpen] = useState(false);
  const closeSignUp = () => setSignUpOpen(false);
  const openSignUp = () => setSignUpOpen(true);
  const handleLogout = async () => {
    try {
      await logOut();
      navigate("/");
      console.log("your are logged out");
      toggleAccountNav();
    } catch (e) {
      console.log(e.message);
    }
  };

  return (
    <nav id="navbar" className="bg-grean sticky top-0 inset-x-0 h-[8svh] z-50">
      {/* signUp modal */}
      {signUpOpen && (
        <SignUpModal
          modalOpen={signUpOpen}
          handleClose={closeSignUp}
        />
      )}

      {/* Nav container */}
      <div className="container mx-auto h-full px-4 flex items-center justify-between">
        {/* <!-- Mobile menu button--> */}
        <div className="absolute z-30 md:hidden">
          <button
            type="button"
            className="flex md:hidden flex-col space-y-1 items-center justify-center rounded-md p-2 text-gray-400 hover:bg-[#75B657]"
            aria-controls="mobile-menu"
            aria-expanded="false"
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
          </button>
        </div>
        {/* Navbar */}
        <div className="relative flex flex-1 items-center justify-center sm:items-stretch sm:justify-start sm:hidden md:flex">
          <div className="flex flex-shrink-0 items-center">
            <Link to="/">
              <img
                className="sm:block h-9 w-auto lg:hidden rounded-full"
                src={logo}
                alt="Company logo"
              ></img>
              <img
                className="hidden h-10 w-auto lg:block rounded-full"
                src={logo}
                alt="Company logo"
              ></img>
            </Link>
          </div>
          <div className="hidden sm:ml-6 sm:block">
            <div className="flex space-x-4">
              <Link
                to="/"
                className="bg-gray-900 text-white rounded-md px-3 py-2 text-sm font-medium"
                aria-current="page"
              >
                Home
              </Link>
              <Link
                to="/about"
                className="text-white hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium"
              >
                About
              </Link>
              <Link
                to="/services"
                className="text-white hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium"
              >
                Services
              </Link>
              <Link
                to="/contact"
                className="text-white hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium"
              >
                Contact
              </Link>
            </div>
          </div>
        </div>

        {/* Account Nav / Alerts */}
        <div className="absolute inset-y-0 right-2 flex gap-2 items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">

          {/* <!-- Profile dropdown --> */}
          {user ? (
            <div className="relative z-30">
              <motion.button
                type="button"
                className="flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                id="user-menu-button"
                aria-expanded="false"
                aria-haspopup="true"
                aria-controls="user-menu"
                onClick={() => toggleAccountNav()}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
              >
                <span className="sr-only">Open Users Menu</span>
                <img
                  className="h-10 w-10 rounded-full bg-white"
                  src={user.photoURL || avatar}
                  alt="users profile pic"
                ></img>
              </motion.button>
            </div>
          ) : (
            <motion.button
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
              className="bg-red-600 rounded-sm"
              onClick={() => (signUpOpen ? closeSignUp() : openSignUp())}
            >
              <div className="w-16 p-1 text-white  flex items-center justify-center font-bold text-sm">
                Sign Up
              </div>
            </motion.button>
          )}
        </div>
      </div>

      {mobileNav && (
        <motion.div
          variants={{
            open: {
              x: "0%",
            },
            closed: {
              x: "-100%",
            },
          }}
          initial="closed"
          animate="open"
          className="fixed inset-0 space-y-10 p-6 bg-[#75B657] mx-auto flex flex-col justify-center"
        >
          <div className="container mx-auto">
            <div className="text-center flex items-center">
              <Link to="/">
                <img className="w-32 rounded-full" src={logo} alt="logo"></img>
              </Link>
            </div>
            <div className="space-y-5 pt-16">
              <Link to="/">
                <div
                  href="#landing"
                  className="bg-gray-900 text-white block rounded-md px-3 py-2 text-base font-medium"
                  aria-current="page"
                >
                  Home
                </div>
              </Link>
              <Link
                to="/team"
                className="text-white hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium"
              >
                Team
              </Link>
              <Link
                to="/about"
                className="text-white hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium"
              >
                About
              </Link>

              <Link
                to="/contact"
                className="text-white hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium"
              >
                Contact
              </Link>
            </div>
          </div>

          <div className="w-full bg-white h-px"></div>
          <ul className="flex items-center justify-center gap-x-5">
            <li className="w-14 h-14 rounded-md bg-white">
              <a
                href="https://google.com"
                className="w-full h-full flex items-center justify-center"
              >
                <ion-icon
                  className="w-full h-full flex items-center justify-center"
                  name="logo-instagram"
                ></ion-icon>
              </a>
            </li>

            <li className="w-14 h-14 rounded-md bg-white">
              <a
                href="https://google.com"
                className="w-full h-full flex items-center justify-center"
              >
                <ion-icon
                  className="w-full h-full flex items-center justify-center"
                  name="logo-twitter"
                ></ion-icon>
              </a>
            </li>
            <li className="w-14 h-14 rounded-md bg-white">
              <a
                href="https://google.com"
                className="w-full h-full flex items-center justify-center"
              >
                <ion-icon
                  className="w-full h-full flex items-center justify-center"
                  name="logo-linkedin"
                ></ion-icon>
              </a>
            </li>
          </ul>
        </motion.div>
      )}

      {accountNav && (
        <motion.div
          variants={{
            open: {
              opacity: 1,
            },
            closed: {
              opacity: 0,
            },
          }}
          initial="closed"
          animate="open"
        >
          <div
            className="absolute top-14 right-2 z-30 mt-5 w-36 origin-top-right rounded-md bg-white py-1 px-2 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
            role="menu"
          >
            {/* <!-- Active: "bg-gray-100", Not Active: "" --> */}
            <Link
              to="/settings"
              className="block p-2 text-sm text-gray-700 w-full text-center"
              role="menuitem"
              tabIndex="-1"
              id="user-menu-item-1"
            >
              Settings
            </Link>
            <motion.button
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
              onClick={handleLogout}
              className="block p-2 text-sm text-gray-700 w-full text-center bg-red-500 rounded-md text-white"
              role="menuitem"
              tabIndex="-1"
              id="user-menu-item-2"
            >
              Sign out
            </motion.button>
          </div>
        </motion.div>
      )}
    </nav>
  );
}

export default Navbar;
