import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <>
      <Header />
      <div className="page-wrapper fade-in">
        <div className="main-grid">
          <Hero />
          <About />
          <Projects />
          <Experience />
          <Skills />
          <Footer />
        </div>
      </div>
    </>
  );
}

export default App;
