import { useCallback, useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';
import { CONTACT_EMAIL } from '../data/projects';
import './Header.css';

const NAV = [
  { id: 'work', label: 'Work' },
  { id: 'templates', label: 'Templates' },
  { id: 'contact', label: 'Contact' },
];

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    document.body.classList.toggle('menu-open', menuOpen);
    return () => document.body.classList.remove('menu-open');
  }, [menuOpen]);

  const go = useCallback((e, id) => {
    e.preventDefault();
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setMenuOpen(false);
  }, []);

  const toTop = useCallback((e) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setMenuOpen(false);
  }, []);

  return (
    <header className="hd">
      <div className="hd-inner">
        <a href="#" className="hd-brand" onClick={toTop} aria-label="Back to top">
          <span className="hd-mark display">MA</span>
          <span className="label hd-role">Freelance Web Developer</span>
        </a>

        <nav className="hd-nav" aria-label="Primary">
          {NAV.map((item) => (
            <a key={item.id} href={`#${item.id}`} className="hd-link" onClick={(e) => go(e, item.id)}>
              {item.label}
            </a>
          ))}
        </nav>

        <div className="hd-right">
          <a href={`mailto:${CONTACT_EMAIL}`} className="hd-mail">
            {CONTACT_EMAIL}
          </a>
          <a href="https://github.com/Abbaskay" target="_blank" rel="noreferrer" aria-label="GitHub" className="hd-ico">
            <FaGithub size={15} />
          </a>
          <a
            href="https://www.linkedin.com/in/mohammad-abbas-b91348251/"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
            className="hd-ico"
          >
            <FaLinkedinIn size={15} />
          </a>
        </div>

        <button
          type="button"
          className="hd-toggle"
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((v) => !v)}
        >
          {menuOpen ? <X size={18} /> : <Menu size={18} />}
        </button>
      </div>

      <div className={`hd-drawer${menuOpen ? ' open' : ''}`}>
        {NAV.map((item) => (
          <a
            key={item.id}
            href={`#${item.id}`}
            className="hd-drawer-link display"
            onClick={(e) => go(e, item.id)}
          >
            {item.label}
          </a>
        ))}
        <a href={`mailto:${CONTACT_EMAIL}`} className="hd-drawer-mail">
          {CONTACT_EMAIL}
        </a>
      </div>
    </header>
  );
};

export default Header;
