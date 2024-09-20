import React from 'react'
import './Post.css'
import photo from '../post/photo.webp'
function Post() {
  return (
    
    <section className='post'>
        <div className='container'>
          <div className="left">
      <p > FEAUTURE POSTED</p>
      <h2 >Step-by-Step guide to choosing great <br /> font pairs</h2>
      <p > By james west /may23,2</p>
      <p >Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptates, facilis <br /> est! Minus, amet debitis incidunt hic nam libero dolor ea, modi </p>
      <button className='button'> Read more</button>
      </div>
      
      <div className='right'>
      <img src={photo} alt="Description of the image" className='image'/>
      </div>
      </div>
      </section>
      
  )
}

export default Post