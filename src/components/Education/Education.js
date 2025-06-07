// src/components/Education/Education.js (Formerly EducationAndCert.js)
import React from 'react';
import { education, sectionSummaries } from '../../data/resumeData';
import AnimatedSection from '../AnimatedSection/AnimatedSection';
import './Education.scss'; // Ensure you have Education.scss or rename old one
import { FaGraduationCap, FaUniversity, FaCalendarAlt, FaBuilding } from 'react-icons/fa'; // FaBuilding for institution

const Education = () => {
    return (
        <AnimatedSection className="section education-section">
            <div className="container">
                <h2><FaGraduationCap /> Education</h2>
                {sectionSummaries.educationAndCert && ( // Still using this summary key
                    <p className="section-summary">{sectionSummaries.educationAndCert}</p>
                )}
                <div className="education-items-container">
                    {education.map((edu, index) => (
                        <div className="education-item card" key={index}> {/* Using global .card style */}
                            <h3>{edu.degree}</h3>
                            {edu.institution && <h4 className="edu-institution"><FaBuilding /> {edu.institution}</h4>}
                            {edu.board && <p className="edu-board">Board/University: {edu.board}</p>}
                            {edu.dates && <p className="edu-dates"><FaCalendarAlt /> {edu.dates}</p>}
                            {edu.details && edu.details.length > 0 && (
                                <ul className="edu-details-list">
                                    {edu.details.map((detail, i) => <li key={i}>{detail}</li>)}
                                </ul>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </AnimatedSection>
    );
};
export default Education;