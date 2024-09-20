import React from 'react'
import hand from '../hand/hand.jpeg'
import './Hand.css'
function Hand() {
  return (
   <>
   <section className="hand">
   <div className='container ml-3 mt-3'>
    <div className='left m-0 w-100'>
        <h1 className='heading fs-13'>Our team of creatives</h1>
        <h3>Lorem ipsum dolor sit amet, consectetur <br /> adipiscing elit, sed do eiusmod tempor <br /> incididunt.</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do <br />eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim <br /> ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut <br /> aliquip ex ea commodo consequat. Duis aute irure dolor in  <br />reprehenderit in voluptate velit esse cillum dolore eu fugiat.</p>
    </div>
    <div className='right w-100'>
    <img src={hand} alt="Description of the image" className='image w-100'/>
    </div>
    </div>
    </section>
    </>
  )
}

export default Hand