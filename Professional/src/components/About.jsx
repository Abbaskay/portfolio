import React from 'react';
import { Play } from 'lucide-react';
import './About.css';

const About = () => {
  return (
    <section id="about" className="grid-section about">
      <div className="about-container">
        
        <div className="about-header">
          <h2 className="about-title">[.ABOUT ME ]</h2>
        </div>

        <div className="about-content">
          <div className="about-text-area">
            <p className="about-text">
              Hi! I'm Mohammad Abbas, a <span className="highlight-blue">Software Engineer</span> who builds robust web platforms and brings ideas to life through <span className="highlight-gold">AI-driven solutions</span>.
            </p>
            <p className="about-text-secondary">
              I architect complex multi-agent systems, streamline backend operations, and integrate large language models (LLMs) into intuitive user interfaces — always aiming to make products <em>feel intelligent</em>.
            </p>
            
            <div className="about-tech-section">
              <p className="tech-intro">Here are some technologies I have been working with:</p>
              <ul className="tech-list">
                <li><Play size={10} className="tech-bullet" fill="currentColor" strokeWidth={0} /> Python & FastAPI</li>
                <li><Play size={10} className="tech-bullet" fill="currentColor" strokeWidth={0} /> React & Vue.js</li>
                <li><Play size={10} className="tech-bullet" fill="currentColor" strokeWidth={0} /> Machine Learning</li>
                <li><Play size={10} className="tech-bullet" fill="currentColor" strokeWidth={0} /> Multi-Agent Systems</li>
                <li><Play size={10} className="tech-bullet" fill="currentColor" strokeWidth={0} /> NLP & LLMs</li>
                <li><Play size={10} className="tech-bullet" fill="currentColor" strokeWidth={0} /> Laravel & PHP</li>
              </ul>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default About;
