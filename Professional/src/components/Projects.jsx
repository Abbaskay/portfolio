import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import {
  FaFileAlt, FaBrain, FaDna, FaRobot, FaFilePowerpoint,
  FaCheckDouble, FaHeartbeat, FaMap, FaChartLine, FaBook, FaHome
} from 'react-icons/fa';
import './Projects.css';

const projects = [
  {
    title: "CollabDocs",
    stack: "Next.js 15, React 19, TypeScript, TipTap, Prisma",
    description: "Collaborative document editor shipped end to end — 14 passing tests, zero lint errors, architecture docs and a walkthrough video.",
    live: "https://collabdocs-editor.vercel.app",
    repo: "https://github.com/Abbaskay/collabdocs",
    featured: true,
    Icon: FaFileAlt
  },
  {
    title: "MedImage AI",
    stack: "TensorFlow, Keras, OpenCV, Flask",
    description: "Brain MRI tumour detection on a CNN trained from scratch, with heatmap ROI overlays and DICOM/NIfTI support.",
    repo: "https://github.com/Abbaskay/med_image",
    featured: true,
    Icon: FaBrain
  },
  {
    title: "BioPredict",
    stack: "Python, scikit-learn, Flask",
    description: "Disease–gene association prediction over latent gene and disease factors — 0.865 held-out ROC-AUC against a 0.753 majority baseline.",
    repo: "https://github.com/Abbaskay/biopredict",
    Icon: FaDna
  },
  {
    title: "Biosignal Monitor",
    stack: "Python, scikit-learn, Docker",
    description: "Companion service scoring stress from vitals and arrhythmia from ECG features, with batch CSV scoring and Docker packaging. 18 tests.",
    repo: "https://github.com/Abbaskay/biosignal-health-monitor",
    Icon: FaHeartbeat
  },
  {
    title: "Agent Framework",
    stack: "Python, LLM Tooling",
    description: "Config-driven agent engine layered into registries, configs, core and tools — JSONL run logging and exponential backoff throughout.",
    repo: "https://github.com/Abbaskay/agent_framework",
    Icon: FaRobot
  },
  {
    title: "AI Slides",
    stack: "Vue, Python, LLMs",
    description: "Turns a prompt into a structured, editable deck. Built alongside a document agent sharing the same generation core.",
    repo: "https://github.com/Abbaskay/slides-agent",
    Icon: FaFilePowerpoint
  },
  {
    title: "AI Fact Checker",
    stack: "Vue, Python, Retrieval Pipelines",
    description: "Claim extraction into multi-source evidence retrieval into cited, structured verdicts.",
    repo: "https://github.com/Abbaskay/fact-agent",
    Icon: FaCheckDouble
  },
  {
    title: "HealthPredict",
    stack: "Python, scikit-learn, Flask",
    description: "Dual risk models over 13 clinical markers, predicting heart disease and diabetes from a single intake form.",
    repo: "https://github.com/Abbaskay/med_app",
    Icon: FaHeartbeat
  },
  {
    title: "Heatmapint",
    stack: "Vue 2, Tailwind, Leaflet",
    description: "Admin dashboard visualising order density and operational data across an interactive map.",
    repo: "https://github.com/Abbaskay/heatmapint",
    live: "https://heatmapint.vercel.app",
    Icon: FaMap
  },
  {
    title: "Primetrade.ai",
    stack: "Python, Flask, Binance API",
    description: "Trading bot placing market and limit orders on Binance Futures, with a CLI, a web UI and secured credential handling.",
    repo: "https://github.com/Abbaskay/Primetrade.ai",
    Icon: FaChartLine
  },
  {
    title: "Summarify",
    stack: "Python, NLP, Transformers",
    description: "On-demand book summarisation, read in the browser or delivered by email.",
    repo: "https://github.com/Abbaskay/Summarify",
    Icon: FaBook
  },
  {
    title: "Property Predictor",
    stack: "Python, scikit-learn, Jupyter",
    description: "Regression pipeline estimating property prices from a real Delhi housing dataset, with feature engineering and trend analysis.",
    repo: "https://github.com/Abbaskay/Property-price-predictor",
    Icon: FaHome
  }
];

const Projects = () => {
  return (
    <section id="work" className="grid-section projects">
      <div className="section-header-massive">
        <h2 className="projects-title">Selected Projects</h2>
      </div>
      <div className="projects-grid">
        {projects.map((project) => {
          const primary = project.live || project.repo;

          return (
            <div key={project.title} className="project-cell">
              <div className="project-header-row">
                <h3 className="project-title">
                  {primary ? (
                    <a href={primary} target="_blank" rel="noreferrer" className="project-link-hover">
                      {project.title} <ArrowUpRight size={20} strokeWidth={2} />
                    </a>
                  ) : (
                    project.title
                  )}
                </h3>
                {project.featured && (
                  <span className="project-badge text-uppercase">Featured</span>
                )}
              </div>

              <div className="project-image-placeholder">
                <div className="project-icon-wrapper">
                  <project.Icon size={70} color="var(--text)" />
                </div>
              </div>

              <div className="project-footer">
                <p className="project-desc">{project.description}</p>
                <p className="project-stack text-uppercase">{project.stack}</p>
                <div className="project-links text-uppercase">
                  {project.live && (
                    <a href={project.live} target="_blank" rel="noreferrer">Live</a>
                  )}
                  {project.repo && (
                    <a href={project.repo} target="_blank" rel="noreferrer">Code</a>
                  )}
                  {project.note && <span className="project-note">{project.note}</span>}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Projects;
