import { UserAuth } from "../../context/AuthContext";
import { motion, useCycle } from "framer-motion";

function StatsTab() {
  const { user } = UserAuth();
  const tabs = [
    {
      name: "Latest",
      color: "bg-orange",
    },
    {
      name: "Overall",
    },
  ];

  return (
    <section
      id="statsTab"
      className="w-full h-[82svh] bg-black bg-opacity-40 bg-blur-10 absolute top-0 flex items-center justify-center md:px-2"
    >
      {/* Card */}
      <main className="w-full container mx-auto max-w-[650px] overflow-scroll flex items-center justify-center rounded-md md:rounded-lg">
        <div className="w-full h-full z-20 items-center justify-center">
          <header className="w-full flex items-center h-[15%] justify-center gap-2 py-4 bg-grean">
            <img
              className="rounded-full w-[4rem]"
              alt="placeholder"
              src={user.photoURL}
            ></img>
            <div>
              <h2 className="text-xl font-bold text-grean">
                {user.displayName}
              </h2>
              <p className="text-sm bg-grean text-white font-bold rounded-xl">
                <span className="text-lg">User Email</span>
                <br></br>
                {user.email}
              </p>
            </div>
          </header>
          <div className="flex flex-col items-center h-[85%] justify-center bg-white text-white py-4">
            <section className="px-4 flex flex-col gap-3">
              <div className="h-80 max-h-80 overflow-scroll">
                <section className="px-4 flex flex-col gap-3">
                  <footer className="w-full flex justify-center items-center">
                    <p className="text-orange font-bold">
                      Learn More:{" "}
                      <a className="text-grean" href="https://grean.global">
                        Grean Global
                      </a>
                    </p>
                  </footer>
                  <div className="w-full flex flex-col gap-4">
                    <section className="w-full bg-orange py-2 rounded-md">
                      <div className="flex w-full justify-evenly items-center text-white">
                        <div className="flex items-center justify-center">
                          <ion-icon size="large" name="home-outline"></ion-icon>
                        </div>
                        <h4 className="text-xl font-bold">12</h4>
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
                        <h4 className="text-xl font-bold">12</h4>
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
                          <ion-icon
                            size="large"
                            name="trash-outline"
                          ></ion-icon>
                        </div>
                        <h4 className="text-xl font-bold">12</h4>
                        <button className="text-white flex items-center justify-center">
                          <ion-icon
                            size="large"
                            name="information-circle-outline"
                          ></ion-icon>
                        </button>
                      </div>
                    </section>
                  </div>
                  <section className="bg-grean text-center flex flex-col gap-3 rounded-md">
                    <div className="px-4">
                      <p className="text-8xl font-bold">16</p>
                      <p>
                        Cubic feet of waste your recycling has diverted from
                        landfills!
                      </p>
                    </div>
                  </section>
                </section>
              </div>
              <div
                id="tabButtons"
                className="flex justify-center gap-4 text-center"
              >
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.8 }}
                  className={`bg-grean py-2 px-4 rounded-lg hover:border-2 hover:border-grean hover:text-grean hover:bg-white font-bold`}
                  onClick=""
                >
                  Name
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.8 }}
                  className={`bg-orange py-2 px-4 rounded-lg hover:border-2 hover:border-orange hover:text-orange hover:bg-white font-bold`}
                  onClick=""
                >
                  Name
                </motion.button>
              </div>
            </section>
          </div>
        </div>
      </main>
    </section>
  );
}

export default StatsTab;
