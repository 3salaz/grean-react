import { useState, useMemo } from "react";
import ReactMapGl, {
  Marker,
  Popup,
  NavigationControl,
  FullscreenControl,
  ScaleControl,
  GeolocateControl,
} from "react-map-gl";

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

  const locations = [
    {
      businessName: "3salaz",
      city: "San Francisco",
      population: "8,175,133",
      busisnessLogo: "https://placeholder.com/350",
      state: "California",
      latitude: 37.756487,
      longitude: -122.428322,
      website: "https://google.com",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint, voluptatibus velit inventore accusamus optio quas corrupti obcaecati consequuntur ex similique rerum animi tempora quae, eos rem magni saepe itaque quos!"
    },
    {
      city: "San Francisco",
      population: "8,175,133",
      state: "California",
      latitude: 37.656487,
      longitude: -122.388322,
    },
    {
      city: "San Francisco",
      population: "8,175,133",
      state: "California",
      latitude: 37.616487,
      longitude: -122.388322,
    },
    {
      city: "San Francisco",
      population: "8,175,133",
      state: "California",
      latitude: 37.696487,
      longitude: -122.388322,
    },
  ];

  const [popupInfo, setPopupInfo] = useState(null);

  const pins = useMemo(
    () =>
      locations.map((location, index) => (
        <Marker
          key={`marker-${index}`}
          longitude={location.longitude}
          latitude={location.latitude}
          anchor="bottom"
          onClick={(e) => {
            // If we let the click event propagates to the map, it will immediately close the popup
            // with `closeOnClick: true`
            e.originalEvent.stopPropagation();
            setPopupInfo(location);
          }}
        >
          <div className="flex flex-col items-center justify-center rounded-full p-1 drop-shadow-xl border-grean text-grean border-2 hover:text-orange hover:border-orange slate-800 bg-white">
            <ion-icon
              className="w-full h-full flex items-center justify-center"
              name="pin-sharp"
              size="small"
            ></ion-icon>
          </div>
        </Marker>
      )),
    []
  );
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
        <GeolocateControl position="top-left" />
        <FullscreenControl position="top-left" />
        <NavigationControl position="top-left" />
        {/* <ScaleControl /> */}
        {pins}
        {popupInfo && (
          <Popup
            anchor="top"
            longitude={Number(popupInfo.longitude)}
            latitude={Number(popupInfo.latitude)}
            onClose={() => setPopupInfo(null)}
            className="border-grean border-b-4"
          >
            <div className="bg-white flex flex-col gap-1">
              <header>
                <div className="flex items-center justify-center">
                  <img className="w-full rounded-full basis-1/3" src={popupInfo.busisnessLogo} /> 
                </div>
 
                <div className="flex text-[16px] items-center justify-center">
                  <div className="text-2xl">{popupInfo.businessName}</div>
                </div>
                <div className="flex items-center justify-center">
                   <a className="text-grean font-bold basis-1/3 text-center" target="_new" href={popupInfo.website}>
                  Website
                  </a>
                </div>
              </header>
              <div id="stats" className="flex gap-1 text-white text-center">
                <div className="basis-1/3 bg-grean rounded-sm">
                  Trash: 12lbs
                </div>
                <div className="basis-1/3 bg-grean rounded-sm">Home: 12lbs</div>
                <div className="basis-1/3 bg-grean rounded-sm">Car: 12lbs</div>
              </div>
              <div>
                <div className="text-center">{popupInfo.description}</div>
              </div>
            </div>
          </Popup>
        )}
      </ReactMapGl>
    </div>
  );
}

export default Map;
