import { useEffect, useRef, useState } from "react";
import { UserAuth } from "../../context/AuthContext";
import { motion } from "framer-motion";
import Backdrop from "../Backdrop";
function RequestPickupModal({ handleClose }) {
  const [date, setDate] = useState("");
  const dateInputRef = useRef(null);
  const handleChange = (e) => {
    setDate(e.target.value);
  };

  const { user } = UserAuth();
  return (
    <div id="requestPickupModal" className="w-full  absolute top-0 h-full bg-black bg-opacity-90 px-2 z-20 flex justify-center items-center">
      <main className="bg-white max-w-[500px] container rounded-md drop-shadow-2xl">
        <form className="w-full py-4 container flex flex-col items-center justify-center gap-3 h-full"
          action="submit"
        >
          <div className="text-lg text-center">Schedule A Pickup</div>
          <section className="gap-3">
            <input type="checkbox" id="location" name="location" />
            <label className="text-sm" htmlFor="location">
              {user.locationAddress || null}
            </label>
          </section>
          <section id="pickupDate" className="flex flex-col">
            <label className="text-center font-bold" htmlFor="pickup">
              Pickup Date
            </label>
            <input
              type="date"
              onChange={handleChange}
              ref={dateInputRef}
              id="pickup"
              name="pickup-date"
              min="2023-12-10"
            />
          </section>
          <section id="pickupTime" className="flex flex-col">
            <label className="text-center font-bold">Select the Time</label>
            <input type="time" />
          </section>
          <section className="flex justify-between gap-2 pt-4">
          <motion.button
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
            className="bg-grean text-white rounded-md justify-center text-center items-center"
            onClick={handleClose}
          >
            <div className="px-2">Schedule</div>
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
            className="bg-red-500 text-white rounded-md justify-center text-center items-center"
            onClick={handleClose}
          >
            <ion-icon
              className="stroke-slate-500 bg-red-500"
              size="large"
              name="close-circle-outline"
            ></ion-icon>
          </motion.button>
          </section>
        </form>
      </main>
    </div>
  );
}

export default RequestPickupModal;
