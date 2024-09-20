import React from "react";
import "./Feautres.css";
// import house from 'src./assets/images/house.jpg';
// import house from "../assets/images/beach.jpeg";
import house1 from "../feature/house1.jpg";
Atomics;
function Feauters() {
  return (
    <>
      <section className="Feauturepost">
        <div className="container">
          <div className="left">
            <h1>Features Post</h1>

            <img src={house1} alt="Description of the image" className="hou" />
            <p> By jhon Doe /may23,2022</p>
            <h2>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nostrum,
              perspiciatis! Voluptas, voluptates.
            </h2>
            <p>
              Lorem ipsum dolor sit amet consectetur <br />
              adipisicing elit. Tempore quibusdam quodbr .
            </p>
            <button type="button" class="btn btn-warning btn-sm">
              Read more
            </button>
          </div>
          <div className="right">
            <h1>All Posts</h1>
            <div className="first">
              <p>By jhon Doe /Aug23,2022</p>
              <h3>
                8 Figma design systems that <br />
                you can download for freebr today
              </h3>
            </div>

            <div className="second">
              <p>By jhon Doe /Aug23,2022</p>
              <h3>
                8 Figma design systems that <br />
                you can download for freebr today
              </h3>
            </div>

            <div className="first">
              <p>By jhon Doe /Aug23,2022</p>
              <h3>
                8 Figma design systems that <br />
                you can download for freebr today
              </h3>
            </div>

            <div className="first">
              <p>By jhon Doe /Aug23,2022</p>
              <h3>
                8 Figma design systems that <br />
                you can download for freebr today
              </h3>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Feauters;
