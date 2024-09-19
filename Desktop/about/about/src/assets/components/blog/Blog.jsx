import React from 'react'
import group from '../blog/group.jpeg'
import './Blog.css'
function Blog() {
  return (
 <> 
 <div className='imp'>
 <div>
          <img src={group} alt="Description of the image" className='group'/>
    </div>
    <div className='rr'>
        <h2 className='oo'>Why we started this Blog</h2>
        <h3>Lorem ipsum dolor sit amet, consectetur <br /> adipiscing elit, sed do eiusmod tempor <br /> incididunt.</h3>
        <p className='para'>Lorem ipsum dolor sit amet, consectetur adipiscing <br />elit, sed do eiusmod tempor incididunt ut labore et dolore <br /> magna aliqua. Ut enim ad minim veniam, quis nostrud <br />exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
    </div>
    </div>
    </>  
  )
}

export default Blog