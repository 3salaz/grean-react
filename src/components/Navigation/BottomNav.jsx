import { useState } from "react";
import { Link } from "react-router-dom";
function BottomNav() {
  const MenuItems = [
    {
      name: "Map",
      path: "/maps",
      icon: "navigate-circle-outline",
      dis: "translate-x-[-4rem]",
    },
    {
      name: "Profile",
      path: "/profile",
      icon: "person-circle-outline",
      dis: "translate-x-0",
    },
    {
      name: "Stats",
      path: "/stats",
      icon: "stats-chart-outline",
      dis: "translate-x-16",
    },
  ];
  const [active, setActive] = useState(0);
  return (
    <div className="bg-slate-800 max-h-[4.4rem] px-6 bottom-0 z-5 fixed w-full rounded-t-xl md:hidden border-t-[5px] border-t-white">
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
            <Link
              to={menu.path}
              className="flex flex-col text-center pt-6 text-white"
              onClick={() => setActive(i)}
            >
              <span
                className={`"text-xl cursor-pointer duration-500" ${
                  i === active && "-mt-6"
                }`}
              >
                <ion-icon className="text-xl" name={menu.icon}></ion-icon>
              </span>
              <span
                className={`${
                  active === i
                    ? "translate-y-4 duration-700 opacity-100"
                    : "opacity-0 translate-y-10"
                }`}
              >
                {menu.name}
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default BottomNav;
