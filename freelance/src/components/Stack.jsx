import CaseSection from './CaseSection';
import { useReveal } from '../hooks/useReveal';
import './Stack.css';

const Stack = ({ id, eyebrow, title, blurb, items, kind }) => {
  const [ref, seen] = useReveal({ threshold: 0.25 });

  return (
    <section id={id} className="stack-wrap">
      <header ref={ref} className={`stack-intro${seen ? ' is-seen' : ''}`}>
        <p className="label stack-eyebrow">{eyebrow}</p>
        <h2 className="stack-title display">
          <span className="rise">
            <span>{title}</span>
          </span>
        </h2>
        <p className="stack-blurb reveal" style={{ '--d': '0.2s' }}>
          {blurb}
        </p>
      </header>

      <div className="stack">
        {items.map((item, i) => (
          <CaseSection key={item.slug} item={item} index={i} kind={kind} />
        ))}
      </div>
    </section>
  );
};

export default Stack;
