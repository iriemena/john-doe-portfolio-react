import React from 'react'
import './contact.scss'
import Footer from '../footer/Footer'

function contact() {
  return (
    <>
    <section id='contact'>
        <p className="section-textp1">Get in Touch</p>
        <h1 className="title">Contact Me</h1>

        <div className="contact-container">
            <div className="info">
                <div className="icon" onClick={() => window.open('mailto:examplemail@gmail.com')}>
                    <img src="/assets/email.png" alt="" />
                    
                </div>
                <p><a href="mailto:examplemail@gmail.com">Example@gmail.com</a></p>
            </div>
            <div className="info">
                <div className="icon" onClick={() => window.open('https://www.linkedin.com', '_blank')}>
                    <img src="/assets/linkedin.png" alt="" />
                </div>
                <p><a href="https://www.linkedin.com">LinkedIn</a></p>
            </div>
        </div>
        <div className="arrow">
        <div className="icon">
          <img
            src="/assets/up-arrow.png"
            alt=""
            onClick={() => (window.location.href = "/#desktop-nav")}
          />
        </div>
      </div>
    </section>

   <Footer />
  
    </>
  )
}

export default contact