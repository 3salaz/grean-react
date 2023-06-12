import React from 'react';
import { MdAccountCircle } from 'react-icons/md';
import { FiMapPin } from 'react-icons/fi'
import { ImStatsBars } from 'react-icons/im'

function TabBar() {
  return (
    <div className='w-full flex justify-center items-center h-24 bg-white'>
      <div className='container flex justify-evenly md:justify-center items-center gap-4 p-2'>
            <div className="border-2 bg-green-400 border-black py-4 px-6 rounded-lg"><a href="/Maps"><FiMapPin className='
            text-3xl text-white'/></a></div>
            <div className="border-2 bg-green-400 border-black py-4 px-6 rounded-lg"><a href="/"><MdAccountCircle className='
            text-3xl text-white'/></a></div>
            <div className="border-2 bg-green-400 border-black py-4 px-6 rounded-lg"><a href="/Stats"><ImStatsBars className='
            text-3xl text-white'/></a></div>
      </div>
    </div>
  )
}

export default TabBar