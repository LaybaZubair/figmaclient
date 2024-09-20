import React from "react";
import "./Simple.css";
import beach from '../simple/beachh.webp';
function Simple() {
  return (
    <>
  
      <section className="simple">
        <div className="container">
          <div className="left">
          <img src={beach} alt="Description of the image" className="image" />
          </div>
        <div className="right">
          <p> why we started</p>
          <h1>
            {" "}
            It started out as a simple <br />
            idea and evolved into <br />
            our passion
          </h1>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nostrum
            nisi voluptas consequuntur laudantium magni, inventore delectus
            dolorum voluptates quis atque, ex facilis quisquam enim ullam eum a,
            id dolor reprehenderit.
          </p>
          <button type="button" class="btn btn-warning btn-sm">Read more</button>
          </div>
        </div>
      </section>
     
    </>
  );
}

export default Simple;
