import React from "react";
import "./Content.css";

function Content() {
  return (
    <>
      <section className="content">
        <div className="container">
          <div className="left">
            <p>ABOUT US</p>
            <h1>
              We are a team of <br /> content writers who <br /> share their
              learnings
            </h1>
          </div>
          <div className="right">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing <br />
              elit, sed do eiusmod tempor incididunt ut labore et dolore <br />{" "}
              magna aliqua. Ut enim ad minim veniam, quis nostrud <br />
              exercitation ullamco laboris nisi ut aliquip ex ea commodo
              consequat.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

export default Content;
