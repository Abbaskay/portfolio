import { ArrowUpRight } from 'lucide-react';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';
import { CONTACT_EMAIL } from '../data/projects';
import { useReveal } from '../hooks/useReveal';
import './Footer.css';

const Footer = () => {
  const [ref, seen] = useReveal({ threshold: 0.2 });

  return (
    <footer id="contact" ref={ref} className={`ft${seen ? ' is-seen' : ''}`}>
      <div className="ft-inner">
        <p className="label ft-eyebrow">Available for new projects</p>

        <h2 className="ft-title display">
          <span className="rise">
            <span>Got something</span>
          </span>
          <span className="rise" style={{ '--d': '0.08s' }}>
            <span>to build?</span>
          </span>
        </h2>

        <a href={`mailto:${CONTACT_EMAIL}`} className="ft-mail reveal" style={{ '--d': '0.2s' }}>
          <span>{CONTACT_EMAIL}</span>
          <ArrowUpRight size={26} />
        </a>

        <div className="ft-socials reveal" style={{ '--d': '0.3s' }}>
          <a href="https://github.com/Abbaskay" target="_blank" rel="noreferrer" aria-label="GitHub">
            <FaGithub size={17} />
          </a>
          <a
            href="https://www.linkedin.com/in/mohammad-abbas-b91348251/"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
          >
            <FaLinkedinIn size={17} />
          </a>
        </div>

        <div className="ft-mark display" aria-hidden="true">
          MA
        </div>

        <p className="label ft-year">© {new Date().getFullYear()} Mohammad Abbas</p>
      </div>
    </footer>
  );
};

export default Footer;
