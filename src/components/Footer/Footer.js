// src/components/Footer/Footer.js
"use client";

import React, { useState, useEffect } from 'react';
import { contactInfo, footerInfo } from '../../data/resumeData';
import './Footer.scss';
import { FaArrowUp, FaHeart, FaEnvelope, FaLinkedin, FaGithub, FaWhatsapp } from 'react-icons/fa';
import { SiNextdotjs, SiReact, SiSass } from 'react-icons/si';

const Footer = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.pageYOffset > 300) setIsVisible(true);
    else setIsVisible(false);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const getTechIcon = (techName) => {
    switch (techName.toLowerCase()) {
      case 'react': return <SiReact aria-label="React" />;
      case 'next.js': return <SiNextdotjs aria-label="Next.js" />;
      case 'scss': return <SiSass aria-label="SCSS" />;
      default: return null;
    }
  };

  return (
    <footer className="portfolio-footer two-col-built-right-footer"> {/* New class */}

      <div className="container footer-content-flex">

        {/* Left Column: Info */}
        <div className="footer-left-info-col">
          <p className="footer-copyright-main">
            © {new Date().getFullYear()} {contactInfo.name}. All Rights Reserved.
          </p>
          {footerInfo.closingStatement && (
            <p className="footer-professional-statement">{footerInfo.closingStatement}</p>
          )}
          {footerInfo.tagline && (
            <p className="footer-tagline">{footerInfo.tagline}</p>
          )}
        </div>

        {/* Right Column: Socials & Built With */}
        <div className="footer-right-action-col">
          <div className="footer-social-icons-group">
            <a href={`mailto:${contactInfo.email}`} aria-label="Email" title="Email"><FaEnvelope /></a>
            <a href={contactInfo.linkedinUrl} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" title="LinkedIn"><FaLinkedin /></a>
            <a href={contactInfo.githubUrl} target="_blank" rel="noopener noreferrer" aria-label="GitHub" title="GitHub"><FaGithub /></a>
            <a href={contactInfo.whatsappUrl} target="_blank" rel="noopener noreferrer" aria-label="WhatsApp" title="WhatsApp"><FaWhatsapp /></a>
          </div>
          <div className="footer-built-with-on-right">
            <span>Built with </span>
            <FaHeart className="built-with-heart-icon" />
            <span> using: </span>
            {footerInfo.builtWith.map((tech) => (
              <span key={tech} className="tech-logo-item-footer" title={tech}>
                {getTechIcon(tech)}
              </span>
            ))}
          </div>
        </div>

      </div>

      {isVisible && (
        <button onClick={scrollToTop} className="back-to-top-built-right" title="Back to Top"> {/* New class */}
          <FaArrowUp />
        </button>
      )}
    </footer>
  );
};

export default Footer;