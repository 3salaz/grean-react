import { useEffect, useRef, useState } from "react";
import ReactMapGl, { Source, Layer, Popup, Marker } from "react-map-gl";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase";

function Map() {
  const [lng, setLng] = useState(-87.65);
  const [lat, setLat] = useState(41.84);
  const [zoom, setZoom] = useState(10);
  // const [showPopup, setShowPopup] = useState(true);
  const locationsRef = collection(db, "locations/");
  const [locations, setLocations] = useState([]);

  useEffect(()=> {
    getDocs(locationsRef)
      .then((snapshot) => {
      snapshot.docs.forEach((doc) => {
        // setLocations( doc => [...doc.data(),`${locations.length}`]);
        // locations.push({ ...doc.data(), id: doc.id });
      })
      // console.log(locations.length)
      })
      .catch((err) => {
        console.log(err.message);
      })
    },[locations])

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
    id: "1",
    type: "circle",
    paint: {
      "circle-radius": 10,
      "circle-color": "#FF7948",
    },
  };
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
  // initialize map when component mounts
  return (
    <div className="h-[83vh] w-full">
      <ReactMapGl
        {...viewPort}
        onMove={(evt) => setViewPort(evt.viewState)}
        maxBounds={bounds} // Set the map's geographical boundaries.
        mapboxAccessToken="pk.eyJ1IjoiM3NhbGF6IiwiYSI6ImNsZG1xNjZ2aDBidnozb21kNTIxNTQ1a2wifQ.0JC6qoYDFC96znCbHh4kpQ"
        transitionDuration="50"
        className="h-full w-full overflow-hidden"
        mapStyle={"mapbox://styles/3salaz/cli6bc4e000m201rf0dfp3oyh"}
      >
        <Source id="my-data" type="geojson" data={geojson}>
          <Layer {...layerStyle} />
        </Source>
        
        {/* {locations.map(location => (
          // <Marker key={location.key} latitude={location.latLong._lat} longitude={location.latLong._long}
          // ></Marker>
        ))} */}
        

        <Marker latitude={37.756487} longitude={-122.388322}>
          <div className="flex flex-col items-center justify-center bg-white rounded-lg border-grean border drop-shadow-md p-2">
            <ion-icon
              className="w-full h-full flex items-center justify-center"
              name="pin-sharp"
              size="large"
            ></ion-icon>
            <div className="font-bold">Company 1</div>
          </div>
        </Marker>
      </ReactMapGl>
    </div>
  );
}

export default Map;
