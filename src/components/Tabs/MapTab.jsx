import { useEffect, useState } from "react";
import { motion} from "framer-motion";
import { usePickups } from "../../context/PickupsContext";
import Pickup from "../Modals/Pickup";
import Calendar from "../Modals/Calendar";
import Notifications from "../Modals/Notifications";

function MapTab() {
  const { visiblePickups } = usePickups();
  // Request Pickup Modal
  const [pickupOpen, setRequestPickupOpen] = useState(false);
  const closePickup = () => setRequestPickupOpen(false);
  const openPickup = () => setRequestPickupOpen(true);

  // Open Calendar Modal
  const [calendarOpen, setCalendarOpen] = useState(false);
  const [lastChecked, setLastChecked] = useState(new Date()); // Stores the last time the user checked notifications
  const closeCalendar = () => setCalendarOpen(false);
  const openCalendar = () => setCalendarOpen(true);
  //     // Open Notification Modal
  const [notificationsOpen, setNotificationsOpen] = useState(false);
  const closeNotifications = () => setNotificationsOpen(false);
  const openNotifications = () => {
    setNotificationsOpen(true);
    // Update the last checked time in context or global state
    setLastChecked(new Date());
  };

  useEffect(() => {
    // This effect will run every time `visiblePickups` changes, ensuring the component reacts to updates.
    // You don't need to do anything inside if the sole purpose is to trigger a re-render.
    // However, if you have additional logic to execute when `visiblePickups` changes, it should go here.
  }, [visiblePickups]);

  return (
    <div id="mapTab">
      {pickupOpen && (
        <Pickup modalOpen={pickupOpen} handleClose={closePickup} />
      )}

      {notificationsOpen && (
        <Notifications
          modalOpen={notificationsOpen}
          handleClose={closeNotifications}
        />
      )}

      {calendarOpen && (
        <Calendar modalOpen={calendarOpen} handleClose={closeCalendar} />
      )}
      
      <div className="absolute w-full bottom-10 z-10 flex items-center justify-center">
        <div className="container mx-auto">
          <div className="max-w-[650px] flex justify-end m-auto rounded-md drop-shadow-xl">          
            <div className="flex justify-end items-end w-full gap-4 px-5">
              <div className="flex flex-col w-full basis-4/5 justify-between gap-6">
                {/* Pickup Modal */}
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={() => (pickupOpen ? closePickup() : openPickup())}
                  className="flex items-center justify-center rounded-lg bg-grean text-yellow-200 border border-yellow-200 p-2 px-3 basis-4/5"
                >
                  Request Pickup
                </motion.button>
              </div>

              <div className="flex flex-col gap-2  basis-1/5 items-center justify-between">
                {/* Notifications Modal */}
                <motion.button
                  type="button"
                  onClick={() =>
                    pickupOpen ? closeNotifications() : openNotifications()
                  }
                  className="rounded-md p-1 w-14 h-14 bg-white text-red-500 focus:outline-none focus:ring-2 border border-yellow-200 focus:ring-blue-300 focus:ring-offset-2 flex items-center justify-center"
                >
                  <span className="sr-only">View notifications</span>
                  <span className="text-white bg-red-500 rounded-full w-10 h-10 flex items-center justify-center">
                    {visiblePickups.length}
                  </span>
                  <ion-icon
                    size="large"
                    name="notifications-outline"
                  ></ion-icon>
                </motion.button>
                {/* Calendar Modal */}
                <motion.button
                  className="rounded-md bg-white bg-green-300 text-grean  aspect-square border border-yellow-200 flex items-center justify-center drop-shadow-xl w-14 h-14"
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={() =>
                    calendarOpen ? closeCalendar() : openCalendar()
                  }
                >
                  <ion-icon
                    size="large"
                    name="calendar-number-outline"
                  ></ion-icon>
                </motion.button>
              </div>

            </div>

          </div>
        </div>
      </div>
    </div>
  );
}

export default MapTab;
