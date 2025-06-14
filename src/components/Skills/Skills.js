// src/components/Skills/Skills.js
"use client"; // Add this if AnimatedSection or this component uses client hooks/interaction
// react-masonry-css itself doesn't strictly require this component to be client,
// but AnimatedSection likely does.

import React from 'react';
import Masonry from 'react-masonry-css'; // Import the Masonry component
import { sectionSummaries, technicalSkills } from '../../data/resumeData'; // Ensure path is correct
import AnimatedSection from '../AnimatedSection/AnimatedSection'; // Assuming this is a client component
import './Skills.scss'; // We will update this SCSS

const Skills = () => {
  // Define breakpoint columns for the masonry layout
  // This object tells Masonry how many columns to use at different viewport widths
  const breakpointColumnsObj = {
    default: 3,       // Default number of columns (for screens wider than the largest breakpoint)
    1100: 3,          // 3 columns when screen width is 1100px or less
    992: 2,           // 2 columns when screen width is 992px or less
    768: 2,           // 2 columns when screen width is 768px or less
    576: 1            // 1 column when screen width is 576px or less
  };

  return (
    <AnimatedSection className="section skills-section-masonry"> {/* Updated class name */}
      <div className="container">
        <div className="section-header-skills"> {/* Optional: for centering title */}
          <h2>Technical Proficiencies</h2>
          {sectionSummaries.technicalSkills && (
            <p className="section-summary skills-summary">{sectionSummaries.technicalSkills}</p>
          )}
        </div>

        <Masonry
          breakpointCols={breakpointColumnsObj}
          className="skills-masonry-grid-container" // Custom class for the main masonry container
          columnClassName="skills-masonry-grid_column" // Custom class for each generated column
        >
          {/* Map through your technicalSkills data to render each item */}
          {technicalSkills.map((categoryItem, index) => (
            <div className="skill-category-card" key={index}> {/* This is your masonry item */}
              <h3>{categoryItem.category}</h3>
              <div className="skills-list-tags"> {/* Contains the actual skill tags */}
                {categoryItem.skills.map(skill => (
                  <span className="skill-tag" key={skill.name}> {/* Uses global .skill-tag style */}
                    {skill.icon} {skill.name}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </Masonry>
      </div>
    </AnimatedSection>
  );
};

export default Skills;