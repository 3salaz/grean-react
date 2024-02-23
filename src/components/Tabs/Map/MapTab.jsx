import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { usePickups } from "../../../context/PickupsContext";
import { useProfile } from "../../../context/ProfileContext"; // Import the useProfile hook
import Pickup from "./Pickup";
import Calendar from "./Calendar";
import Notifications from "./Notifications";

function MapTab() {
  const { visiblePickups } = usePickups();
  const { profile } = useProfile(); // Access the user's profile, including the userRole

  // Modal state management
  const [pickupOpen, setRequestPickupOpen] = useState(false);
  const [calendarOpen, setCalendarOpen] = useState(false);
  const [notificationsOpen, setNotificationsOpen] = useState(false);
  const [lastChecked, setLastChecked] = useState(new Date());

  // Modal handlers
  const closePickup = () => setRequestPickupOpen(false);
  const openPickup = () => setRequestPickupOpen(true);
  const closeCalendar = () => setCalendarOpen(false);
  const openCalendar = () => setCalendarOpen(true);
  const closeNotifications = () => setNotificationsOpen(false);
  const openNotifications = () => {
    setNotificationsOpen(true);
    setLastChecked(new Date());
  };

  useEffect(() => {
    // This effect is for handling updates based on visiblePickups
  }, [visiblePickups]);

  return (
    <div id="mapTab" className="bg-white">
      {/* Conditionally render the Pickup Modal based on userRole */}
      {profile?.userRole === "Business" && pickupOpen && (
        <Pickup modalOpen={pickupOpen} handleClose={closePickup} />
      )}

      {/* Notifications and Calendar Modals */}
      {notificationsOpen && (
        <Notifications
          modalOpen={notificationsOpen}
          handleClose={closeNotifications}
        />
      )}

      {calendarOpen && (
        <Calendar modalOpen={calendarOpen} handleClose={closeCalendar} />
      )}

      {/* UI for modals' trigger buttons */}
      <div className="absolute w-full bottom-10 z-10 flex items-center justify-center">
        {/* Container */}
        <div className="container mx-auto">
          <div className="max-w-[650px] flex justify-end m-auto rounded-md drop-shadow-xl">
            <div className="flex justify-center items-end w-full gap-4 px-5">
              {/* Conditional rendering for Pickup request button based on userRole */}
              {profile?.userRole === "Business" && (
                <div className="flex flex-col w-full basis-3/5 justify-between gap-6">
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={pickupOpen ? closePickup : openPickup}
                    className="flex items-center justify-center rounded-lg bg-grean text-yellow-200 border border-yellow-200 p-2 px-3 basis-4/5"
                  >
                    Request Pickup
                  </motion.button>
                </div>
              )}

              {profile?.userRole === "Business" ? (
                <div className="flex flex-col md:flex-row gap-2 items-center justify-center">
                  <motion.button
                    className="rounded-md bg-white order-2 md:order-1 bg-green-300 text-grean  aspect-square border border-yellow-200 flex items-center justify-center drop-shadow-xl w-14 h-14"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={calendarOpen ? closeCalendar : openCalendar}
                  >
                    {" "}
                    <ion-icon
                      size="large"
                      name="calendar-number-outline"
                    ></ion-icon>
                  </motion.button>

                  <motion.button
                    type="button"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={
                      pickupOpen ? closeNotifications : openNotifications
                    }
                    className="relative rounded-md order-1 md:order-2 p-1 w-14 h-14 bg-white text-red-500 focus:outline-none focus:ring-2 border border-yellow-200 focus:ring-blue-300 focus:ring-offset-2 flex items-center justify-center"
                  >
                    {" "}
                    <ion-icon
                      size="large"
                      name="notifications-outline"
                    ></ion-icon>
                    <span className="sr-only">View notifications</span>
                    <span className="text-white bg-red-500 rounded-full w-8 h-8 flex items-center justify-center absolute bottom-10 left-10">
                      {visiblePickups.length}
                    </span>
                  </motion.button>
                </div>
              ) : (
                <div className="flex flex-row gap-2 items-center justify-center">
                  <motion.button
                    className="rounded-md bg-white bg-green-300 text-grean  aspect-square border border-yellow-200 flex items-center justify-center drop-shadow-xl w-14 h-14"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={calendarOpen ? closeCalendar : openCalendar}
                  >
                    {" "}
                    <ion-icon
                      size="large"
                      name="calendar-number-outline"
                    ></ion-icon>
                  </motion.button>

                  <motion.button
                    type="button"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={
                      pickupOpen ? closeNotifications : openNotifications
                    }
                    className="relative rounded-md p-1 w-14 h-14 bg-white text-red-500 focus:outline-none focus:ring-2 border border-yellow-200 focus:ring-blue-300 focus:ring-offset-2 flex items-center justify-center"
                  >
                    {" "}
                    <ion-icon
                      size="large"
                      name="notifications-outline"
                    ></ion-icon>
                    <span className="sr-only">View notifications</span>
                    <span className="text-white bg-red-500 rounded-full w-8 h-8 flex items-center justify-center absolute bottom-10 left-10">
                      {visiblePickups.length}
                    </span>
                  </motion.button>
                </div>
              )}

              {/* Notifications and Calendar buttons */}

              {/* <div className="flex flex-col md:flex-row gap-2 items-center justify-center">
                <motion.button
                  className="rounded-md bg-white order-2 md:order-1 bg-green-300 text-grean  aspect-square border border-yellow-200 flex items-center justify-center drop-shadow-xl w-14 h-14"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={calendarOpen ? closeCalendar : openCalendar}
                >
                  {" "}
                  <ion-icon
                    size="large"
                    name="calendar-number-outline"
                  ></ion-icon>
                </motion.button>

                <motion.button
                  type="button"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={pickupOpen ? closeNotifications : openNotifications}
                  className="relative rounded-md order-1 md:order-2 p-1 w-14 h-14 bg-white text-red-500 focus:outline-none focus:ring-2 border border-yellow-200 focus:ring-blue-300 focus:ring-offset-2 flex items-center justify-center"
                >
                  {" "}
                  <ion-icon
                    size="large"
                    name="notifications-outline"
                  ></ion-icon>
                  <span className="sr-only">View notifications</span>
                  <span className="text-white bg-red-500 rounded-full w-8 h-8 flex items-center justify-center absolute bottom-10 left-10">
                    {visiblePickups.length}
                  </span>
                </motion.button>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MapTab;
