// src/components/Languages/Languages.js
import React from 'react';
import { languages } from '../../data/resumeData';
import AnimatedSection from '../AnimatedSection/AnimatedSection';
import './Languages.scss';
import { FaLanguage } from 'react-icons/fa';

const Languages = () => {
  return (
    <AnimatedSection className="section languages-section">
      <div className="container">
        <h2><FaLanguage /> Languages</h2>
        <div className="languages-list">
          {languages.map((langItem, index) => (
            <div className="language-item card" key={index}>
              <span className="lang-name">{langItem.lang}</span>
              <span className="lang-proficiency">{langItem.proficiency}</span>
            </div>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
};
export default Languages;