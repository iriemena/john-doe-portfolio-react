import React from "react";
import "./about.scss";
import Experience from "../experience/Experience";


function About() {
    
  return (
    <>
    <section id="about">
      <p className="section-textp1">Get to Know More</p>
      <h1 className="title">About Me</h1>
      <div className="about-main-container">
        <div className="image-container">
          <img src="/assets/about-pic.png" alt="" />
        </div>

        <div className="wrapper">
          <div className="about-container">
            <div className="about-details">
              <div className="icon">
                <img src="/assets/experience.png" alt="" />
              </div>
              <h3>Experience</h3>
              <p className="section-textp1">
                5+ years <br /> Web Development
              </p>
            </div>

            <div className="about-details">
              <div className="icon">
                <img src="/assets/education.png" alt="" />
              </div>
              <h3>Education</h3>
              <p className="section-textp1">
                B.Sc. Bachelors Degree <br /> M.Sc. Masters Degree
              </p>
            </div>
          </div>

          <div className="text-container">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic quis
              reprehenderit et laborum, rem, dolore eum quod voluptate
              exercitationem nobis, nihil esse debitis maxime facere minus sint
              delectus velit in eos quo officiis explicabo deleniti dignissimos.
              Eligendi illum libero dolorum cum laboriosam corrupti quidem,
              reiciendis ea magnam? Nulla, impedit fuga!
            </p>
          </div>
        </div>
      </div>

      <div className="arrow">
        <div className="icon">
          <img src="/assets/arrow.png" alt="" onClick={() => window.location.href="/#experience"}/>
        </div>
      </div>
    </section>
    <Experience />
    </>
  );
}

export default About;
