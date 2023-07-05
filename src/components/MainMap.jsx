import { useState } from "react";
import ReactMapGl, { Source, Layer, Popup } from "react-map-gl";

function MainMap() {
  const [showPopup, setShowPopup] = useState(true);

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
    <div className="h-screen bg-green-300 w-screen">
      <ReactMapGl
        {...viewPort}
        onMove={(evt) => setViewPort(evt.viewState)}
        maxBounds={bounds} // Set the map's geographical boundaries.
        height="100%"
        width="100%"
        mapboxAccessToken="pk.eyJ1IjoiM3NhbGF6IiwiYSI6ImNsZG1xNjZ2aDBidnozb21kNTIxNTQ1a2wifQ.0JC6qoYDFC96znCbHh4kpQ"
        transitionDuration="50"
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
            <div className="text-blue-500 flex flex-col gap-1">
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
      <div className="relative bottom-0 w-40 h-10">
        <div className=" rounded-s-2xl bg-white"></div>
      </div>
    </div>
  );
}

export default MainMap;
