import React from 'react'
import back from '../posttt/back.jpeg'
import './Posttt.css'
import gggg from '../posttt/gggg.webp'
function Posttt() {
  return (
  <>
  <section className="posttt">
    <div className="container">
    <div className='top'>
<div className='left'>
    <h1 className='heading mb-3'>All Post</h1>
<img src={back} alt="Description of the image" className='image'/>
</div>
<div className='right mt-4'>
    <h3>Business</h3>
  <h1 className='heading'>Font sizes in UI design: The <br />complete guide to follow</h1>
  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor <br />incididunt ut labore et dolore magna aliqua. Non blandit massa enim nec. Scelerisque <br />viverra mauris in aliquam sem. At risus viverra adipiscing at in tellus.</p>
</div>
    </div>
    {/* second pic */}
    <div className='bottom'>
    <div className='left'>

<img src={gggg} alt="Description of the image" className='image'/>
</div>
<div className='right mt-4'>
    <h3>Economy</h3>
  <h1 className='font'>How to build rapport with your web <br /> design clients </h1>
  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor <br />incididunt ut labore et dolore magna aliqua. Non blandit massa enim nec. Scelerisque <br />viverra mauris in aliquam sem. At risus viverra adipiscing at in tellus.</p>
</div>
</div> 
</div>
</section>
  </>
  )
}

export default Posttt