import { useEffect, useState } from "react";
import { useCycle, motion } from "framer-motion";
import AccountTab from "../components/Tabs/AccountTab";
import StatsTab from "../components/Tabs/StatsTab";
import MapTab from "../components/Tabs/MapTab";
import Map from "../components/Map";
import {
  collection,
  doc,
  getDoc,
  getDocs,
  onSnapshot,
  setDoc,
} from "firebase/firestore";
import { db } from "../firebase";
import { UserAuth } from "../context/AuthContext";
import { toast } from "react-toastify";

function Profile() {
  const { user } = UserAuth();
  const [active, setActive] = useState(1);
  const [toggleComponent, cycleComponent] = useCycle(false, true);
  const [pickups, setPickups] = useState([]);
  const [pickupIds, setPickupIds] = useState(new Set());
  
  const MenuItems = [
    {
      name: "Account",
      icon: "person-circle-outline",
      dis: "translate-x-[-4rem]",
    },
    { name: "Map", icon: "navigate-circle-outline", dis: "translate-x-0" },
    { name: "Stats", icon: "stats-chart-outline", dis: "translate-x-16" },
  ];

  const isEmpty = (obj) => {
    return Object.keys(obj).length === 0;
  };

  useEffect(() => {
    const userCheck = async () => {
      if (!isEmpty(user)) {
        const userRef = doc(db, "profiles", user.uid);
        const docSnap = await getDoc(userRef);

        if (!docSnap.exists()) {
          try {
            await setDoc(userRef, {
              userID: user.uid,
              userName: user.displayName || "",
              userEmail: user.email || "",
              userHasBusiness: "",
              userStats: {
                latest: { house: 0, car: 0, trash: 0 },
                overall: { house: 0, car: 0, trash: 0 },
              },
            });
          } catch (error) {
            console.error("Error creating user profile:", error);
          }
        }
      }
    };

    userCheck();
  }, [user]);

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

  // Real-time listener for pickups
  useEffect(() => {
    const unsubscribe = onSnapshot(collection(db, "pickups"), (querySnapshot) => {
      const newPickupIds = new Set();
      querySnapshot.forEach((doc) => newPickupIds.add(doc.id));
  
      // Check for new pickups by comparing new IDs against the existing set
      const newPickupsAdded = Array.from(newPickupIds).some((id) => !pickupIds.has(id));
  
      if (newPickupsAdded) {
        // Trigger toast notification for new pickup
        toast.success("New pickup added!");
  
        // Update the set of pickup IDs
        setPickupIds(newPickupIds);
      }
  
    }, (error) => {
      console.error("Error listening to pickups updates:", error);
      toast.error("Error fetching pickups. Please try again later.");
    });
  
    return () => unsubscribe(); // Cleanup on unmount
  }, [pickupIds]);

  return (
    <section className="w-full">
      <Map />
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
                onClick={() => setActive(i) && cycleComponent()}
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
    </section>
  );
}

export default Profile;
