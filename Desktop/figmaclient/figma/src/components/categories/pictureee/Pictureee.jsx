import React from 'react'
import pic1 from '../pictureee/pic1.webp'
import './Pictureee.css'
function Pictureee() {
  return (
  
    <> 
    <section className="picturee">
    <div className='container'>
  <div className='left m-0 w-100 '>
     <img src={pic1} alt="Description of the image" className='image'/>
   
 <div className="column ml-3 text-black ms-3">
     <p className=''>STARTUP</p>
     <h1 className='heading fs-3'> Design tips for designer that cover <br />everything you need</h1>
     <p className='paragraph '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis quos <br />perferendis fugit ipsa quaerat. Rem ipsam fugit omnis explicabo</p>

     </div>
    </div>

    {/* second card
    <div className='first'>
     <img src={pic1} alt="Description of the image" className='pic1'/>
   
    <div className='padd'>
     <p className='blue'>STARTUP</p>
     <h1 className='design'> Design tips for designer that cover <br />everything you need</h1>
     <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis quos <br />perferendis fugit ipsa quaerat. Rem ipsam fugit omnis explicabo</p>

    </div>
    </div>
    {/* 3erd card */}
    {/* <div className='first'>
     <img src={pic1} alt="Description of the image" className='pic1'/>
   
    <div className='padd'>
     <p className='blue'>STARTUP</p>
     <h1 className='design'> Design tips for designer that cover <br />everything you need</h1>
     <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis quos <br />perferendis fugit ipsa quaerat. Rem ipsam fugit omnis explicabo</p>

    </div>
    </div>
    {/* 4th card */}
    {/* <div className='first'>
     <img src={pic1} alt="Description of the image" className='pic1'/>
   
    <div className='padd'>
     <p className='blue'>STARTUP</p>
     <h1 className='design'> Design tips for designer that cover <br />everything you need</h1>
     <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis quos <br />perferendis fugit ipsa quaerat. Rem ipsam fugit omnis explicabo</p>

    </div>
    </div>  */}
    
    <div className='column d-flex flex-column'>
        <h2 className='heading text-back'>Categories</h2>
     <button className='button bg-secondary p-3 w-100 m-1'>Startup</button>
     <button className='button bg-secondary p-3 w-100 m-1'>Business</button>
     <button className='button bg-secondary p-3 w-100 m-1'>Economy</button>
     <button className='button bg-secondary p-3 w-100 m-1'>Technology</button>


 

<div class="d-flex flex-wrap gap-3 mt-4">
  <button class="btn btn-outline-secondary ">Business</button>
  <button class="btn btn-outline-secondary ">Experience</button>
  <button class="btn btn-outline-secondary ">Screen</button>
  <button class="btn btn-outline-secondary ">Technology</button>
  <button class="btn btn-outline-secondary ">Marketing</button>
  <button class="btn btn-outline-secondary ">Life</button>
</div>

        
    </div>
    </div>
  
    </section>
    </>
  )
}

export default Pictureee