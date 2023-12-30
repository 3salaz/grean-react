import React from "react";
import { motion } from "framer-motion";

function AlertsModal({ handleClose }) {
  return (
    <div
      id="alertModal"
      className="w-full absolute top-0 h-full bg-black bg-opacity-30 bg-blur-10 px-2 z-20 flex justify-center items-center"
    >
      <div className="max-w-[600px] h-[96%] container drop-shadow-2xl rounded-lg text-slate bg-white border-grean border-4">
        <motion.section className="h-full w-full flex flex-col items-center  justify-center z-[100] py-4">
          <div className="flex justify-center items-center gap-2 py-2">
            <motion.button
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
              className="bg-grean text-white rounded-md justify-center text-center items-center"
              onClick={handleClose}
            >
              <div className="flex items-center justify-center p-2 px-4 gap-1">
                <ion-icon size="large" name="list-circle-outline"></ion-icon>
                <div className="text-md font-bold">View List</div>
              </div>
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
              className="bg-red-500 flex text-white p-2 rounded-md justify-center text-center items-center"
              onClick={handleClose}
            >
              <ion-icon
                className="stroke-slate-500 bg-red-500"
                size="large"
                name="close-circle-outline"
              ></ion-icon>
            </motion.button>
          </div>
        </motion.section>
      </div>
    </div>
  );
}

export default AlertsModal;
