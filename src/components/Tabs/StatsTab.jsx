import { motion } from "framer-motion";
function StatsTab() {
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
            <h2 className="text-lg font-bold text-grean">
              Emporium Arcade | SF
            </h2>
          </header>
          <section className="flex items-center justify-center gap-4 py-4">
            <button className="bg-orange text-white px-4 p-2 rounded-lg">
              Latest
            </button>
            <button className="text-grean p-2 px-4">Overall</button>
          </section>
          <div className="w-full flex flex-col gap-4">
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
            <section className="w-full bg-orange py-2 rounded-md">
              <div className="flex w-full justify-evenly items-center text-white">
                <div className="flex items-center justify-center">
                  <ion-icon size="large" name="car-outline"></ion-icon>
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
            <section className="w-full bg-orange py-2 rounded-md">
              <div className="flex w-full justify-evenly items-center text-white">
                <div className="flex items-center justify-center">
                  <ion-icon size="large" name="trash-outline"></ion-icon>
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
          <div>
            <section className="bg-grean">
              <p>Cubic feet of waste your recycling has diverted from landfills!</p>
              <p>Learn More: <a className="text-white" href='https://grean.global'>Grean Global</a></p>
            </section>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default StatsTab;
