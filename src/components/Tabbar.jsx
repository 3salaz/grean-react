import React from 'react'

function Tabbar() {
  return (
    <div className='w-full h-24 bg-white'>
        <div className='flex justify-evenly items-center gap-4 p-2'>
            <div className="border-2 border-black py-4 px-6 rounded-lg">Map</div>
            <div className="border-2 border-black py-4 px-6 rounded-lg">Account</div>
            <div className="border-2 border-black py-4 px-6 rounded-lg">Stats</div>
        </div>
    </div>
  )
}

export default Tabbar