// src/components/EducationAndCert/EducationAndCert.js
import React from 'react';
import { education, certification, sectionSummaries } from '../../data/resumeData';
import AnimatedSection from '../AnimatedSection/AnimatedSection';
import './EducationAndCert.scss';
import { FaGraduationCap, FaCertificate, FaUniversity, FaCalendarAlt } from 'react-icons/fa';


const EducationAndCert = () => {
    return (
        <AnimatedSection className="section education-cert-section">
            <div className="container">
                <div className="education-column">
                    <h2><FaGraduationCap /> Education</h2>
                    {sectionSummaries.educationAndCert && ( // Check if summary exists
                        <p className="section-summary education-cert-summary">{sectionSummaries.educationAndCert}</p>
                    )}

                    {education.map((edu, index) => (
                        <div className="education-item card" key={index}>
                            <h3>{edu.degree}</h3>
                            <h4><FaUniversity /> {edu.institution}</h4>
                            <p className="dates"><FaCalendarAlt /> {edu.dates}</p>
                        </div>
                    ))}
                </div>
                <div className="certification-column">
                    <h2><FaCertificate /> Certification</h2>
                    <div className="certification-item card">
                        <h3>{certification.name}</h3>
                    </div>
                </div>
            </div>
        </AnimatedSection>
    );
};
export default EducationAndCert;