import React, { useState } from 'react'
import ReactMapGl, { Source, Layer } from 'react-map-gl';

function Maps() {
  const geojson = {
    type: 'FeatureCollection',
    features: [
      {type: 'Feature', geometry: {type: 'Point', coordinates: [-122.4, 37.8]}}
    ]
  };
  
  const layerStyle = {
    id: 'point',
    type: 'circle',
    paint: {
      'circle-radius': 10,
      'circle-color': '#007cbf'
    }
  };
  // const [newMarker,setNewMarker] = useState(null)
  const [viewPort,setViewPort] = useState({
    center: [-122.433247, 37.742646], // starting position
    latitide: 37.763,
    longitude: -122.417,
    zoom: 12,
    
  })


  const bounds = [
    [-122.66336, 37.492987], // Southwest coordinates
    [-122.250481, 37.871651] // Northeast coordinates
    ];
  return (
    <div className='h-screen bg-green-300 w-screen'>
      <ReactMapGl
      {...viewPort}
      onMove={evt => setViewPort(evt.viewState)}
      maxBounds= {bounds} // Set the map's geographical boundaries.
      height="100%"
      width="100%"
      mapboxAccessToken='pk.eyJ1IjoiM3NhbGF6IiwiYSI6ImNsZG1xNjZ2aDBidnozb21kNTIxNTQ1a2wifQ.0JC6qoYDFC96znCbHh4kpQ'
      transitionDuration='50'
      mapStyle={'mapbox://styles/3salaz/cli6bc4e000m201rf0dfp3oyh'}
      >
        <Source id="my-data" type="geojson" data={geojson}>
          <Layer {...layerStyle} />
        </Source>
      </ReactMapGl>
      <div className='relative bottom-0 w-40 h-10'>
          <div className=' rounded-s-2xl bg-white'></div>
        </div>
    </div>
  )
}

export default Maps