import React from 'react'
import SideNav from '../components/Navigation/SideNav'
import Cover from '../components/Cover'
// import SignUp from '../components/Auth/SignUp'

function Home() {
  return (
    <div className='flex'>
      <Cover/>
      <SideNav/>
    </div>
  )
}

export default Home