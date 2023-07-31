import { motion } from "framer-motion";

function MapPost({calandarOpen,openCalendar,closeCalendar}) {

  return (
    <div className="mx-auto max-w-[300px] gap-2 rounded-md drop-shadow-xl h-auto p-4 bg-opacity-90">

      <div className="flex gap-3 items-center justify-between w-full h-full">
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="flex items-center justify-center rounded-full bg-grean text-yellow-200 border border-grean-300 p-2 px-3 basis-4/5 "
        >
          Request Pickup
        </motion.button>
        <div className="flex flex-col gap-2 basis-1/5 items-center justify-center">
          <motion.button
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => (calandarOpen ? closeCalendar() : openCalendar())}
            className="rounded-md bg-white bg-green-300 p-2 px-3 aspect-square border border-yellow-500 flex items-center justify-center drop-shadow-xl"
          >
            <ion-icon size="large" name="calendar-number-outline"></ion-icon>
          </motion.button>
          <div></div>
        </div>
      </div>
    </div>
  );
}

export default MapPost;
