// src/components/Projects/Projects.js
import React from 'react';
import { keyProjects, sectionSummaries } from '../../data/resumeData';
import AnimatedSection from '../AnimatedSection/AnimatedSection';
import './Projects.scss';
import { FaCodeBranch, FaExternalLinkAlt, FaLink, FaGithubSquare, FaLaptopCode } from 'react-icons/fa';
// Import specific library icons needed by getLibraryIcon (if not already imported globally)
import { SiReact, SiRedux, SiSocketdotio, SiAngular, SiChartdotjs, SiBootstrap, SiRazorpay, SiNextdotjs, SiExpress, SiMongodb } from 'react-icons/si';
import { DiNodejsSmall, DiFirebase } from 'react-icons/di';
import ThreeJsBackground from '../ThreeJsBackground/ThreeJsBackground';



// Helper function to get icon for a library (copied from resumeData.js for direct use)
const getLibraryIcon = (libraryName) => {
  const lowerName = libraryName.toLowerCase();
  if (lowerName.includes('react')) return <SiReact />;
  if (lowerName.includes('redux')) return <SiRedux />;
  if (lowerName.includes('socket.io')) return <SiSocketdotio />;
  if (lowerName.includes('angular')) return <SiAngular />;
  if (lowerName.includes('chart.js')) return <SiChartdotjs />;
  if (lowerName.includes('bootstrap')) return <SiBootstrap />;
  // if (lowerName.includes('material')) return <SiMaterialui />;
  if (lowerName.includes('razorpay')) return <SiRazorpay />;
  // if (lowerName.includes('agora')) return <SiAgorai />;
  if (lowerName.includes('next.js')) return <SiNextdotjs />;
  if (lowerName.includes('node.js')) return <DiNodejsSmall />;
  if (lowerName.includes('express')) return <SiExpress />;
  if (lowerName.includes('mongodb')) return <SiMongodb />;
  if (lowerName.includes('firebase')) return <DiFirebase />;
  // Add more as needed
  return null;
};


const Projects = () => {
  return (
    <AnimatedSection className="section projects-section">

      <div className="container" id='projects'>
        <h2>Key Projects</h2>
        {sectionSummaries.keyProjects && (
          <p className="section-summary">{sectionSummaries.keyProjects}</p>
        )}
        <div className="projects-grid">
          {keyProjects.map((project, index) => (
            <div className="project-item card" key={project.name}>
              <h3>
                {project.name}
                <span className="project-links">
                  {project.liveLink && (
                    <a href={project.liveLink} target="_blank" rel="noopener noreferrer" title="View Live Project">
                      <FaLink /> Live
                    </a>
                  )}
                  {project.githubLink && (
                    <a href={project.githubLink} target="_blank" rel="noopener noreferrer" title="View Code on GitHub">
                      <FaGithubSquare /> Code
                    </a>
                  )}
                </span>
              </h3>
              {project.linkDisplay && <p className="project-link-display">{project.linkDisplay}</p>}
              {project.role && <h4 className="project-role">Role: {project.role}</h4>}

              {project.description && <p className="project-description-text">{project.description}</p>}

              {project.libraries && project.libraries.length > 0 && (
                <div className="project-libraries">
                  <strong><FaCodeBranch /> Libraries & Packages:</strong>
                  <div className="skills-list-flow">
                    {project.libraries.map(lib => (
                      <span className="skill-tag project-library-tag" key={lib}>
                        {getLibraryIcon(lib)} {lib}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
};
export default Projects;