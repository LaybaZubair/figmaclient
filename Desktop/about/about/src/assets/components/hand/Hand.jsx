import React from 'react'
import hand from '../hand/hand.jpeg'
import './Hand.css'
function Hand() {
  return (
   <>
   <div className='row'>
    <div className='top'>
        <h1 className='oo'>Our team of creatives</h1>
        <h3>Lorem ipsum dolor sit amet, consectetur <br /> adipiscing elit, sed do eiusmod tempor <br /> incididunt.</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do <br />eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim <br /> ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut <br /> aliquip ex ea commodo consequat. Duis aute irure dolor in  <br />reprehenderit in voluptate velit esse cillum dolore eu fugiat.</p>
    </div>
    <div>
    <img src={hand} alt="Description of the image" className='hand'/>
    </div>
    </div>
    </>
  )
}

export default Hand