import React from 'react'
import './Category.css';
function Category() {
  return (
   <>
  <section className="category">
      <div className="container">
        <div className="column">
      <h1 className="heading mt-3 mb-3 text-center ">Choose A Category</h1>
      </div>
      <div className="row justify-content-center ">
      <div className="card1">
            <h3 className="heading text-align-center mt-3"> Business</h3>
            <p className="paragraph text-align-center">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>

      </div>

      <div className="card2">
            <h3 className="heading text-align-center mt-3"> Startup</h3>
            <p className="paragraph text-align-center">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>

      </div>

      <div className="card1">
            <h3 className="heading text-align-center mt-3"> Economy</h3>
            <p className="paragraph text-align-center">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>

      </div>

      <div className="card1">
            <h3 className="heading text-align-center mt-3"> Technology</h3>
            <p className="paragraph text-align-center">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>

      </div>

      </div>
      </div>
    </section>
    </>

  )
}

export default Category