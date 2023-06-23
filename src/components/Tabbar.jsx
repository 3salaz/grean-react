import React from "react";
import { MdAccountCircle } from "react-icons/md";
import { FiMapPin } from "react-icons/fi";
import { ImStatsBars } from "react-icons/im";

function Tabbar() {
  return (
    <div className="w-full h-full flex justify-center md:justify-end items-center sticky">
      <div className="sticky right-20 bottom-0 w-10 h-10 drop-shadow bg-green-700 md:flex justify-evenly md:justify-center items-center gap-4 rounded-full hidden">
        <div></div>
      </div>
      <div className="md:hidden">
        <div className="flex gap-8 justify-center items-center">
          <div className="border-2 bg-[#75B657] hover:bg-white sticky top-0 inset-x-0 w-10 h-full border-black py-2 px-2 rounded-lg">
            <a href="/maps">
              <FiMapPin className="text-xl text-white hover:text-[#75B657]" />
            </a>
          </div>
          <div className="border-2 bg-[#75B657] hover:bg-white sticky top-0 inset-x-0 w-10 h-full border-black py-2 px-2 rounded-lg">
            <a href="/">
              <MdAccountCircle className="text-xl text-white hover:text-[#75B657]" />
            </a>
          </div>
          <div className="border-2 bg-[#75B657] hover:bg-white sticky top-0 inset-x-0 w-10 h-full border-black py-2 px-2 rounded-lg">
            <a href="/stats">
              <ImStatsBars className="text-xl text-white hover:text-[#75B657]"/>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Tabbar;
