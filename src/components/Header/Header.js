// src/components/Header/Header.js (or your Navbar component)
"use client";
import React, { useState, useEffect, useRef } from 'react';
import { contactInfo } from '../../data/resumeData'; // Assuming name or logo source is here
import './Header.scss'; // We will modify this SCSS
// Import icons for nav links if you use them
import { FaHome, FaUserAstronaut, FaBriefcase, FaEnvelope, FaFileAlt } from 'react-icons/fa';

const Header = () => {
  const [isSticky, setIsSticky] = useState(false);
  const [isHeroVisible, setIsHeroVisible] = useState(true); // Track hero visibility
  const heroRef = useRef(null); // To observe the hero section

  useEffect(() => {
    // Get hero section element after mount
    heroRef.current = document.getElementById('hero'); // Assumes HeroSection has id="hero"

    const handleScroll = () => {
      const heroSection = heroRef.current;
      if (heroSection) {
        // Check if bottom of hero is above viewport top
        const heroBottom = heroSection.getBoundingClientRect().bottom;
        setIsHeroVisible(heroBottom > 0); // Hero is visible if its bottom is below viewport top
      }

      // Logic for sticky header (independent of hero visibility for now, can be combined)
      if (window.scrollY > 100) { // Become sticky after scrolling 100px
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Determine header class based on state
  // When hero is visible, header is transparent/minimal.
  // When hero is NOT visible (scrolled past), header becomes solid/sticky.
  const headerClasses = `portfolio-main-header 
    ${isSticky ? 'sticky-header' : ''} 
    ${isHeroVisible && !isSticky ? 'transparent-header' : 'solid-header'}`;
  // If sticky, it's always solid. If not sticky AND hero is visible, it's transparent.

  return (
    <header className={headerClasses}>
      <div className="container header-nav-content">
        <a href="#hero" className="nav-logo">
          {contactInfo.name.split(' ')[0]} {/* Or your actual logo/name */}
        </a>
        <nav className="main-navigation">
          {/* Example Nav Links - adapt to your sections */}
          <a href="#hero" className="nav-link"><FaHome /> Home</a>
          <a href="#profile" className="nav-link"><FaUserAstronaut /> About</a> {/* Assuming ProfileSummary has id="profile" */}
          <a href="#projects" className="nav-link"><FaBriefcase /> Projects</a>
          {/* <a href="#resume" className="nav-link"><FaFileAlt /> Resume</a> */}
          <a href="#contact" className="nav-link"><FaEnvelope /> Contact</a>
        </nav>
      </div>
    </header>
  );
};

export default Header;