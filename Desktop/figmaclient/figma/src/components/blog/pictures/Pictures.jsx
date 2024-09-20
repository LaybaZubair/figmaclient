import React from "react";
import "./Pictures.css";
import pic1 from "../pictures/pic1.webp";
import pic2 from "../pictures/pic2.jpeg";
import pic3 from "../pictures/pic3.webp";
import pic4 from "../pictures/pic4.jpeg";
function Pictures() {
  return (
    <>
      <section className="picture">
        <div className="container">
          <h2 className="h2 text-left mt-3 fw-bold">All post</h2>
          <div className="left">
            <img src={pic1} alt="Description of the image" className="pic1" />
            <div className="right">
              <p >STARTUP</p>
              <h1 >
                {" "}
                Design tips for designer that cover <br />
                everything you need
              </h1>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Blanditiis quos <br />
                perferendis fugit ipsa quaerat. Rem ipsam fugit omnis explicabo
              </p>
            </div>
          </div>

          <div className="left">
            <img src={pic2} alt="Description of the image" className="pic1" />
            <div className="right">
              <p >BUSSINESS</p>
              <h1 >
                How to build rapport with your web <br /> design clients
              </h1>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Blanditiis quos <br />
                perferendis fugit ipsa quaerat. Rem ipsam fugit omnis explicabo
              </p>
            </div>
          </div>

          <div className="left">
            <img src={pic3} alt="Description of the image" className="pic1" />
            <div className="right">
              <p >STARTUP</p>
              <h1>Logo design trends to avoid in 2022</h1>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Blanditiis quos <br />
                perferendis fugit ipsa quaerat. Rem ipsam fugit omnis explicabo
              </p>
            </div>
          </div>

          <div className="left">
            <img src={pic4} alt="Description of the image" className="pic1  " />
            <div className="right">
              <p>TECHNOLOGY</p>
              <h1 >
                8 Figma design systems you can <br />
                download for free today{" "}
              </h1>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Blanditiis quos <br />
                perferendis fugit ipsa quaerat. Rem ipsam fugit omnis explicabo
              </p>
            </div>
          </div>

          <div className="left">
            <img src={pic1} alt="Description of the image" className="pic1" />

            <div className="right">
              <p >Economy</p>
              <h1>
                {" "}
                Font sizes in UI design: The complete <br /> guide to follow
              </h1>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Blanditiis quos <br />
                perferendis fugit ipsa quaerat. Rem ipsam fugit omnis explicabo
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Pictures;
