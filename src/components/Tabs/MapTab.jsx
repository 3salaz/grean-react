import { motion } from "framer-motion";
import { useState } from "react";
import Pickup from "../Modals/Pickup";
import Calendar from "../Modals/Calendar";
import Notifications from "../Modals/Notifications";

function MapTab() {
  // Request Pickup Modal
  const [requestPickupOpen, setRequestPickupOpen] = useState(false);
  const closePickup = () => setRequestPickupOpen(false);
  const openPickup = () => setRequestPickupOpen(true);

  // Open Calendar Modal
  const [calendarOpen, setCalendarOpen] = useState(false);
  const closeCalendar = () => setCalendarOpen(false);
  const openCalendarModal = () => setCalendarOpen(true);
  //     // Open Notification Modal
  const [notificationsOpen, setNotificationsOpen] = useState(false);
  const closeNotifications = () => setNotificationsOpen(false);
  const openNotifications = () => setNotificationsOpen(true);

  return (
    <div id="mapTab">
      {requestPickupModalOpen && (
        <Pickup
          modalOpen={requestPickupModalOpen}
          handleClose={closePickup}
        />
      )}
      {calendarOpen && (
        <Calendar
          modalOpen={calendarOpen}
          handleClose={closeCalendar}
        />
      )}
      {notificationsModalOpen && (
        <Notifications
          modalOpen={notificationOpen}
          handleClose={closeNotifications}
        />
      )}
      <div
        id="mapModals"
        className="absolute w-full bottom-10 z-10 flex items-center justify-center"
      >
        <div className="container mx-auto bg-white">
          <div className="max-w-[650px] flex justify-end m-auto rounded-md drop-shadow-xl">
            <div className="flex justify-end items-end w-full gap-4 px-5">
              <div className="flex flex-col w-full basis-4/5 justify-between gap-6">
                {/* Pickup Modal */}
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={() =>
                    requestPickupModalOpen
                      ? closePickupModal()
                      : openPickupModal()
                  }
                  className="flex items-center justify-center rounded-lg bg-grean text-yellow-200 border border-yellow-200 p-2 px-3 basis-4/5"
                >
                  Request Pickup
                </motion.button>
              </div>

              <div className="flex flex-col gap-2  basis-1/5 items-center justify-between">
                {/* Notification Modal */}
                <motion.button 
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                  type="button"
                  onClick={() =>
                    requestPickupModalOpen
                      ? closeNotificationsModal()
                      : openNotificationsModal()
                  }
                  className="rounded-md p-1 w-14 h-14 bg-white text-red-500 focus:outline-none focus:ring-2 border border-yellow-200 focus:ring-blue-300 focus:ring-offset-2 flex items-center justify-center"
                >
                  <span className="sr-only">View notifications</span>
                  <motion.span className="text-white bg-red-500 rounded-full z-20 w-6 h-6  absolute top-[-12px] right-9 flex items-center justify-center">
                  2
                  </motion.span>
                  <ion-icon
                    size="large"
                    name="notifications-outline"
                  ></ion-icon>
                </motion.button>
                {/* Calendar Modal */}
                <motion.button className="rounded-md bg-white bg-green-300 text-grean  aspect-square border border-yellow-200 flex items-center justify-center drop-shadow-xl w-14 h-14"
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={() =>
                    calendarModalOpen
                      ? closeCalendarModal()
                      : openCalendarModal()
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
