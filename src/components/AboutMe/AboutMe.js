// src/components/AboutMe/AboutMe.js
import React from 'react';
import { aboutMe } from '../../data/resumeData';
import AnimatedSection from '../AnimatedSection/AnimatedSection';
import './AboutMe.scss';
import { FaUserTie, FaLightbulb, FaUsers, FaRocket } from 'react-icons/fa'; // Example icons

const AboutMe = () => {
    if (!aboutMe) return null;
    return (
        <AnimatedSection className="section about-me-section">
            <div className="container" id='profile'>
                <h2><FaUserTie /> About Me</h2>
                <div className="about-me-content">
                    {aboutMe.intro && <p className="about-intro">{aboutMe.intro}</p>}
                    {aboutMe.philosophy && (
                        <div className="about-subsection">
                            <h3><FaLightbulb /> My Philosophy</h3>
                            <p>{aboutMe.philosophy}</p>
                        </div>
                    )}
                    {aboutMe.workingStyle && (
                        <div className="about-subsection">
                            <h3><FaUsers /> Working Style & Collaboration</h3>
                            <p>{aboutMe.workingStyle}</p>
                        </div>
                    )}
                    {aboutMe.aspirations && (
                        <div className="about-subsection">
                            <h3><FaRocket /> Aspirations</h3>
                            <p>{aboutMe.aspirations}</p>
                        </div>
                    )}
                </div>
            </div>
        </AnimatedSection>
    );
};
export default AboutMe;