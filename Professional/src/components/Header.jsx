import React, { useEffect, useState, useCallback } from 'react';
import { Menu, X } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import './Header.css';

const NAV_ITEMS = [
  { id: 'about', label: 'about' },
  { id: 'work', label: 'work' },
  { id: 'experience', label: 'experience' },
  { id: 'skills', label: 'skills' },
];

const Header = () => {
  const [activeId, setActiveId] = useState('');
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const sections = NAV_ITEMS
      .map((item) => document.getElementById(item.id))
      .filter(Boolean);

    if (sections.length === 0) return undefined;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveId(entry.target.id);
        });
      },
      { rootMargin: '-45% 0px -50% 0px', threshold: 0 }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    document.body.classList.toggle('menu-open', menuOpen);
    return () => document.body.classList.remove('menu-open');
  }, [menuOpen]);

  const handleNavClick = useCallback((e, id) => {
    e.preventDefault();
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setMenuOpen(false);
  }, []);

  const scrollTop = useCallback((e) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setMenuOpen(false);
  }, []);

  return (
    <header className="site-header">
      <div className="site-header-inner">
        <a href="#" className="brand" onClick={scrollTop} aria-label="Back to top">
          <span className="brand-prompt">&gt;</span>
          <span className="brand-cursor" aria-hidden="true" />
        </a>

        <nav className="site-nav" aria-label="Primary">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className={`nav-link${activeId === item.id ? ' active' : ''}`}
              onClick={(e) => handleNavClick(e, item.id)}
            >
              #{item.label}
            </a>
          ))}
        </nav>

        <div className="site-header-right">
          <span className="status-pill">
            <span className="status-dot" aria-hidden="true" />
            available
          </span>
          <div className="header-divider" aria-hidden="true" />
          <div className="social-icons">
            <a href="https://github.com/Abbaskay" target="_blank" rel="noreferrer" aria-label="GitHub">
              <FaGithub size={16} />
            </a>
            <a href="https://www.linkedin.com/in/mohammad-abbas-b91348251/" target="_blank" rel="noreferrer" aria-label="LinkedIn">
              <FaLinkedin size={16} />
            </a>
          </div>
          <a href="#contact" className="header-contact" onClick={(e) => handleNavClick(e, 'contact')}>
            [ contact ]
          </a>
        </div>

        <button
          type="button"
          className="menu-toggle"
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((v) => !v)}
        >
          {menuOpen ? <X size={18} /> : <Menu size={18} />}
        </button>
      </div>

      <div className={`mobile-menu${menuOpen ? ' open' : ''}`}>
        <nav className="mobile-nav" aria-label="Mobile">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className={`mobile-nav-link${activeId === item.id ? ' active' : ''}`}
              onClick={(e) => handleNavClick(e, item.id)}
            >
              #{item.label}
            </a>
          ))}
          <a href="#contact" className="mobile-nav-link contact" onClick={(e) => handleNavClick(e, 'contact')}>
            [ contact ]
          </a>
        </nav>
        <div className="mobile-menu-footer">
          <span className="status-pill">
            <span className="status-dot" aria-hidden="true" />
            available for work
          </span>
          <div className="social-icons">
            <a href="https://github.com/Abbaskay" target="_blank" rel="noreferrer" aria-label="GitHub">
              <FaGithub size={18} />
            </a>
            <a href="https://www.linkedin.com/in/mohammad-abbas-b91348251/" target="_blank" rel="noreferrer" aria-label="LinkedIn">
              <FaLinkedin size={18} />
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
