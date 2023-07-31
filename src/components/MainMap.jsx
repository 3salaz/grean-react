import { useState } from "react";
import ReactMapGl, { Source, Layer, Popup } from "react-map-gl";
import { useCycle, motion } from "framer-motion";

function MainMap() {
  const [showPopup, setShowPopup] = useState(true);
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
  const geojson = {
    type: "FeatureCollection",
    features: [
      {
        type: "Feature",
        geometry: { type: "Point", coordinates: [-122.4, 37.8] },
      },
    ],
  };

  const layerStyle = {
    id: "point",
    type: "circle",
    paint: {
      "circle-radius": 10,
      "circle-color": "#007cbf",
    },
  };
  // const [newMarker,setNewMarker] = useState(null)
  const [viewPort, setViewPort] = useState({
    center: [-122.433247, 37.742646], // starting position
    latitide: 37.763,
    longitude: -122.417,
    zoom: 12,
  });

  const bounds = [
    [-122.66336, 37.492987], // Southwest coordinates
    [-122.250481, 37.871651], // Northeast coordinates
  ];
  return (
    <div className="h-[82vh] w-full">
      <ReactMapGl
        {...viewPort}
        onMove={(evt) => setViewPort(evt.viewState)}
        maxBounds={bounds} // Set the map's geographical boundaries.
        mapboxAccessToken="pk.eyJ1IjoiM3NhbGF6IiwiYSI6ImNsZG1xNjZ2aDBidnozb21kNTIxNTQ1a2wifQ.0JC6qoYDFC96znCbHh4kpQ"
        transitionDuration="50"
        className="h-full w-full"
        mapStyle={"mapbox://styles/3salaz/cli6bc4e000m201rf0dfp3oyh"}
      >
        {showPopup && (
          <Popup
            className="drop-shadow-xl"
            longitude={-122.3900198}
            latitude={37.7566044}
            anchor="bottom"
            onClose={() => setShowPopup(false)}
          >
            <div className="text-[#75B657] flex flex-col gap-1">
              <div className="text-lg">Company Name</div>
              <div className="text-md">Address</div>
              {/* <div className="rounded w-20 text-center bg-blue-300"><a className="" href="">Directions</a></div> */}
            </div>
          </Popup>
        )}
        <Source id="my-data" type="geojson" data={geojson}>
          <Layer {...layerStyle} />
        </Source>
      </ReactMapGl>

      <div className="bg-slate-800 max-h-[5rem] px-6 bottom-0 z-5 fixed w-full rounded-t-xl border-t-[5px] border-t-white">
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
    </div>
  );
}

export default MainMap;
