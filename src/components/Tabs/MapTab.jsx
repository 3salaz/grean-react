import { motion } from "framer-motion";
import RequestPickupModal from "../Modals/RequestPickupModal";
import React, { useRef, useState } from "react";
import CalendarModal from "../Modals/CalendarModal";

function MapTab() {
  // Request Pickup Modal
  const [requestPickupModalOpen, setRequestPickupModalOpen] = useState(false);
  const closePickupModal = () => setRequestPickupModalOpen(false);
  const openPickupModal = () => setRequestPickupModalOpen(true);

  // Open Calendar Modal
  const [calendarModalOpen, setCalendarModalOpen] = useState(false);
  const closeCalendarModal = () => setCalendarModalOpen(false);
  const openCalendarModal = () => setCalendarModalOpen(true);
  //     // Request Pickup Modal
  // const [requestPickupModalOpen, setRequestPickupModalOpen] = useState(false);
  // const closePickupModal = () => setRequestPickupModalOpen(false);
  // const openPickupModal = () => setRequestPickupModalOpen(true);

  return (
    <div id="mapTab">
      {requestPickupModalOpen && (
        <RequestPickupModal
          modalOpen={requestPickupModalOpen}
          handleClose={closePickupModal}
        />
      )}
      {calendarModalOpen && (
        <CalendarModal
          modalOpen={calendarModalOpen}
          handleClose={closeCalendarModal}
        />
      )}
      <div
        id="mapModals"
        className="absolute w-full bottom-10 z-10 flex items-center justify-center"
      >
        <div className="container mx-auto">
          <div className="max-w-[650px] flex justify-end m-auto rounded-md drop-shadow-xl">
            <div className="flex justify-end items-end w-full gap-4 px-5">
              <div className="flex flex-col w-full basis-4/5 justify-between gap-6">
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

                  <motion.button
                    whileHover={{ scale: 1.2 }}
                    whileTap={{ scale: 0.9 }}
                    type="button"
                    className="rounded-md p-1 w-14 h-14 bg-white text-red-500 focus:outline-none focus:ring-2 border border-yellow-200 focus:ring-blue-300 focus:ring-offset-2 flex items-center justify-center"
                  >
                                      <span className="text-white bg-red-500 rounded-full w-6 h-6  absolute top-[-12px] right-9 flex items-center justify-center">
                    2
                  </span>
                    <span className="sr-only">View notifications</span>
                    <ion-icon
                      size="large"
                      name="notifications-outline"
                    ></ion-icon>
                  </motion.button>

                <motion.button
                  className="rounded-md bg-white bg-green-300 text-grean  aspect-square border border-yellow-200 flex items-center justify-center drop-shadow-xl w-14 h-14"
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
                <div></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MapTab;
