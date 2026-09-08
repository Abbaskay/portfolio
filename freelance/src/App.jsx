import Header from './components/Header';
import Hero from './components/Hero';
import Stack from './components/Stack';
import Footer from './components/Footer';
import { cases, templates } from './data/projects';
import './App.css';

function App() {
  return (
    <>
      <Header />
      <main className="page">
        <Hero />

        <Stack
          id="work"
          kind="case"
          eyebrow="Selected work"
          title="Live client builds"
          blurb="Eight sites shipped for real businesses across healthcare, retail, education and internal tools. Every one of them is in production right now — open any of them."
          items={cases}
        />

        <Stack
          id="templates"
          kind="template"
          eyebrow="Concept work"
          title="Templates"
          blurb="Four from-scratch concept builds, one per industry, made to show what a first draft could look like for a business that isn't a client yet. None of these are real businesses — each carries its own disclosure."
          items={templates}
        />

        <Footer />
      </main>
    </>
  );
}

export default App;
