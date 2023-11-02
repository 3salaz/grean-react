import { Link } from "react-router-dom";
import { UserAuth } from "../context/AuthContext";
import { motion } from "framer-motion";
import { useState } from "react";
import Modal from "../components/Modals/SignInModal";
import AnimatedTextWord from "../components/AnimatedTextWord";
import Footer from "../components/Content/Footer";

function Home() {
  const [signInOpen, setSignInOpen] = useState(false);
  const close = () => setSignInOpen(false);
  const open = () => setSignInOpen(true);
  const { user } = UserAuth();
  return (
    <div className="snap-proximity snap-y overflow-y-scroll w-full">
      {/* Sign In Modal */}
      {signInOpen && <Modal modalOpen={signInOpen} handleClose={close} />}
      <section className="h-screen flex justify-center items-center bg-white snap-center">
        <img
          className="w-full h-full object-cover absolute blur-md"
          src="https://firebasestorage.googleapis.com/v0/b/grean-de04f.appspot.com/o/photos%2Fpexels-melissa-sombrerero-12605435.jpg?alt=media&token=5a00d3f9-eb4a-43c6-a692-7a92f3a47f35"
          alt="Woman sitting atop a rock edge which is extending outwards over a river."
        ></img>
        <div className="h-full w-full absolute z-20 flex items-center justify-center text-center">
          <div className="w-full flex flex-col items-center justify-center gap-8">
            <div className="w-full">
              <AnimatedTextWord text="Grean Global" />
            </div>
            {user ? (
              <Link
                // whileHover={{ scale: 1.2 }}
                // whileTap={{ scale: 0.9 }}
                to="/profile"
                className="w-20 h-20 border-4 border-green-600 p-2 bg-white rounded-full flex items-center justify-center"
              >
                Profile
              </Link>
            ) : (
              <motion.button
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
                className=""
                onClick={() => (signInOpen ? close() : open())}
              >
                <div className="text-xl w-full h-full">Sign In</div>
              </motion.button>
            )}
            
          </div>
        </div>
      </section>
      <section className="h-screen flex justify-center items-center bg-red-300 snap-center">
        {/* Services */}
        <div className="container mx-auto">
          <div className="grid grid-rows-1  md:grid-rows-3 md:grid-flow-col gap-4">
            <div className="row-span-3">01</div>
            <div className="col-span-2">02</div>
            <div className="row-span-2 col-span-2">03</div>
          </div>
        </div>
      </section>
      <section className="h-screen flex justify-center items-center bg-blue-300 snap-center">
        <h1>About</h1>
      </section>
      <section className="h-screen flex jusitfy-center items-center w-full snap-center mx-20">
        <Contact />
      </section>
      <Footer />
    </div>
  );
}

export default Home;
