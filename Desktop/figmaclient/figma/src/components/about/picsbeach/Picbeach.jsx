import React from 'react'
import beachh from '../picsbeach/beachh.webp'
import './Picbeach.css'
function Picbeach() {
  return (
   <>
   <section className="picbeach">
    <div className="container">
    <div className='image'>
   <img src={beachh} alt="Description of the image" className='image'/>
    </div>
    {/* <div className='card'>
        <div className='blog'>
 <h1 >12+</h1>
<p>Blogs Published</p>
</div>
<div className='view'>
    <h1>18K+</h1>
    <p>Views on Finsweet</p>
</div>
<div className='total'>
    <h1>30K+</h1>
    <p>Total active Users</p>
</div>



    </div> */}
    </div>
    </section>
    </>
  )
}

export default Picbeach