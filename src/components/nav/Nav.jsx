import React, { useState } from "react";
import "./nav.scss";
import Hero from "../heropage/Hero";

function Nav() {
  let [open, setOpen] = useState(false);

  return (
    <>
      <nav id="desktop-nav">
        <div className="logo">SunnyTech</div>
        <ul className="nav-links">
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#experience">Experience</a>
          </li>
          <li>
            <a href="#projects">Projects</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </nav>

      <nav id="mobile-nav">
        <div className="mobile-container">
          <div className="logo">SunnyTech</div>

          <div className={open === false ? 'hamburger-container': 'hamburger-container open'} onClick={() => setOpen(!open)}>
            <span></span>
            <span></span>
            <span></span>
          </div>

          <ul className={open === false ? "nav-links" : "nav-links open"}>
            <li>
              <a href="#about" onClick={() => setOpen(!open)}>
                About
              </a>
            </li>
            <li>
              <a href="#experience" onClick={() => setOpen(!open)}>
                Experience
              </a>
            </li>
            <li>
              <a href="#projects" onClick={() => setOpen(!open)}>
                Projects
              </a>
            </li>
            <li>
              <a href="#contact" onClick={() => setOpen(!open)}>
                Contact
              </a>
            </li>
          </ul>
        </div>
      </nav>
      <Hero />
    </>
  );
}

export default Nav;
