import { motion } from "framer-motion";

function CalendarModal({ handleClose }) {
  return (
    <div
      id="calendarModal"
      className="w-full absolute top-0 h-full bg-black bg-opacity-30 bg-blur-10 px-2 z-20 flex justify-center items-center"
    >
      <div className="max-w-[600px] h-[96%] container drop-shadow-2xl rounded-lg text-white bg-grean border-white border-4">
        <motion.section className="h-full w-full flex flex-col items-center  justify-center z-[100] py-4">
          <header className="w-full flex gap-2 justify-start items-center pl-12">
            <section className="text-8xl font-bold">3</section>
            <section className="h-full flex flex-col justify-end items-start pb-4">
              <div className="text-2xl font-bold">Pickups</div>
              <div>View Your Week Below ⬇️</div>
            </section>
          </header>
          <main className="w-[88%] max-w-[88%] h-[48rem] flex gap-2 overflow-x-scroll snap-proximity snap-x no-scroll">
            <section className="min-w-[88%] bg-slate-800 rounded-md snap-center shadow-xl py-4">
              <div className="container flex items-center justify-center gap-3">
                <div className="flex flex-col text-left">
                  <div className="text-4xl">Tuesday</div>
                  <div className="text-2xl">January</div>
                </div>
                <div className="text-6xl">
                  2<span className="text-sm">nd</span>
                </div>
              </div>
              <div>
                <div className="bg-white h-20"></div>
              </div>
            </section>
            <section className="min-w-[88%] bg-slate-800 rounded-md snap-center shadow-xl"></section>
            <section className="min-w-[88%] bg-slate-800 rounded-md snap-center shadow-xl"></section>
          </main>
          <footer className="w-full px-8">
            <div className="flex justify-end items-center">
              <ion-icon
                size="large"
                name="arrow-forward-circle-outline"
              ></ion-icon>
            </div>
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
          </footer>
        </motion.section>
      </div>
    </div>
  );
}

export default CalendarModal;
{
  /* <label htmlFor="start">Start date:</label>

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
          </div> */
}
