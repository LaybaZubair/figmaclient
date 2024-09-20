import React from 'react'
import group from '../blog/group.jpeg'
import './Group.css'
function Group() {
  return (
 <> 
 <section className="group">
 <div className='container mt-4'>
 <div className='left w-100 m-0'>
          <img src={group} alt="Description of the image" className='image'/>
    </div>
    <div className='right w-100 ml-3'>
        <h2 className='oo'>Why we started this Blog</h2>
        <h3>Lorem ipsum dolor sit amet, consectetur <br /> adipiscing elit, sed do eiusmod tempor <br /> incididunt.</h3>
        <p className='para'>Lorem ipsum dolor sit amet, consectetur adipiscing <br />elit, sed do eiusmod tempor incididunt ut labore et dolore <br /> magna aliqua. Ut enim ad minim veniam, quis nostrud <br />exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
    </div>
    </div>
    </section>
    </>  
  )
}

export default Group