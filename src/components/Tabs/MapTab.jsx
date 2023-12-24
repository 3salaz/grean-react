import { motion } from "framer-motion";
import RequestPickupModal from "../Modals/RequestPickupModal";
import React, { useRef, useState } from "react";
import { Calendar } from "antd";
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
    <section className="w-full">
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
      <div className="absolute container mx-auto bottom-10 z-10">
        <div className="max-w-[650px] flex justify-end m-auto rounded-md drop-shadow-xl">
          <div className="flex justify-end items-end w-full gap-4 px-5">
            <div className="flex flex-col w-full justify-between gap-6">
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={() =>
                  requestPickupModalOpen
                    ? closePickupModal()
                    : openPickupModal()
                }
                className="flex items-center justify-center rounded-full bg-grean text-yellow-200 border border-grean-300 p-2 px-3 basis-4/5 "
              >
                Request Pickup
              </motion.button>
            </div>

            <div className="flex flex-col gap-2 basis-1/5 items-center justify-center">
              <motion.button
                className="z-10 bg-grean text-yellow-200 rounded-full p-2 flex items-center justify-center drop-shadow-lg shadow-white"
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
              >
                <ion-icon size="large" name="list-outline"></ion-icon>
              </motion.button>
              <motion.button
                className="rounded-md bg-white bg-green-300 p-2 px-3 aspect-square border border-yellow-200 flex items-center justify-center drop-shadow-xl"
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
                onClick={() =>
                  calendarModalOpen ? closeCalendarModal() : openCalendarModal()
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
    </section>
  );
}

export default MapTab;
