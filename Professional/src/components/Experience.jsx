import React, { useState, useRef } from 'react';
import { motion, useScroll, useTransform, AnimatePresence, useMotionValueEvent } from 'framer-motion';
import { Play } from 'lucide-react';
import './Experience.css';

const experiences = [
  {
    company: "Hyperzod",
    role: "Software Developer",
    date: "Apr 2026 - Jul 2026",
    details: [
      "Designed and built a config-driven, registry-based multi-agent architecture for workflow automation, enabling new agents to be added without changing core orchestration code.",
      "Built and shipped specialized agents — Document, Slides, Fact-Checker, Excel, and Calling agents — each integrating LLM reasoning with structured outputs consumed by downstream services.",
      "Developed a mobile-first Streamlit WebView UI for embedding agent workflows inside a React Native app, bridging backend AI services with a consumer-facing product.",
      "Built backend services and REST APIs in Python/FastAPI and Laravel, with Vue.js frontends, to support agent-driven features in production.",
      "Collaborated cross-functionally on testing, debugging, and deploying AI solutions, including diagnosing state-management and conversation-identity issues in Dify-based agent workflows."
    ]
  },
  {
    company: "Ministry of Defense",
    role: "Software Developer Intern",
    date: "Apr 2025 - Oct 2025",
    details: [
      "Enhanced a secure government web platform supporting defense import/export operations, working within a compliance-driven, security-sensitive environment.",
      "Implemented new features and resolved production issues on live systems handling sensitive operational data."
    ]
  },
  {
    company: "CodeAI",
    role: "Software Developer Intern",
    date: "Jun 2023 - Mar 2025",
    details: [
      "Developed Python applications and backend features across the full software development lifecycle.",
      "Integrated third-party APIs and supported production deployments for client-facing tools."
    ]
  },
  {
    company: "Ayaachi",
    role: "Web Designer Intern",
    date: "Apr 2023 - Jun 2023",
    details: [
      "Designed branding, packaging, and digital assets for web and marketing use, translating brand guidelines into consumer-facing materials."
    ]
  }
];

const Character = ({ char, progress, range }) => {
  const opacity = useTransform(progress, range, [0.15, 1]);
  return (
    <motion.span style={{ opacity }}>
      {char}
    </motion.span>
  );
};

const Experience = () => {
  const highlightRef = useRef(null);
  const tabsScrollRef = useRef(null);
  const [activeTab, setActiveTab] = useState(0);

  const { scrollYProgress: highlightProgress } = useScroll({
    target: highlightRef,
    offset: ["start 80%", "center center"]
  });

  const { scrollYProgress: tabProgress } = useScroll({
    target: tabsScrollRef,
    offset: ["start 40%", "end 60%"]
  });

  useMotionValueEvent(tabProgress, "change", (latest) => {
    const totalTabs = experiences.length;
    let newTab = Math.floor(latest * totalTabs);
    if (newTab < 0) newTab = 0;
    if (newTab >= totalTabs) newTab = totalTabs - 1;

    if (newTab !== activeTab) {
      setActiveTab(newTab);
    }
  });

  const sentence = "Building intelligent multi-agent systems and shaping the future of LLM-powered applications.";
  const words = sentence.split(" ");

  let charCounter = 0;
  const totalChars = sentence.replace(/\s/g, "").length;

  return (
    <section id="experience" className="experience-wrapper">
      <div className="experience-highlight">
        <div className="highlight-content" ref={highlightRef}>
          <h2 className="highlight-label">EXPERIENCE ✦</h2>
          <h2 className="highlight-text">
            {words.map((word, wordIndex) => {
              const isAccent = word.includes("multi-agent") || word.includes("LLM-powered");

              return (
                <span key={wordIndex} className={`word ${isAccent ? "text-accent-orange" : ""}`}>
                  {word.split("").map((char, charIndex) => {
                    const start = charCounter / totalChars;
                    const end = start + (1 / totalChars);
                    charCounter++;
                    return (
                      <Character
                        key={charIndex}
                        char={char}
                        progress={highlightProgress}
                        range={[start, end]}
                      />
                    );
                  })}
                  <span className="space">&nbsp;</span>
                </span>
              );
            })}
          </h2>
        </div>

        {/* Tabbed Layout Section (Scroll-Driven) */}
        <div className="tabs-scroll-area" ref={tabsScrollRef}>
          <div className="tabs-sticky-content">
            <div className="tabs-container">
              <div className="tabs-sidebar">
                {experiences.map((exp, index) => (
                  <button
                    key={index}
                    className={`tab-btn ${activeTab === index ? 'active' : ''}`}
                    onClick={() => setActiveTab(index)}
                  >
                    {exp.company}
                  </button>
                ))}
                <div className="tab-indicator" style={{ transform: `translateY(${activeTab * 50}px)` }}></div>
              </div>

              <div className="tabs-content">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeTab}
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -15 }}
                    transition={{ duration: 0.25 }}
                    className="tab-panel"
                  >
                    <h3 className="tab-role">
                      {experiences[activeTab].role} <span className="tab-company">@ {experiences[activeTab].company}</span>
                    </h3>
                    <p className="tab-date">{experiences[activeTab].date}</p>
                    <ul className="tab-details">
                      {experiences[activeTab].details.map((detail, idx) => (
                        <li key={idx}>
                          <Play size={14} className="bullet-icon" fill="currentColor" strokeWidth={0} />
                          <span>{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
