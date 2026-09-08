import { ArrowUpRight } from 'lucide-react';
import { useReveal } from '../hooks/useReveal';
import './CaseSection.css';

const pad = (n) => String(n + 1).padStart(2, '0');

const CaseSection = ({ item, index, kind = 'case' }) => {
  const [ref, seen] = useReveal();
  // Fires ~1200px before the section reaches the viewport so the image
  // finishes downloading before the reveal animation ever gets to it.
  const [preloadRef, shouldLoad] = useReveal({ threshold: 0, rootMargin: '0px 0px 1200px 0px' });
  const isTemplate = kind === 'template';

  const setRefs = (node) => {
    ref.current = node;
    preloadRef.current = node;
  };

  return (
    <section
      ref={setRefs}
      className={`case${seen ? ' is-seen' : ''}${isTemplate ? ' case--template' : ''}`}
      style={{ '--accent': item.accent }}
    >
      <div className="case-blowout" aria-hidden="true">
        <span className="case-tick case-tick--tl" />
        <span className="case-tick case-tick--tr" />
        <span className="case-tick case-tick--bl" />
        <span className="case-tick case-tick--br" />
      </div>

      <span className="label case-no">
        {isTemplate ? 'Concept' : 'Case'} {pad(index)}
      </span>

      <div className="case-body">
        <div className="case-copy">
          <p className="label case-sector">{item.sector}</p>

          <h2 className="case-title display">
            <span className="rise">
              <span>{item.title}</span>
            </span>
          </h2>

          <p className="case-tags">
            {(item.tags || [`#${item.sector.toUpperCase()}`, '#CONCEPT']).map((t) => (
              <span key={t}>{t}</span>
            ))}
          </p>

          {item.featured && <p className="case-featured">{item.featured}</p>}

          <p className="case-desc reveal" style={{ '--d': '0.15s' }}>
            {item.description}
          </p>

          <div className="case-actions reveal" style={{ '--d': '0.25s' }}>
            <a href={item.live} target="_blank" rel="noreferrer" className="pill">
              <span>View live</span>
              <ArrowUpRight size={14} />
            </a>
            {item.stack && <span className="label case-stack">{item.stack}</span>}
            {item.note && <span className="label case-note">{item.note}</span>}
          </div>

          {isTemplate && (
            <p className="case-disclosure">
              Demo build — fictional business, designed and coded as a portfolio template.
            </p>
          )}
        </div>

        <div className="case-shot reveal" style={{ '--d': '0.1s' }}>
          <div className="browser">
            <div className="browser-bar">
              <span className="browser-dot" />
              <span className="browser-dot" />
              <span className="browser-dot" />
              <span className="browser-url">{item.live.replace('https://', '')}</span>
            </div>
            <div className="browser-view">
              {shouldLoad && (
                <img
                  className="browser-pan"
                  src={`/shots/${item.slug}-tall.jpg`}
                  alt={`${item.title} website`}
                  decoding="async"
                />
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CaseSection;
