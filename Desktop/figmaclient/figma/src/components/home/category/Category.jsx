import React from 'react'
import './Category.css';
function Category() {
  return (
   <>
  <section className="category">
      <div className="container">
        <div className="column">
      <h1 className="cc">Choose A Category</h1>
      </div>
      <div className="row">
      <div className="card1">
            <h3 > Business</h3>
            <p >Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>

      </div>

      <div className="card2">
            <h3> Startup</h3>
            <p >Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>

      </div>

      <div className="card1">
            <h3> Economy</h3>
            <p >Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>

      </div>

      <div className="card1">
            <h3> Technology</h3>
            <p >Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>

      </div>

      </div>
      </div>
    </section>
    </>

  )
}

export default Category