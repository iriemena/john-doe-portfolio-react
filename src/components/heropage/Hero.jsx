import React from "react";

import "./hero.scss";
import About from "../about/About";

function Hero() {
  return (
    <>
      <div id="profile">
        <div className="image-container">
          <img src="/assets/profile-pic.png" alt="" />
        </div>

        <div className="profile-details">
          <p className="section-textp1">Hello, I'm</p>
          <h1 className="title">John Doe</h1>
          <p className="section-textp2">Web Developer</p>
          <div className="btn-container">
            <div
              className="btn"
              onClick={() => window.open("/assets/resume-example.pdf")}
            >
              Download CV
            </div>
            <div
              className="btn black"
              onClick={() => (window.location.href = "/#contact")}
            >
              Contact Info
            </div>
          </div>
          <div className="icon-container">
            <div
              className="icon"
              onClick={() => window.open("https://www.linkedin.com", "_blank")}
            >
              <img src="/assets/linkedin.png" alt="" />
            </div>
            <div
              className="icon"
              onClick={() => window.open("https://www.github.com", "_blank")}
            >
              <img src="/assets/github.png" alt="" />
            </div>
          </div>
        </div>
      </div>
      <About />
    </>
  );
}

export default Hero;
