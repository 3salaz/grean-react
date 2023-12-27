import { motion } from "framer-motion";

function CalendarModal( {handleClose}) {
  return (
    <div id="calendarModal" className="w-full absolute top-0 h-full bg-black bg-opacity-90 bg-blur-10 px-2 z-20 flex justify-center items-center">
    <main className="bg-white max-w-[500px] container rounded-md drop-shadow-2xl">
      <motion.div className="rounded-lg  flex flex-col items-center justify-center z-[100]">
      <label htmlFor="start">Start date:</label>

      <input
        type="date"
        id="start"
        name="trip-start"
        value="2018-07-22"
        min="2018-01-01"
        max="2018-12-31"
      />
      <div className="bg-grean p-4 py-8 text-center">
        <div className="flex flex-col">
          <div>Pickup Time</div>
          <div className="font--bold">3:00pm</div>
          <div>
            <div className="text-xl">2624 3rd Street</div>
            <div>San Francisco, CA 94107</div>
          </div>
        </div>
        <button className="bg-orange px-3 rounded-full">Directions</button>
      </div>
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
    </motion.div>
    </main>
  </div>

  );
}

export default CalendarModal;
