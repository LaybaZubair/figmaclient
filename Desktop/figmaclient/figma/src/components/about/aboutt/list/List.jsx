import React from 'react'
import './List.css'
import first from '../list/first.jpeg'
import two from '../list/two.png'
import three from '../list/three.webp'
import second from '../list/second.jpeg'
import pic7 from '../list/pic7.webp'
function List() {
  return (
<>
<section className="list">
    <div className="container ">
        <h1 className='heading text-center'>List of Author</h1>
        <div className="row-1  ">
        <div className="card-1">
  <img src={first} alt="Description of the image"className="image " />
        <h3 className="heading text-center"> Floyd Miles</h3>
        <p className="paragraph text-center">Content writer @company</p>

  </div>
  <div className="card-1">
  <img src={two} alt="Description of the image"className="image " />
  <h3 className="heading text-center"> Floyd Miles</h3>
        <p className="paragraph text-center">Content writer @company</p>

  </div>
  <div className="card-1">
  <img src={three} alt="Description of the image"className="image " />
        <h3 className="heading text-center"> Floyd Miles</h3>
        <p className="paragraph text-center">Content writer @company</p>

  </div>
  <div className="card-1">
  <img src={second} alt="Description of the image"className="image " />
  <h3 className="heading text-center"> Floyd Miles</h3>
        <p className="paragraph text-center">Content writer @company</p>

  </div>
        </div>

        {/* second card */}
        <div className="row-2  ">
        <div className="card-1">
  <img src={pic7} alt="Description of the image"className="image " />
        <h3 className="heading text-center"> Floyd Miles</h3>
        <p className="paragraph text-center">Content writer @company</p>

  </div>
  <div className="card-1">
  <img src={two} alt="Description of the image"className="image " />
  <h3 className="heading text-center"> Floyd Miles</h3>
        <p className="paragraph text-center">Content writer @company</p>

  </div>
  <div className="card-1">
  <img src={three} alt="Description of the image"className="image " />
        <h3 className="heading text-center"> Floyd Miles</h3>
        <p className="paragraph text-center">Content writer @company</p>

  </div>
  <div className="card-1">
  <img src={second} alt="Description of the image"className="image " />
  <h3 className="heading text-center"> Floyd Miles</h3>
        <p className="paragraph text-center">Content writer @company</p>

  </div>
        </div>
    </div>
    </section>
</>
  )
}

export default List