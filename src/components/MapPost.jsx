import { motion } from "framer-motion";
import RequestPickupModal from "./Modal/RequestPickupModal";

function MapPost() {
  return (
    <div className="max-w-[350px] m-auto rounded-md drop-shadow-xl h-auto p-4">
      {/* <RequestPickupModal/> */}
      <div className="flex items-center justify-between w-full h-full gap-4">
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
