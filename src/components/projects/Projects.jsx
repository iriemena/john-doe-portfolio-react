import React from "react";
import "./project.scss";
import Contact from "../contact/contact";

function Projects() {
  return (
    <>
      <section id="projects">
        <p className="section-textp1">Browse My Recent</p>
        <h1 className="title">Projects</h1>

        <div className="project-container">
          <div className="project-details">
            <img src="/assets/project-1.png" alt="" />
            <h2 className="sub-title">Project One</h2>
            <div className="btn-container">
              <div
                className="btn"
                onClick={() => window.open("https://www.github.com", "_blank")}
              >
                Github
              </div>
              <div
                className="btn"
                onClick={() =>
                  window.open("https://www.portfolio.com", "_blank")
                }
              >
                Live Demo
              </div>
            </div>
          </div>

          <div className="project-details">
            <img src="/assets/project-2.png" alt="" />
            <h2 className="sub-title">Project One</h2>
            <div className="btn-container">
              <div
                className="btn"
                onClick={() => window.open("https://www.github.com", "_blank")}
              >
                Github
              </div>
              <div
                className="btn"
                onClick={() =>
                  window.open("https://www.portfolio.com", "_blank")
                }
              >
                Live Demo
              </div>
            </div>
          </div>

          <div className="project-details">
            <img src="/assets/project-3.png" alt="" />
            <h2 className="sub-title">Project One</h2>
            <div className="btn-container">
              <div
                className="btn"
                onClick={() => window.open("https://www.github.com", "_blank")}
              >
                Github
              </div>
              <div
                className="btn"
                onClick={() =>
                  window.open("https://www.portfolio.com", "_blank")
                }
              >
                Live Demo
              </div>
            </div>
          </div>
        </div>

        <div className="arrow">
          <div className="icon">
            <img
              src="/assets/arrow.png"
              alt=""
              onClick={() => (window.location.href = "/#contact")}
            />
          </div>
        </div>
      </section>
      <Contact />
    </>
  );
}

export default Projects;
