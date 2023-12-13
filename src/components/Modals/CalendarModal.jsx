import { motion } from "framer-motion";
import { useState } from "react"
import Calendar from "react-calendar"
import "react-calendar/dist/Calendar.css"
import Backdrop from "../Backdrop";

function CalendarModal() {
  const [value, onChange] = useState(new Date())
  const month = value.getMonth()
  console.log(month)
  return (

    
    <motion.div className="rounded-lg  flex flex-col items-center justify-center z-[100]">
      <label for="start">Start date:</label>

<input type="date" id="start" name="trip-start" value="2018-07-22" min="2018-01-01" max="2018-12-31" />
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
    </motion.div>
  );
}

export default CalendarModal;
