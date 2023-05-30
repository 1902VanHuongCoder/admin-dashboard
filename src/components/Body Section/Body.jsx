import React from 'react'
import '../../sass/Body.css'
import Top from './Top Section/Top'
import Activity from './Activity Section/Activity'
import Listing from './Listing Section/Listing'
const Body = () => {
  return (
    <div className='body'>
        <Top />
        <div className='bottom flex'>
          <Activity />
          <Listing />
        </div>
    </div>
  )
}

export default Body