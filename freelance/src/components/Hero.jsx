import { useEffect, useRef, useState } from 'react';
import { ArrowDown } from 'lucide-react';
import { cases, templates, heroWords } from '../data/projects';
import './Hero.css';

const ALL = [...cases, ...templates];
const ROWS = ['a', 'b', 'c'].map((dir, r) => ({
  dir,
  items: ALL.filter((_, i) => i % 3 === r),
}));

const Hero = () => {
  const [word, setWord] = useState(0);
  const stageRef = useRef(null);
  const parallaxRef = useRef(null);

  useEffect(() => {
    const id = setInterval(() => setWord((i) => (i + 1) % heroWords.length), 2600);
    return () => clearInterval(id);
  }, []);

  // Pointer parallax on a wrapper, so it composes with the rail's marquee.
  useEffect(() => {
    const stage = stageRef.current;
    const layer = parallaxRef.current;
    if (!stage || !layer) return undefined;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return undefined;

    let frame = 0;
    let tx = 0;
    let ty = 0;

    const onMove = (e) => {
      const r = stage.getBoundingClientRect();
      tx = ((e.clientX - r.left) / r.width - 0.5) * -26;
      ty = ((e.clientY - r.top) / r.height - 0.5) * -14;
      if (!frame) {
        frame = requestAnimationFrame(() => {
          frame = 0;
          layer.style.transform = `translate3d(${tx}px, ${ty}px, 0)`;
        });
      }
    };

    window.addEventListener('pointermove', onMove, { passive: true });
    return () => {
      window.removeEventListener('pointermove', onMove);
      if (frame) cancelAnimationFrame(frame);
    };
  }, []);

  const go = (e) => {
    e.preventDefault();
    document.getElementById('work')?.scrollIntoView({ behavior: 'smooth' });
  };

  const rows = ROWS.map((row) => ({ ...row, items: [...row.items, ...row.items, ...row.items] }));

  return (
    <section className="hero" ref={stageRef}>
      <div className="hero-stage" aria-hidden="true">
        <div className="hero-parallax" ref={parallaxRef}>
          {rows.map((row) => (
            <div className={`hero-rail hero-rail--${row.dir}`} key={row.dir}>
              {row.items.map((item, i) => (
                <figure
                  className="hero-card"
                  key={`${item.slug}-${i}`}
                  style={{ '--r': `${(i % 2 ? 1 : -1) * 6}deg`, '--z': `${(i % 3) * -30}px` }}
                >
                  <img src={`/shots/${item.slug}.jpg`} alt="" decoding="async" />
                </figure>
              ))}
            </div>
          ))}
        </div>
      </div>

      <div className="hero-fg">
        <p className="label hero-kicker">Design → Build → Deploy</p>
        <h1 className="hero-title display">
          <span className="hero-static">I build</span>
          <span className="hero-swap">
            <span key={word} className="hero-word">
              {heroWords[word]}
            </span>
          </span>
        </h1>
        <p className="hero-sub">
          Eight live client builds across healthcare, retail, education and tools —
          plus four concept templates, all running in production below.
        </p>
        <a href="#work" className="pill hero-explore" onClick={go}>
          <span>Explore</span>
          <ArrowDown size={14} />
        </a>
      </div>

      <span className="label hero-flank hero-flank--l">8 live client builds</span>
      <span className="label hero-flank hero-flank--r">4 concept templates</span>
    </section>
  );
};

export default Hero;
