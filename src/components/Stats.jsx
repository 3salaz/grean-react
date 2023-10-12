import { motion } from "framer-motion";
function Stats() {
  return (
    <motion.div className="mx-auto max-w-[400px] gap-2 border-4 border-orange bg-white p-3 rounded-md drop-shadow-xl h-[500px]">
      <div className="flex flex-col items-center justify-center gap-3">
        <div className="bg-white flex flex-col items-center justify-center w-full rounded-md">
          <header className="flex items-center justify-center gap-3">
            <img
              className="rounded-full"
              alt="placeholder"
              src="https://placeholder.com/100x100"
            ></img>
            <h2 className="text-lg font-bold text-grean">Emporium Arcade | SF</h2>
          </header>
          <section className="flex items-center justify-center gap-4 py-4">
            <button className="bg-orange text-white px-4 p-2 rounded-lg">
              Latest
            </button>
            <button className="text-grean p-2 px-4">Overall</button>
          </section>
          <section className="w-full bg-orange py-2 rounded-md">
            <div className="flex w-full justify-evenly items-center text-white">
              <div className="flex items-center justify-center">
                <ion-icon size="large" name="home-outline"></ion-icon>
              </div>
              <h4 className="text-xl font-bold">473</h4>
              <button className="text-white flex items-center justify-center">
                <ion-icon
                  size="large"
                  name="information-circle-outline"
                ></ion-icon>
              </button>
            </div>
          </section>
        </div>
      </div>
    </motion.div>
  );
}

export default Stats;
