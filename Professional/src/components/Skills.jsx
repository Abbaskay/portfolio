import React from 'react';
import './Skills.css';

const Skills = () => {
  return (
    <section id="skills" className="grid-section skills">
      <div className="section-header-massive">
        <h2 className="expertise-title">Expertise</h2>
      </div>
      <div className="skills-grid">
        <div className="skill-category">
          <h3 className="text-uppercase">AI & ML</h3>
          <p>Multi-Agent Systems, LLMs, RAG, Prompt Engineering, NLP, Computer Vision</p>
        </div>
        <div className="skill-category">
          <h3 className="text-uppercase">Backend</h3>
          <p>Python, FastAPI, Flask, PHP, Laravel, REST APIs, PostgreSQL, MySQL</p>
        </div>
        <div className="skill-category">
          <h3 className="text-uppercase">Frontend</h3>
          <p>JavaScript, React, Vue.js, HTML5, CSS3, React Native</p>
        </div>
        <div className="skill-category">
          <h3 className="text-uppercase">Tools</h3>
          <p>Docker, AWS, Git, GitHub, Figma, Claude Code, Codex</p>
        </div>
      </div>
    </section>
  );
};

export default Skills;
