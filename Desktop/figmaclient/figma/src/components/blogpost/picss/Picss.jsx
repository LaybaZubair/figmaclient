import React from 'react'
import './Picss.css'
import pic1 from '../picss/pic1.webp'

import pic2 from '../picss/pic2.jpeg'
import pic3 from '../picss/pic3.webp'
function Picss() {
  return (

    <section className="picss">
    <div className='container'>
     
    <h2>What to read next</h2>
        {/* pic1 */}
        <div className='top' >
        <div className='bottom'>
        <img src={pic1} alt="Description of the pic" className='pic'/>
        <p>By John Doe   l   Aug 23, 2021 </p>pic
        <h3>A UX Case Study Creating <br />a Studious Environment <br /> for Students: </h3>
        <p>Duis aute irure dolor in reprehenderit in <br />voluptate velit esse cillum dolore eu fugiat <br /> nulla pariatur. Excepteur sint occaecat .</p>

        </div>
       {/* // pic2// */}
       <div className='bottom'>
        <img src={pic3} alt="Description of the pic" className='pic'/>
        <p>By John Doe   l   Aug 23, 2021 </p>
        <h3>A UX Case Study Creating <br />a Studious Environment <br /> for Students: </h3>
        <p>Duis aute irure dolor in reprehenderit in <br />voluptate velit esse cillum dolore eu fugiat <br /> nulla pariatur. Excepteur sint occaeca</p>

        </div>
        {/* pic3 */}
        <div className='bottom'>
        <img src={pic2} alt="Description of the pic" className='pic'/>
        <p>By John Doe   l   Aug 23, 2021 </p>
        <h3>A UX Case Study Creating <br />a Studious Environment <br /> for Students: </h3>
        <p>Duis aute irure dolor in reprehenderit in <br />voluptate velit esse cillum dolore eu fugiat <br /> nulla pariatur. Excepteur sint occaecat .</p>

        </div>
        </div>
    </div>
    </section>
  )
}

export default Picss