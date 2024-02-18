import { useEffect, useState } from "react";
import { useCycle, motion } from "framer-motion";
import AccountTab from "../components/Tabs/AccountTab";
import StatsTab from "../components/Tabs/StatsTab";
import MapTab from "../components/Tabs/MapTab";
import Map from "../components/Map";
import { collection, doc, getDoc, getDocs, setDoc } from "firebase/firestore";
import { db } from "../firebase";
import { UserAuth } from "../context/AuthContext";
import {toast} from "react-toastify";

function Profile() {
  const { user } = UserAuth();
  const MenuItems = [
    {
      name: "Account",
      icon: "person-circle-outline",
      dis: "translate-x-[-4rem]",
    },
    {
      name: "Map",
      icon: "navigate-circle-outline",
      dis: "translate-x-0",
    },
    {
      name: "Stats",
      icon: "stats-chart-outline",
      dis: "translate-x-16",
    },
  ];

  const [active, setActive] = useState(1);
  const toggleComponent = useCycle(false, true);

  function isEmpty(obj) {
    return Object.keys(obj).length === 0;
  }
  
  useEffect(() => {
    const userCheck = async () => {
      if (isEmpty(user)) {
        console.log("checking user...");
      } else {
        let userId = user.uid;
        let userRef = doc(db, "profiles", userId);
        let docSnap = await getDoc(userRef);
        console.log(`User: ${user.displayName} : Confirmed ✅`);
        if (docSnap.exists()) {
          try {
            await setDoc(userRef, {
              userID: user.uid || null,
              userName: user.displayName || null,
              userEmail: user.email || null,
              userHasBusiness: "",
              userStats: {
                latest: {
                  house: 0,
                  car: 0,
                  trash: 0,
                },
                overall: {
                  house: 0,
                  car: 0,
                  trash: 0,
                },
              },
            });
          } catch (e) {
            console.error(e);
          }
        }
      }
    };
    userCheck();
  }, [user]);

  const [pickups, setPickups] = useState([]);

  // Fetch pickups data from Firebase on component mount
  useEffect(() => {
    const fetchPickups = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "pickups"));
        const pickupsData = [];
        querySnapshot.forEach((doc) => {
          pickupsData.push({ id: doc.id, ...doc.data() });
        });
        setPickups(pickupsData);
      } catch (error) {
        console.error("Error fetching pickups:", error);
        toast.error("Error fetching pickups. Please try again later.");
      }
    };

    fetchPickups();
  }, []);

  useEffect(() => {
    if (pickups.length > 0) {
      const latestPickup = pickups[pickups.length - 1];
      toast.success(`New pickup added: ${latestPickup}`);
    }
  }, [pickups]);

  return (
    <section className="w-full">
      <Map />
      <>
        {(() => {
          switch (active) {
            case 0:
              return <AccountTab />;
            case 1:
              return <MapTab />;
            case 2:
              return <StatsTab />;
            default:
              return <></>;
          }
        })()}

        <footer className="bg-slate-800 z-20 px-4 bottom-0 fixed w-full rounded-t-lg border-t-[2px] border-t-white">
          <ul id="tabs" className="flex relative justify-center">
            <span
              className={`bg-grean duration-500 ${MenuItems[active].dis} border-4 border-white h-16 w-16 absolute -top-5 rounded-full`}
            >
              <span className="w-3.5 h-3.5 absolute top-4 -left-[18px] rounded-tr-[3px] shadow-myshadow1 bg-transparent"></span>
              <span className="w-3.5 h-3.5 absolute top-4 -right-[18px] rounded-tl-[5px] shadow-myshadow2 bg-transparent"></span>
            </span>
            {MenuItems.map((menu, i) => (
              <li key={i} className="w-16">
                <motion.div
                  className="flex flex-col text-center pt-6 text-white"
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.8 }}
                  onClick={() => setActive(i) && toggleComponent()}
                >
                  <span
                    className={`"text-3xl cursor-pointer duration-500" ${
                      i === active && "-mt-6"
                    }`}
                  >
                    <ion-icon size="large" name={menu.icon}></ion-icon>
                  </span>
                  <span
                    className={`${
                      active === i
                        ? "translate-y-2 duration-700 opacity-100"
                        : "opacity-0 translate-y-10"
                    }`}
                  >
                    {menu.name}
                  </span>
                </motion.div>
              </li>
            ))}
          </ul>
        </footer>
      </>
    </section>
  );
}

export default Profile;
