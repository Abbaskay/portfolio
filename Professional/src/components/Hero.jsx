import React from 'react';
import './Hero.css';

const Hero = () => {
  return (
    <section id="top" className="grid-section hero">
      <div className="hero-main">
        <h1 className="hero-title">Mohammad<br/>Abbas</h1>
      </div>
      
      <div className="hero-bottom">
        <div className="hero-desc">
          Full-stack AI engineer designing and shipping production multi-agent systems, LLM-powered applications, and robust web platforms.
        </div>
        <div className="hero-contact">
          <a href="mailto:muhdabbas2201@gmail.com" className="contact-btn">Get in touch</a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
