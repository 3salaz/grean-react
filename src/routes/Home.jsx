import { UserAuth } from "../context/AuthContext";
import { motion } from "framer-motion";
import { useState } from "react";
import { Link } from "react-router-dom";
import AnimatedTextWord from "../components/AnimatedTextWord";
import SignInModal from "../components/Modals/SignInModal";
function Home() {
  const [signInModalOpen, setSignInModalOpen] = useState(false);
  const closeModal = () => setSignInModalOpen(false);
  const openModal = () => setSignInModalOpen(true);
  const { user } = UserAuth();
  return (
    <div className="w-full h-[92svh] bg-black bg-opacity-40 bg-blur-10 absolute top-0 flex items-center justify-center">
      <section className="h-full flex justify-center items-center">
        <img
          className="w-full h-full absolute object-cover blur-sm"
          src="https://firebasestorage.googleapis.com/v0/b/grean-de04f.appspot.com/o/photos%2Fpexels-melissa-sombrerero-12605435.jpg?alt=media&token=5a00d3f9-eb4a-43c6-a692-7a92f3a47f35"
          alt="Woman sitting atop a rock edge which is extending outwards over a river."
        ></img>
        <div className="h-full w-full absolute z-20 flex items-center justify-center text-center">
          <div className="w-full flex flex-col items-center justify-center gap-8">
            <div className="w-full">
              <AnimatedTextWord text="GREAN" />
            </div>
            {user ? (
              <Link to="/profile">
                <motion.button
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                  className="w-20 h-20 border-4 border-grean text-grean p-2 bg-white rounded-full flex items-center justify-center"
                >
                  Profile
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
    </div>
  );
}

export default Home;
