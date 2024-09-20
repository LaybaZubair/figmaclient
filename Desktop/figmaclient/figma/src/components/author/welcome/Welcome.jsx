import React from 'react'
import author1 from '../welcome/author1.webp'
import './Welcome.css'
function Welcome() {
  return (
<>
<section className="welcome">
  <div className="container">
    <div className='top'>
<div className='left'>
<img src={author1} alt="Description of the image" className='image'/>
</div>
<div className='right'>
  <h1>Hey there, I’m Andrew Jonhson <br />and welcome to my Blog</h1>
  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor <br />incididunt ut labore et dolore magna aliqua. Non blandit massa enim nec. Scelerisque <br />viverra mauris in aliquam sem. At risus viverra adipiscing at in tellus.</p>
</div>
    </div>

    
   
    </div>
    </section>
    </>

  )
}

export default Welcome