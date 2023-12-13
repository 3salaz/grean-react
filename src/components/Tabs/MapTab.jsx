import { motion } from "framer-motion";
import RequestPickupModal from "../Modals/RequestPickupModal";
import CalendarModal from "../Modals/CalendarModal";

function MapTab() {
  return (
    <div>
      <CalendarModal />
      {/* <RequestPickupModal /> */}
      <div className="max-w-[350px] md:max-w-[600px] m-auto rounded-md drop-shadow-xl h-auto p-4">
        <div className="flex justify-end items-end w-full h-full gap-4 px-5">
          <div className="flex flex-col w-full justify-between gap-6">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="flex items-center justify-center rounded-full bg-grean text-yellow-200 border border-grean-300 p-2 px-3 basis-4/5 "
            >
              Request Pickup
            </motion.button>
          </div>

          <div className="flex flex-col gap-2 basis-1/5 items-center justify-center">
            <motion.button
              className="z-10 bg-grean text-yellow-200 rounded-full p-2 flex items-center justify-center drop-shadow-md"
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
            >
              <ion-icon size="large" name="list-outline"></ion-icon>
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
              className="rounded-md bg-white bg-green-300 p-2 px-3 aspect-square border border-yellow-200 flex items-center justify-center drop-shadow-xl"
            >
              <ion-icon size="large" name="calendar-number-outline"></ion-icon>
            </motion.button>
            <div></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MapTab;
