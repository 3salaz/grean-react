import { useEffect, useState } from "react";
import { useCycle, motion } from "framer-motion";
import AccountTab from "../components/Tabs/AccountTab";
import StatsTab from "../components/Tabs/StatsTab";
import MapTab from "../components/Tabs/MapTab";
import Map from "../components/Map/Map";
import { doc, setDoc } from "firebase/firestore";
import { db } from "../firebase";
import { UserAuth } from "../context/AuthContext";

function Profile() {
  const { user } = UserAuth();
  useEffect(() => {
    console.log(user)
    const setUpUser = async () => {
        try {
          await setDoc(doc(db, "users", user.uid), {
            userID: user.uid|| null,
            userName: user.displayName || null,
            userEmail: user.email || null,
          });
        } catch (e) {
        console.log(e)
        }
    };
    if (user) {
      setUpUser();
    } else {
      console.log("no user")
    }
    
  }, [user]);
  const toggleComponent = useCycle(false, true);
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

  return (
    <div className="h-full overflow-hidden">
      <Map />
      <div className="bg-slate-800 max-h-[5rem] px-6 bottom-0 z-5 fixed w-full rounded-t-lg border-t-[5px] border-t-white">
        <ul className="flex relative justify-center">
          <span
            className={`bg-[#75B657] duration-500 ${MenuItems[active].dis} border-4 border-white h-16 w-16 absolute
         -top-5 rounded-full`}
          >
            <span className="w-3.5 h-3.5 absolute top-4 -left-[18px] rounded-tr-[10px] shadow-myshadow1 bg-transparent"></span>
            <span className="w-3.5 h-3.5 absolute top-4 -right-[18px] rounded-tl-[10px] shadow-myshadow2 bg-transparent"></span>
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
      </div>

      <div className="absolute left-0 bottom-[110px] px-4 w-full">
        {(() => {
          switch (active) {
            case 0:
              return <AccountTab />;
            case 1:
              return <MapTab/>;
            case 2:
              return <StatsTab />;
            default:
              return <></>;
          }
        })()}
      </div>
    </div>
  );
}

export default Profile;
