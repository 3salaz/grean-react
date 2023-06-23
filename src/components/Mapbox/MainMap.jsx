import {useState} from 'react'
import ReactMapGl from 'react-map-gl';

function MainMap() {
    const [viewPort] = useState({
      latitide: 37.763,
      longitude: -122.417,
      zoom: 12,
      center: [-122.433247, 37.742646], // starting position
    })
  
    const bounds = [
      [-122.66336, 37.492987], // Southwest coordinates
      [-122.250481, 37.871651] // Northeast coordinates
      ];
    return (
      <div className='h-screen bg-green-300 w-full'>
        <ReactMapGl
        {...viewPort}
        maxBounds= {bounds} // Set the map's geographical boundaries.
        height="80%"
        width="100%"
        mapboxAccessToken='pk.eyJ1IjoiM3NhbGF6IiwiYSI6ImNsZG1xNjZ2aDBidnozb21kNTIxNTQ1a2wifQ.0JC6qoYDFC96znCbHh4kpQ'
        transitionDuration='500'
        mapStyle={'mapbox://styles/3salaz/cli6bc4e000m201rf0dfp3oyh'}
        >
        </ReactMapGl>
      </div>
    )
  }

export default MainMap