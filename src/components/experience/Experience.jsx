import React from "react";
import "./experience.scss";
import Projects from "../projects/Projects";

function Experience() {
  return (
    <>
    <section id="experience">
      <p className="section-textp1">Explore My</p>
      <h1 className="title">Experience</h1>

      <div className="experience-container">
        <div className="experience-details">
          <h2 className="sub-title">Frontend Development</h2>
          <div className="article-container">
            <div className="article">
              <div className="icon">
                <img src="/assets/checkmark.png" alt="" />
              </div>
              <div>
                <h3>HTML</h3>
                <p>Experienced</p>
              </div>
            </div>

            <div className="article">
              <div className="icon">
                <img src="/assets/checkmark.png" alt="" />
              </div>
              <div>
                <h3>CSS</h3>
                <p>Experienced</p>
              </div>
            </div>
            <div className="article">
              <div className="icon">
                <img src="/assets/checkmark.png" alt="" />
              </div>
              <div>
                <h3>JAVASCRIPT</h3>
                <p>Experienced</p>
              </div>
            </div>

            <div className="article">
              <div className="icon">
                <img src="/assets/checkmark.png" alt="" />
              </div>
              <div>
                <h3>REACT</h3>
                <p>intermediate</p>
              </div>
            </div>

            <div className="article">
              <div className="icon">
                <img src="/assets/checkmark.png" alt="" />
              </div>
              <div>
                <h3>SASS</h3>
                <p>Intermediate</p>
              </div>
            </div>

            <div className="article">
              <div className="icon">
                <img src="/assets/checkmark.png" alt="" />
              </div>
              <div>
                <h3>Material UI</h3>
                <p>Intermediate</p>
              </div>
            </div>
          </div>
        </div>

        <div className="experience-details">
          <h2 className="sub-title">Backend Development</h2>
          <div className="article-container">
            <div className="article">
              <div className="icon">
                <img src="/assets/checkmark.png" alt="" />
              </div>
              <div>
                <h3>Node JS</h3>
                <p>Basic</p>
              </div>
            </div>

            <div className="article">
              <div className="icon">
                <img src="/assets/checkmark.png" alt="" />
              </div>
              <div>
                <h3>Express JS</h3>
                <p>Intermediate</p>
              </div>
            </div>
            <div className="article">
              <div className="icon">
                <img src="/assets/checkmark.png" alt="" />
              </div>
              <div>
                <h3>PostgreSQL</h3>
                <p>Basic</p>
              </div>
            </div>

            <div className="article">
              <div className="icon">
                <img src="/assets/checkmark.png" alt="" />
              </div>
              <div>
                <h3>GIT</h3>
                <p>intermediate</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="arrow">
        <div className="icon">
          <img
            src="/assets/arrow.png"
            alt=""
            onClick={() => (window.location.href = "/#projects")}
          />
        </div>
      </div>
    </section>
    <Projects />
    </>
  );
}

export default Experience;
