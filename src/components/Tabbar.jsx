import React from "react";
import { MdAccountCircle } from "react-icons/md";
import { FiMapPin } from "react-icons/fi";
import { ImStatsBars } from "react-icons/im";

function Tabbar() {
  return (
    <div className="w-full flex justify-center md:justify-end items-center h-24 sticky">
      <div className="sticky right-20 bottom-0 w-16 h-16 drop-shadow bg-green-700 md:flex justify-evenly md:justify-center items-center gap-4 rounded-full hidden">
        <div></div>
      </div>
      <div className="flex gap-4 md:hidden">
        <div className="border-2 bg-[#75B657] hover:bg-white sticky top-0 inset-x-0 h-16 border-black py-4 px-6 rounded-lg">
          <a href="/maps">
            <FiMapPin
              className="
     text-3xl text-white hover:text-[#75B657]"
            />
          </a>
        </div>
        <div className="border-2 bg-[#75B657] hover:bg-white sticky top-0 inset-x-0 h-16 border-black py-4 px-6 rounded-lg">
          <a href="/">
            <MdAccountCircle
              className="
     text-3xl text-white hover:text-[#75B657]"
            />
          </a>
        </div>
        <div className="border-2 bg-[#75B657] hover:bg-white sticky top-0 inset-x-0 h-16 border-black py-4 px-6 rounded-lg">
          <a href="/stats">
            <ImStatsBars
              className="
     text-3xl text-white hover:text-[#75B657] w-full"
            />
          </a>
        </div>
      </div>
    </div>
  );
}
export default Tabbar;
