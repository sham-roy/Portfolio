// src/components/Skills/Skills.js
import React from 'react';
import { sectionSummaries, technicalSkills } from '../../data/resumeData';
import AnimatedSection from '../AnimatedSection/AnimatedSection';
import './Skills.scss';

const Skills = () => {
  return (
    <AnimatedSection className="section skills-section">
      <div className="container">
        <h2>Technical Skills</h2>

        {sectionSummaries.technicalSkills && (
          <p className="section-summary">{sectionSummaries.technicalSkills}</p>
        )}

        <div className="skills-flow-container">
          {technicalSkills.map((categoryItem, index) => (
            <div className="skill-category-flow-item" key={index}>
              <h3>{categoryItem.category}</h3>
              <div className="skills-list-flow">
                {categoryItem.skills.map(skill => (
                  <span className="skill-tag" key={skill.name}>
                    {skill.icon} {skill.name}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
};
export default Skills;