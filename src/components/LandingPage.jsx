import { useState } from 'react'
import { UserAuth } from "../context/AuthContext";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import AnimatedTextWord from "../components/AnimatedTextWord";
import SignInModal from "./SignIn";
import Background from "../assets/pexels-melissa-sombrerero-12605435.jpg";

function LandingPage() {
    const [signInModalOpen, setSignInModalOpen] = useState(false);
    const closeModal = () => setSignInModalOpen(false);
    const openModal = () => setSignInModalOpen(true);
    const { user } = UserAuth();
  return (
    <section className="h-full flex justify-center items-center">
    <img
      className="w-full h-full absolute object-cover blur-sm italic"
      src={Background}
      alt="Woman sitting atop a rock edge which is extending outwards over a river."
    ></img>
    <div className="h-full w-full absolute z-20 flex items-center justify-center text-center">
      <div className="w-full flex flex-col items-center justify-center">
        <div className="w-full">
          <AnimatedTextWord text="GREAN" />
        </div> 
        {user ? (
          <Link to="/account">
            <motion.button
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
              className="w-20 h-20 border-4 border-grean text-grean p-2 bg-white rounded-full flex items-center justify-center"
            >
              Account
            </motion.button>
          </Link>
        ) : (
          <motion.button
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
            className=""
            onClick={() => (signInModalOpen ? closeModal() : openModal())}
          >
            <div className="w-36 p-2 bg-white rounded-lg flex items-center justify-center">
              Sign In
            </div>
        </motion.button>
        )}
        {signInModalOpen && (
          <SignInModal modalOpen={signInModalOpen} handleClose={closeModal} />
        )}
      </div>
    </div>
  </section>
  )
}

export default LandingPage
