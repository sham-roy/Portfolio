// src/components/Header/Header.js
import React from 'react';
import { contactInfo } from '../../data/resumeData';
import DownloadCV from '../DownloadCV/DownloadCV';
import './Header.scss';
import { FaEnvelope, FaPhone, FaLinkedin, FaGithub, FaWhatsapp, FaMapMarkerAlt, FaBriefcase } from 'react-icons/fa';

const Header = () => {
  return (
    <header className="portfolio-header minimalist-fixed-top-bar">
      <div className="container header-content-wrapper">

        {/* --- Left Section: Brand (Name & Title) --- */}
        <div className="header-brand-section">
          <h1 className="brand-name">{contactInfo.name}</h1>
          <p className="brand-title">{contactInfo.title}</p>
        </div>

        {/* --- Right Section: Actions & Contact --- */}
        <div className="header-actions-section">
          <div className="header-top-right-row"> {/* New wrapper for icons and CV */}
            <div className="header-contact-icons">
              <a href={`mailto:${contactInfo.email}`} title="Email" aria-label="Email"><FaEnvelope /></a>
              <a href={`tel:${contactInfo.phone}`} title="Phone" aria-label="Phone"><FaPhone /></a>
              <a href={contactInfo.linkedinUrl} target="_blank" rel="noopener noreferrer" title="LinkedIn" aria-label="LinkedIn"><FaLinkedin /></a>
              <a href={contactInfo.githubUrl} target="_blank" rel="noopener noreferrer" title="GitHub" aria-label="GitHub"><FaGithub /></a>
              <a href={contactInfo.whatsappUrl} target="_blank" rel="noopener noreferrer" title="WhatsApp" aria-label="WhatsApp"><FaWhatsapp /></a>
              <a href={contactInfo.locationUrl} target="_blank" rel="noopener noreferrer" title="Location" aria-label="Location"><FaMapMarkerAlt /></a>
              {/* Add Instagram/Twitter if desired */}
            </div>
            <div className="header-download-cv">
              <DownloadCV />
            </div>
          </div>

          {contactInfo.availability && ( // Availability text below the row
            <div className="header-availability-text-bottom"> {/* New class for bottom placement */}
              <span>{contactInfo.availability}</span> <FaBriefcase />
            </div>
          )}
        </div>

      </div>
    </header>
  );
};

export default Header;