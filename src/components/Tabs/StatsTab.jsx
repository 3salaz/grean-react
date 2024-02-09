import { useEffect, useState } from "react";
import { UserAuth } from "../../context/AuthContext";
import { motion } from "framer-motion";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../../firebase";

function StatsTab() {
  const { user } = UserAuth();
  const [overallCarData, setOverallCarData] = useState("");
  const [overallHouseData, setOverallHouseData] = useState("");
  const [overallTrashData, setOverallTrashData] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const documentId = user.uid; // Replace with your actual document ID
        const documentRef = doc(db, 'users', documentId);
        const documentSnapshot = await getDoc(documentRef);

        if (documentSnapshot.exists()) {
          const dataFromFirestore = { id: documentSnapshot.id, ...documentSnapshot.data() };
          let dataCar = dataFromFirestore["userStats"]["overall"]["car"]
          setOverallCarData(JSON.stringify(dataCar, null , 2))

          let dataTrash = dataFromFirestore["userStats"]["overall"]["trash"]
          setOverallTrashData(JSON.stringify(dataTrash, null , 2))

          let dataHouse = dataFromFirestore["userStats"]["overall"]["house"]
          setOverallHouseData(JSON.stringify(dataHouse, null , 2))


        } else {
          console.log('Document does not exist.');
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchData();
  });

  const setOverallStats = async () => {
    console.log("pressed current stats button");
  };
  const setCurrentStats = async () => {
    console.log("pressed current stats button");
  };

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
                        <h4 className="text-xl font-bold"><pre>{overallCarData || 1}</pre></h4>
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
                        <h4 className="text-xl font-bold">{overallHouseData}</h4>
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
                        <h4 className="text-xl font-bold">{overallTrashData}</h4>
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
                  onClick={setOverallStats}
                >
                  Name
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.8 }}
                  className={`bg-orange py-2 px-4 rounded-lg hover:border-2 hover:border-orange hover:text-orange hover:bg-white font-bold`}
                  onClick={setCurrentStats}
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
