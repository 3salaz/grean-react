import React, { useState } from "react";
import Backdrop from "../Backdrop";
import { motion } from "framer-motion";

function RequestPickupModal() {
  
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
    <Backdrop>
      <motion.div
        onClick={(e) => e.stopPropagation()}
        variants={dropIn}
        initial="hidden"
        animate="visible"
        exit="exit"
        className="w-full px-4"
      >
      </motion.div>
    </Backdrop>
  );
}

export default RequestPickupModal;
