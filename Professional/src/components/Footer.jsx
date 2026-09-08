import React from 'react';
import './Footer.css';
import { ArrowUpRight } from 'lucide-react';

const Footer = () => {
  return (
    <footer id="contact" className="footer-container">
      <div className="footer-top-row">
        <h2 className="footer-title">LET'S BUILD<br/>SOMETHING.</h2>
        <a href="mailto:muhdabbas2201@gmail.com" className="footer-cta">
          muhdabbas2201@gmail.com <ArrowUpRight className="cta-icon" size={48} />
        </a>
      </div>
      
      <div className="footer-bottom-row">
        <div className="footer-socials">
          <a href="https://github.com/Abbaskay" target="_blank" rel="noreferrer">GITHUB</a>
          <a href="https://www.linkedin.com/in/mohammad-abbas-b91348251/" target="_blank" rel="noreferrer">LINKEDIN</a>
        </div>
        <div className="footer-copyright">
          © {new Date().getFullYear()} MOHAMMAD ABBAS.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
