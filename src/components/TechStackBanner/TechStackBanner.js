// src/components/TechStackBanner/TechStackBanner.js
import React from 'react';
// Removed AnimatedSection as we'll handle animation directly for the marquee
import './TechStackBanner.scss';
import {
  SiJavascript, SiTypescript, SiReact, SiNextdotjs, SiNodedotjs, SiExpress,
  SiMongodb, SiFirebase, SiRedux, SiSass, SiHtml5, SiCss3, SiGit,
  SiTailwindcss, SiBootstrap, SiWebpack, SiBabel, SiJest, SiSocketdotio, SiDocker, SiKubernetes, SiGraphql, SiApollographql, SiPostgresql, SiPython, SiJava
  // Add more icons as needed from react-icons/si or react-icons/di
} from 'react-icons/si'; // Using Si for consistency, Di also works

const keyTechPrimary = [
  { name: "JavaScript", icon: <SiJavascript /> },
  { name: "TypeScript", icon: <SiTypescript /> },
  { name: "React", icon: <SiReact /> },
  { name: "Next.js", icon: <SiNextdotjs /> },
  { name: "Node.js", icon: <SiNodedotjs /> },
  { name: "Express.js", icon: <SiExpress /> },
  { name: "MongoDB", icon: <SiMongodb /> },
  { name: "Redux", icon: <SiRedux /> },
  { name: "Tailwind CSS", icon: <SiTailwindcss /> },
  { name: "HTML5", icon: <SiHtml5 /> },
  { name: "CSS3", icon: <SiCss3 /> },
  { name: "Sass", icon: <SiSass /> },
  { name: "Git", icon: <SiGit /> },
];

const keyTechSecondary = [ // Add more or less important ones here for variety
  { name: "Firebase", icon: <SiFirebase /> },
  { name: "Bootstrap", icon: <SiBootstrap /> },
  { name: "Webpack", icon: <SiWebpack /> },
  { name: "Babel", icon: <SiBabel /> },
  { name: "Jest", icon: <SiJest /> },
  { name: "Socket.IO", icon: <SiSocketdotio /> },
  { name: "GraphQL", icon: <SiGraphql /> },
  { name: "Apollo GraphQL", icon: <SiApollographql /> },
  { name: "PostgreSQL", icon: <SiPostgresql /> },
  { name: "Docker", icon: <SiDocker /> },
  // { name: "Kubernetes", icon: <SiKubernetes /> },
  // { name: "Python", icon: <SiPython /> },
  // { name: "Java", icon: <SiJava /> },
];

// Combine and duplicate for seamless marquee effect
const allTechLogos = [...keyTechPrimary, ...keyTechSecondary];
const duplicatedLogos = [...allTechLogos, ...allTechLogos]; // Duplicate the array for marquee

const TechStackBanner = () => {
  return (
    <div className="tech-stack-banner-compact"> {/* Renamed class */}
      <div className="container tech-banner-container">
        {/* Optional Title */}
        {/* <h3 className="tech-banner-title-compact">My Tech Arsenal</h3> */}
        <div className="tech-marquee-wrapper"> {/* Wrapper for overflow hidden */}
          <div className="tech-logo-scroller">
            {duplicatedLogos.map((tech, index) => (
              <div className="tech-logo-item-compact" key={`${tech.name}-${index}`} title={tech.name}>
                {tech.icon}
                {/* <span className="tech-name-compact">{tech.name}</span> */} {/* Keep names off for compactness */}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TechStackBanner;