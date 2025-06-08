// src/components/Languages/Languages.js
import React from 'react';
import { languages } from '../../data/resumeData';
import AnimatedSection from '../AnimatedSection/AnimatedSection';
import './Languages.scss';
import { FaLanguage, FaCircle } from 'react-icons/fa'; // FaCircle for proficiency dots

// Helper component for proficiency dots
const ProficiencyDots = ({ level, maxLevel = 5 }) => {
  return (
    <div className="proficiency-dots-wrapper">
      {Array.from({ length: maxLevel }).map((_, i) => (
        <FaCircle
          key={i}
          className={`proficiency-dot ${i < level ? 'filled' : 'empty'}`}
        />
      ))}
    </div>
  );
};

const Languages = () => {
  return (
    <AnimatedSection className="section languages-section-enhanced"> {/* New class */}
      <div className="container">
        <div className="section-header-languages"> {/* Centralized header */}
          <h2><FaLanguage /> Languages I Speak</h2>
          {/* Optional: Add a small subheading here if desired */}
          {/* <p className="languages-subheading">Communicating effectively across linguistic landscapes.</p> */}
        </div>

        <div className="languages-grid-enhanced"> {/* Changed class */}
          {languages.map((langItem, index) => (
            <div className="language-card-item" key={index}> {/* Changed class, not using global .card directly */}
              <div className="language-card-header">
                <span className="lang-name-enhanced">{langItem.lang}</span>
                <span className="lang-proficiency-text">{langItem.proficiency}</span>
              </div>
              <ProficiencyDots level={langItem.level} />
              {/* <div className="language-card-bar-container">
                <div
                  className="language-card-bar-fill"
                  style={{ width: `${(langItem.level / 5) * 100}%` }} // Assuming max level 5
                ></div>
              </div> */}
            </div>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
};
export default Languages;