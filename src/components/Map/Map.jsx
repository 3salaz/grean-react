import {  useState } from "react";
import ReactMapGl, { Marker } from "react-map-gl";


function Map() {

  const [viewPort, setViewPort] = useState({
    center: [-122.433247, 37.742646], // starting position
    latitide: 37.742646,
    longitude: -122.433247,
    zoom: 11,
  });

  const bounds = [
    [-122.66336, 37.492987], // Southwest coordinates
    [-122.250481, 37.871651], // Northeast coordinates
  ];
  // initialize map when component mounts
  return (
    <div id="map" className="h-[82svh] w-full">
      <ReactMapGl
        {...viewPort}
        onMove={(evt) => setViewPort(evt.viewState)}
        maxBounds={bounds} // Set the map's geographical boundaries.
        mapboxAccessToken="pk.eyJ1IjoiM3NhbGF6IiwiYSI6ImNsZG1xNjZ2aDBidnozb21kNTIxNTQ1a2wifQ.0JC6qoYDFC96znCbHh4kpQ"
        transitionDuration="30"
        className="h-full w-full overflow-hidden"
        mapStyle={"mapbox://styles/3salaz/cli6bc4e000m201rf0dfp3oyh"}
      >
        <Marker latitude={37.656487} longitude={-122.388322}>
          <div className="flex flex-col items-center justify-center rounded-full p-1 drop-shadow-xl border-grean text-grean border-2 hover:text-orange hover:border-orange slate-800 bg-white">
            <ion-icon
              className="w-full h-full flex items-center justify-center"
              name="pin-sharp"
              size="small"
            ></ion-icon>
          </div>
        </Marker>

        <Marker latitude={37.756487} longitude={-122.388322}>
          <div className="flex flex-col items-center justify-center rounded-full p-1 drop-shadow-xl border-grean text-grean border-2 hover:text-orange hover:border-orange slate-800 bg-white">
            <ion-icon
              className="w-full h-full flex items-center justify-center"
              name="pin-sharp"
              size="small"
            ></ion-icon>
          </div>
        </Marker>

        <Marker latitude={37.56487} longitude={-122.388322}>
          <div className="flex flex-col items-center justify-center rounded-full p-1 drop-shadow-xl border-grean text-grean border-2 hover:text-orange hover:border-orange slate-800 bg-white">
            <ion-icon
              className="w-full h-full flex items-center justify-center"
              name="pin-sharp"
              size="small"
            ></ion-icon>
          </div>
        </Marker>

        <Marker latitude={37.686487} longitude={-122.388322}>
          <div className="flex flex-col items-center justify-center rounded-full p-1 drop-shadow-xl border-grean text-grean border-2 hover:text-orange hover:border-orange slate-800 bg-white">
            <ion-icon
              className="w-full h-full flex items-center justify-center"
              name="pin-sharp"
              size="small"
            ></ion-icon>
          </div>
        </Marker>

        <Marker latitude={37.756487} longitude={-122.388322}>
          <div className="flex flex-col items-center justify-center rounded-full p-1 drop-shadow-xl border-grean text-grean border-2 hover:text-orange hover:border-orange slate-800 bg-white">
            <ion-icon
              className="w-full h-full flex items-center justify-center"
              name="pin-sharp"
              size="small"
            ></ion-icon>
          </div>
        </Marker>

        <Marker latitude={37.756487} longitude={-122.388322}>
          <div className="flex flex-col items-center justify-center rounded-full p-1 drop-shadow-xl border-grean text-grean border-2 hover:text-orange hover:border-orange slate-800 bg-white">
            <ion-icon
              className="w-full h-full flex items-center justify-center"
              name="pin-sharp"
              size="small"
            ></ion-icon>
          </div>
        </Marker>

        <Marker latitude={37.756487} longitude={-122.488322}>
          <div className="flex flex-col items-center justify-center rounded-full p-1 drop-shadow-xl border-grean text-grean border-2 hover:text-orange hover:border-orange slate-800 bg-white">
            <ion-icon
              className="w-full h-full flex items-center justify-center"
              name="pin-sharp"
              size="small"
            ></ion-icon>
          </div>
        </Marker>

        <Marker latitude={37.756487} longitude={-122.428322}>
          <div className="flex flex-col items-center justify-center rounded-full p-1 drop-shadow-xl border-grean text-grean border-2 hover:text-orange hover:border-orange slate-800 bg-white">
            <ion-icon
              className="w-full h-full flex items-center justify-center"
              name="pin-sharp"
              size="small"
            ></ion-icon>
          </div>
        </Marker>

        <Marker latitude={37.756487} longitude={-122.415322}>
          <div className="flex flex-col items-center justify-center rounded-full p-1 drop-shadow-xl border-grean text-grean border-2 hover:text-orange hover:border-orange slate-800 bg-white">
            <ion-icon
              className="w-full h-full flex items-center justify-center"
              name="pin-sharp"
              size="small"
            ></ion-icon>
          </div>
        </Marker>

        <Marker latitude={37.746487} longitude={-122.415322}>
          <div className="flex flex-col items-center justify-center rounded-full p-1 drop-shadow-xl border-grean text-grean border-2 hover:text-orange hover:border-orange slate-800 bg-white">
            <ion-icon
              className="w-full h-full flex items-center justify-center"
              name="pin-sharp"
              size="small"
            ></ion-icon>
          </div>
        </Marker>

        <Marker latitude={37.796487} longitude={-122.415322}>
          <div className="flex flex-col items-center justify-center rounded-full p-1 drop-shadow-xl border-grean text-grean border-2 hover:text-orange hover:border-orange slate-800 bg-white">
            <ion-icon
              className="w-full h-full flex items-center justify-center"
              name="pin-sharp"
              size="small"
            ></ion-icon>
          </div>
        </Marker>
      </ReactMapGl>
    </div>
  );
}

export default Map;
