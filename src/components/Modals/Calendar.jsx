import { useEffect, useState } from "react";
import { db } from "../../firebase";
import { collection, getDocs } from "firebase/firestore";
import { motion } from "framer-motion";

function CalendarModal({ handleClose }) {
  const [numberOfPickups, setNumberOfPickups] = useState(0);
  const [pickups, setPickups] = useState([]); // Initialize as an empty array to hold pickup data

  useEffect(() => {
    const fetchPickupIds = async () => {
      const pickupsCollectionRef = collection(db, "pickups");
      try {
        const snapshot = await getDocs(pickupsCollectionRef);
        const numberOfPickups = snapshot.size;
        setNumberOfPickups(numberOfPickups);
        const pickupsData = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setPickups(pickupsData);
      } catch (error) {
        console.error("Error fetching pickups:", error);
        setNumberOfPickups(0);
      }
    };
    fetchPickupIds();
  }, []); // Empty dependency array ensures this effect runs only once after the component mounts

  return (
    <div
      id="calendarModal"
      className="w-full absolute top-0 h-full bg-black bg-opacity-90 bg-blur-10 px-2 z-20 flex justify-center items-center"
    >
      <div className="max-w-[600px] h-[96%] container drop-shadow-2xl rounded-lg text-slate bg-white border-grean border-4">
        <motion.section className="h-full w-full flex flex-col items-center  justify-center z-[100] py-4">
          <header className="w-full flex gap-2 justify-start items-center pl-12">
            <section className="text-8xl font-bold">
              {numberOfPickups === null ? "Loading..." : numberOfPickups}
            </section>
            <section className="h-full flex flex-col justify-end items-start pb-4">
              <div className="text-2xl font-bold">Pickups</div>
              <div>View Your Week Below ⬇️</div>
            </section>
          </header>
          <main className="w-[90%] max-w-[90%] h-[48rem] flex gap-2 overflow-x-scroll  snap-proximity snap-x no-scroll">
            {/* <section className="min-w-[90%] bg-slate-700 rounded-lg snap-center shadow-xl p-2">
              <div className="w-full flex items-center justify-between px-4 gap-3 h-[30%] text-white">
                <div className="flex flex-col text-left ">
                  <div className="text-5xl text-orange">Tuesday</div>
                  <div className="text-2xl">January</div>
                </div>
                <div className="text-8xl">
                  2<span className="text-lg">nd</span>
                </div>
              </div>
              <div className="w-full bg-white text-slate-800 rounded-md h-[60%]">
                <div className="text-center flex flex-col gap-4">
                  <div>
                    <div className="text-3xl">Erik Salazar</div>
                    <div className="text-2xl font-bold">3salaz</div>
                    <div className="text-lg">2624 3rd Street</div>
                    <div className="text-lg">San Francisco, Ca</div>
                  </div>

                  <div>
                    <div className="text-5xl font-bold">3:45pm</div>
                  </div>
                  <div>
                    <a
                      href="google.com"
                      className="text-xl text-orange underline"
                    >
                      Directions
                    </a>
                  </div>
                </div>
              </div>
            </section> */}
            {pickups.map((pickup) => (
              <section
                key={pickup.id}
                className="min-w-[90%] bg-slate-700 rounded-lg snap-center shadow-xl p-2"
              >
                <div className="w-full flex items-center justify-between px-4 gap-3 h-[30%] text-white">
                  <div className="flex flex-col text-left ">
                    <div className="text-5xl text-orange">Tuesday</div>
                    <div className="text-2xl">January</div>
                  </div>
                  <div className="text-xl">
                    {
                    pickup.pickupDate
                    }
                  </div>
                </div>
                <div className="w-full bg-white text-slate-800 rounded-md h-[60%]">
                  <div className="text-center flex flex-col gap-4">
                    <div>
                      <div className="text-3xl">{pickup.name}</div>
                      <div className="text-2xl font-bold">
                        {pickup.username}
                      </div>
                      <div className="text-lg">{pickup.address}</div>
                      <div className="text-lg">
                        {pickup.city || "San Francisco"}, {pickup.pickupState || "Ca"}
                      </div>
                    </div>
                    <div>
                      <div className="text-5xl font-bold">{pickup.pickupTime}</div>
                    </div>
                    <div>
                      <a
                        href={pickup.directions}
                        className="text-xl text-orange underline"
                      >
                        {pickup.directions}
                      </a>
                    </div>
                  </div>
                </div>
              </section>
            ))}
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
