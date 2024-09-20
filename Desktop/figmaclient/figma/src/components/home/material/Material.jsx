import React from "react";
import "./Material.css";
import first from '../material/first.jpeg';
import two from '../material/two.png';
import three from '../material/three.webp';
import second from '../material/second.jpeg';
function Material() {
  return (
    <>
  <section className="material">
      <div className="container">
        <div className="column">
      <h1 className="cc">List of Autor</h1>
      </div>
      <div className="row">
      <div className="card1">
      <img src={first} alt="Description of the image"className="pict" />
            <h3 className="hh"> Floyd Miles</h3>
            <p className="pp">Content writer @company</p>

      </div>

      <div className="card1">
      <img src={two} alt="Description of the image"className="pict" />
            <h3 className="hh"> Dianne Russell</h3>
            <p className="pp">Content writer @company</p>

      </div>

      <div className="card1">
      <img src={three} alt="Description of the image"className="pict" />
            <h3 className="hh"> Jenny Wilson</h3>
            <p className="pp">Content writer @company</p>

      </div>

      <div className="card1">
      <img src={second} alt="Description of the image"className="pict" />
            <h3 className="hh"> Leslie Alexander</h3>
            <p className="pp">Content writer @company</p>

      </div>

      </div>
      </div>
    </section>
      
    </>
  );
}

export default Material;
