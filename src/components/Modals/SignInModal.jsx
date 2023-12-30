import { motion } from "framer-motion";
import Backdrop from "../Backdrop";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserAuth } from "../../context/AuthContext";
import { GoogleButton } from "react-google-button";
import toast, { Toaster } from "react-hot-toast";
const notify = () => toast("Here is your toast.");

function SignInModal({ handleClose }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const { signIn, googleSignIn } = UserAuth();
  const navigate = useNavigate();
  const handleGoogleSignIn = async () => {
    try {
      navigate("/profile");
      await googleSignIn();
      handleClose();
    } catch (error) {
      console.log(error);
    }
  };

  const handleSignIn = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await signIn(email, password);
      handleClose();
    } catch (e) {
      setError(e.message);
      console.log(setError);
      notify();
    }
  };

  useEffect((user, navigate) => {
    if (user != null) {
      navigate("/profile");
    }
  }, []);

  const dropIn = {
    hidden: {
      y: "-100vh",
      opacity: 0,
    },
    visible: {
      y: "0",
      opacity: 1,
      transition: {
        duration: 0.1,
        type: "spring",
        damping: 20,
        stiffness: 300,
      },
    },
    exit: {
      y: "100vh",
      opacity: 0,
    },
  };

  return (
    <Backdrop onClick={handleClose}>
      <motion.div
        onClick={(e) => e.stopPropagation()}
        variants={dropIn}
        initial="hidden"
        animate="visible"
        exit="exit"
        className="h-[92vh] w-full px-4"
      >
        <div className="flex w-full justify-center items-center">
          <div className="container h-full flex items-center justify-cente max-w-lg">
            <div className="container max-w-3xl mx-auto bg-white rounded-md md:drop-shadow-lg">
              <div className="w-full p-4 py-4 rounded-md">
                <div className="w-full flex items-end justify-end">
                  <motion.button
                    whileHover={{ scale: 1.2 }}
                    whileTap={{ scale: 0.9 }}
                    className="bg-red-500 stroke-slate-400 text-white rounded-md p-1 w-10 h-10 flex justify-center text-center items-center"
                    onClick={handleClose}
                  >
                    <ion-icon
                      className="stroke-slate-500"
                      size="large"
                      name="close-circle-outline"
                    ></ion-icon>
                  </motion.button>
                </div>
                <div className="mx-auto w-full">
                  <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-[#75B657]">
                    Login to your account
                  </h2>
                </div>
                <div className="mt-8">
                  <form className="space-y-4" onSubmit={handleSignIn}>
                    <label
                      id="email"
                      htmlFor="email"
                      className="block text-sm font-medium leading-6 text-grean text-left"
                    >
                      Email address
                    </label>
                    <div className="mt-2">
                      <input
                        onChange={(e) => setEmail(e.target.value)}
                        id="email"
                        name="email"
                        type="email"
                        autoComplete="email"
                        placeholder="Enter Your Email"
                        required
                        className="block w-full rounded-md border-1 px-2 py-1.5 text-slate-800 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      ></input>
                    </div>
                    <div className="flex items-center justify-between">
                      <label
                        id="password"
                        htmlFor="password"
                        className="block text-sm font-medium leading-6 text-grean"
                      >
                        Password
                      </label>
                      <div className="text-sm">
                        <a
                          href="https://google.com"
                          className="font-semibold text-slate-500 hover:text-slate-800"
                        >
                          Forgot password?
                        </a>
                      </div>
                    </div>
                    <div className="mt-2">
                      <input
                        onChange={(e) => setPassword(e.target.value)}
                        name="password"
                        type="password"
                        autoComplete="current-password"
                        required
                        className="block w-full rounded-md border-0 px-2 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      ></input>
                    </div>
                    <div className="w-full flex items-center justify-end">
                      <button
                        type="submit"
                        className="bg-[#75B657] rounded-xl w-24 p-1 text-lg text-white"
                      >
                        Login
                      </button>
                    </div>
                  </form>
                  <p className="mt-4 text-center text-sm text-gray-500">
                    Not a member?
                    <Link
                      to="/signup"
                      className="pl-1 font-semibold leading-6 text-[#75B657] hover:text-green-700"
                    >
                      Sign up
                    </Link>
                  </p>
                </div>
                <div className="w-full flex flex-col items-center justify-center gap-8 py-8">
                  <GoogleButton onClick={handleGoogleSignIn} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </Backdrop>
  );
}

export default SignInModal;
