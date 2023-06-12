import React, { useState } from 'react'
import ReactMapGl from 'react-map-gl';

function Maps() {
  const [viewPort,setViewPort] = useState({
    latitide: 37.763,
    longitude: -122.417,
    zoom: 14,
  })

  const bounds = [
    [-122.66336, 37.492987], // Southwest coordinates
    [-122.250481, 37.871651] // Northeast coordinates
    ];
  return (
    <div className='h-[70vh] bg-green-300 w-full flex items-center justify-center'>
      <ReactMapGl
      {...viewPort}
      maxBounds= {bounds} // Set the map's geographical boundaries.
      height="100%"
      width="100%"
      mapboxAccessToken='pk.eyJ1IjoiM3NhbGF6IiwiYSI6ImNsZG1xNjZ2aDBidnozb21kNTIxNTQ1a2wifQ.0JC6qoYDFC96znCbHh4kpQ'
      transitionDuration='100'
      mapStyle={'mapbox://styles/3salaz/cli6bc4e000m201rf0dfp3oyh'}
      >
      </ReactMapGl>
    </div>
  )
}

export default Maps