import React from 'react'
import beachh from '../picture/beachh.webp'
import './Picture.css'
function Picture() {
  return (
   <> <div className='image'>
   <img src={beachh} alt="Description of the image" className='beach'/>
    </div>
    <div className='card'>
        <div className='blog'>
 <h1 className='head'>12+</h1>
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



    </div>
    </>
  )
}

export default Picture