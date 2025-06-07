// src/components/Experience/Experience.js
import React from 'react';
import { experiences, sectionSummaries } from '../../data/resumeData';
import AnimatedSection from '../AnimatedSection/AnimatedSection';
import './Experience.scss';
import { FaBuilding, FaCalendarAlt, FaLaptopCode } from 'react-icons/fa';


const Experience = () => {
  return (
    <AnimatedSection className="section experience-section">
      <div className="container">
        <h2>Professional Experience</h2>

        {sectionSummaries.professionalExperience && ( // Check if summary exists
          <p className="section-summary">{sectionSummaries.professionalExperience}</p>
        )}

        {experiences.map((exp, index) => (
          <div className="experience-item card" key={index}>
            <h3>{exp.role}</h3>
            <h4>
              <FaBuilding /> {exp.company}
              {exp.remote && <span className="remote-tag"><FaLaptopCode /> Remote</span>}
              {/* ... dates ... */}
            </h4>
            <ul>
              {exp.responsibilities.map((point, i) => <li key={i}>{point}</li>)}
            </ul>
          </div>
        ))}
      </div>
    </AnimatedSection>
  );
};
export default Experience;