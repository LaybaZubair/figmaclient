import React from 'react'
import './Testimonial.css';
function Testimonial() {
  return (
    <>
    
    <section className='testimonials'>
        <div className='container'>
          <div className="left">
        <p className='testi'>Testimonials</p>
        <h1>What People say <br />about our blogs</h1>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing <br /> elit. Molestias ipsum nesciunt veritatis, </p>
        </div>

<div className='right'>
    <p className='issue'>Lorem ipsum dolor sit amet consectetur, adipisicing <br /> elit. Error aliquam, voluptatum, tenetur <br /> magnam maxime corrupti doloribus  <br /> perferendis nam enim quibusdam, </p>
    <h1 className='person'>Jonathan Vallem</h1>
    <p className='USA'>New york,USA</p>
    </div>
    </div>

    </section>
   
    </>
  )
}

export default Testimonial