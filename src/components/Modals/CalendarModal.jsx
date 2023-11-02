import { motion } from "framer-motion";

function CalendarModal() {
  return (
    <motion.div className="rounded-lg">
      <div className=" w-full">
        <div className="p-6 bg-grean">
          <div className="text-4xl text-center">October<span className="text-sm">2023</span></div>
          <div className="text-center">22nd-28th </div>
          <div className="absolute left-10">
            <ion-icon size="large" name="arrow-back-circle-outline"></ion-icon>
          </div>
          <div className="absolute right-10 h-full">
            arrow_back
          </div>
        </div>
        <div className="bg-white w-full flex items-center justify-between px-2">

          <div>Monday</div>
          <div>Tuesday</div>
          <div>Wednesday</div>
          <div>Thursday</div>
          <div>Friday</div>
          <div>Saturday</div>
        </div>
        <hr ></hr>
        <div className="bg-white w-full flex items-center justify-between px-2">
          <div className="flex flex-col border-1 border-black border px-2">
            22nd
          </div>
          <div>23rd</div>
          <div>24th</div>
          <div>25th</div>
          <div>26th</div>
          <div>27th</div>
          <div>28th</div>
          <section>

          </section>
        </div>
      </div>
    </motion.div>
  );
}

export default CalendarModal;
