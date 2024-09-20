import React from 'react'
import './Footer.css'
function Footer() {
  return (
  <>
  <section className="footer">
    <div className="container">
      <div className="Top">
      <div className="left">
        <h2>Finsweet</h2>
      </div>
      <div className="right">
      <ul className='list'>
      <li>home</li>
        <li>blog</li>
        <li>aboutus</li>
        <li>contactus</li>
        <li>privacypolicy</li>

      </ul>
      </div>
      </div>
     {/* second div */}

   
     <div className="container">
     <div className="Bottom">
     <div className="left"> 
        <h1>Subscribe to our news letter to get latest updates and news</h1>
      </div>
      <div className="right">
      <input type="email" name="" id="" placeholder='Enter Your Email' className='email'/>
      <button type="button" class="btn btn-warning btn-sm" className='button'>Subscribe Us</button>

      </div>
      </div>
      </div>
    </div> 

  </section>
  </>
  )
}

export default Footer