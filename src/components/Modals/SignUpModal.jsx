import { motion } from "framer-motion";
import Backdrop from "../Backdrop";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserAuth } from "../../context/AuthContext";
import { GoogleButton } from "react-google-button";
import { toast } from "react-hot-toast";


function SignUpModal({ handleClose }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const { createUser, googleSignIn, user} = UserAuth();
  const navigate = useNavigate();
  useEffect(() => {
  }, [user]);

  const handleGoogleSignIn = async () => {
    try {
      await googleSignIn();
      navigate("/profile");
      handleClose();
    } catch (e) {
      console.log(error);
    }
  };

  const handleSignUp = async (e) => {
    e.preventDefault();
    setError("");
    try {
        await createUser(email, password);
        navigate('/profile');
        handleClose();
    } catch (e) {
      setError(e.message);
      toast(setError);
    }
  };

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
        className="h-screen w-full px-4"
      >
        <div className="flex w-full justify-center items-center">
          <div className="px-3 container h-[86vh] flex items-center justify-cente max-w-lg">
            <div className="container max-w-3xl mx-auto bg-white rounded-md md:drop-shadow-lg">
              <div className="w-full p-4 py-4 rounded-md">
                <div className="w-full flex items-end justify-end">
                  <motion.button
                    whileHover={{ scale: 1.2 }}
                    whileTap={{ scale: 0.9 }}
                    className="bg-red-500 stroke-slate-400 text-white rounded-xl p-1 w-8 h-8 flex justify-center text-center items-center"
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
                    Sign Up For Your Account
                  </h2>
                </div>
                <div className="mt-8">
                  <form className="space-y-4" onSubmit={handleSignUp}>
                    <label
                      id="email"
                      htmlFor="email"
                      className="block text-sm font-medium leading-6 text-[#75B657]"
                    >
                      Email address
                    </label>
                    <div className="mt-1">
                      <input
                        onChange={(e) => setEmail(e.target.value)}
                        id="email"
                        name="email"
                        type="email"
                        autoComplete="email"
                        placeholder="Enter Your Email"
                        required
                        className="block w-full rounded-md border-0 px-2 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      ></input>
                    </div>
                    <div className="flex items-center justify-between">
                      <label
                        id="password"
                        htmlFor="password"
                        placeholder="Enter Your Password"
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
                        Sign Up
                      </button>
                    </div>
                  </form>
                  <p className="mt-4 text-center text-sm text-gray-500">
                    Already a member?
                    <Link
                      to="/signup"
                      className="pl-1 font-semibold leading-6 text-[#75B657] hover:text-green-700"
                    >
                      Sign In
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

export default SignUpModal;
