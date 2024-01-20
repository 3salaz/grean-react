import React from "react";
import { motion } from "framer-motion";

function AlertsModal({ handleClose }) {
  var links = document.querySelectorAll(".nlist ul li");
  links.forEach(function (element) {
    element.addEventListener("click", function (e) {
      // PreventDefault to prevent redirect
      e.preventDefault();
      links.forEach(function (element) {
        element.classList.remove("active");
      });
      this.classList.add("active");
    });
  });
  return (
    <div
      id="alertModal"
      className="w-full absolute top-0 h-full bg-black bg-opacity-20 bg-blur-10 px-2 z-20 flex justify-center items-center"
    >
      <div className="max-w-[600px] h-[96%] flex flex-col container drop-shadow-2xl rounded-lg text-slate bg-white border-red-400 border-4">
        <header className="bg-red-400 basis-1/6 flex flex-col gap-1 py-2">
          <div className="text-center text-xl font-bold text-white">
            Alerts
          </div>
          <div className="text-sm text-center text-grean bg-white container p-2 mx-auto">Approve, Decline or Be Reminded Later</div>
          
        </header>
        <main className="h-[90%]  flex flex-col basis-5/6 items-center justify-center">
          <ul className="n-list w-full basis-5/6 max-h-[100%] gap-3 flex flex-col overflow-scroll p-2">
            <li className="flex gap-2 flex-col bg-light py-2">
              <div className="flex justify-center items-center gap-3">
                <img
                  className="rounded-full"
                  src="https://placeholder.com/75"
                  alt="placeholder"
                ></img>
                <div className="">
                  <div className="font-bold">Erik Salazar</div>
                  <div className="text-sm text-gray">
                    2624 3rd Street, San Francisco
                  </div>
                </div>
              </div>
              <div className="flex justify-center items-center gap-1">
                <button className="px-2 text-grean">Accept</button>
                <button className="px-2 text-blue-400">Remind Me Later</button>
                <button className="px-2 text-red-500">Decline</button>
              </div>
            </li>
            <li className="flex gap-2 flex-col bg-light p-2">
              <div className="flex justify-center items-center gap-3">
                <img
                  className="rounded-full"
                  src="https://placeholder.com/75"
                  alt="placeholder"
                ></img>
                <div className="">
                  <div className="font-bold">Erik Salazar</div>
                  <div className="text-sm text-gray">
                    2624 3rd Street, San Francisco
                  </div>
                </div>
              </div>
              <div className="flex justify-center items-center gap-1">
                <button className="px-2 text-grean">Accept</button>
                <button className="px-2 text-blue-400">Remind Me Later</button>
                <button className="px-2 text-red-500">Decline</button>
              </div>
            </li>
            <li className="flex gap-2 flex-col bg-light p-2">
              <div className="flex justify-center items-center gap-3">
                <img
                  className="rounded-full"
                  src="https://placeholder.com/75"
                  alt="placeholder"
                ></img>
                <div className="">
                  <div className="font-bold">Erik Salazar</div>
                  <div className="text-sm text-gray">
                    2624 3rd Street, San Francisco
                  </div>
                </div>
              </div>
              <div className="flex justify-center items-center gap-1">
                <button className="px-2 text-grean">Accept</button>
                <button className="px-2 text-blue-400">Remind Me Later</button>
                <button className="px-2 text-red-500">Decline</button>
              </div>
            </li>
            <li className="flex gap-2 flex-col bg-light p-2">
              <div className="flex justify-center items-center gap-3">
                <img
                  className="rounded-full"
                  src="https://placeholder.com/75"
                  alt="placeholder"
                ></img>
                <div className="">
                  <div className="font-bold">Erik Salazar</div>
                  <div className="text-sm text-gray">
                    2624 3rd Street, San Francisco
                  </div>
                </div>
              </div>
              <div className="flex justify-center items-center gap-1">
                <button className="px-2 text-grean">Accept</button>
                <button className="px-2 text-blue-400">Remind Me Later</button>
                <button className="px-2 text-red-500">Decline</button>
              </div>
            </li>
            <li className="flex gap-2 flex-col bg-light p-2">
              <div className="flex justify-center items-center gap-3">
                <img
                  className="rounded-full"
                  src="https://placeholder.com/75"
                  alt="placeholder"
                ></img>
                <div className="">
                  <div className="font-bold">Erik Salazar</div>
                  <div className="text-sm text-gray">
                    2624 3rd Street, San Francisco
                  </div>
                </div>
              </div>
              <div className="flex justify-center items-center gap-1">
                <button className="px-2 text-grean">Accept</button>
                <button className="px-2 text-blue-400">Remind Me Later</button>
                <button className="px-2 text-red-500">Decline</button>
              </div>
            </li>
          </ul>
          <motion.section className="h-full w-full basis-1/6 flex flex-col items-center bg-red-400 border-2 border-red-400 rounded-bl-sm  drop-shadow-xl shadow-xl rounded-br-sm rounded-auto  justify-center z-[100]">
            <div className="flex justify-center items-center gap-2 py-2">
              <motion.button
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
                className="bg-grean text-white drop-shadow-lg rounded-md justify-center text-center items-center"
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
          </motion.section>
        </main>
      </div>
    </div>
  );
}

export default AlertsModal;
