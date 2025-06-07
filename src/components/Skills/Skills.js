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

        {sectionSummaries.technicalSkills && ( // Check if summary exists
          <p className="section-summary">{sectionSummaries.technicalSkills}</p>
        )}

        <div className="skills-flow-container"> {/* Main container for all skill groups */}
          {technicalSkills.map((categoryItem, index) => (
            <div className="skill-category-flow-item" key={index}> {/* Each category block */}
              <h3>{categoryItem.category}</h3>
              <div className="skills-list-flow"> {/* List of tags within the category */}
                {categoryItem.skills.map(skill => (
                  <span className="skill-tag" key={skill.name}> {/* Global skill-tag style */}
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