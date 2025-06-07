// src/components/Certification/Certification.js
import React from 'react';
import { certification, sectionSummaries } from '../../data/resumeData';
import AnimatedSection from '../AnimatedSection/AnimatedSection';
import './Certification.scss';
import { FaAward, FaUniversity, FaChalkboardTeacher, FaCalendarCheck, FaListUl, FaInfoCircle } from 'react-icons/fa';

const Certification = () => {
    if (!certification || !certification.name) return null;

    const summaryText = sectionSummaries.educationAndCert;

    return (
        <AnimatedSection className="section certification-section-framed-stacked"> {/* New/Modified class */}
            <div className="container">
                <h2 className="framed-section-title"> {/* Keep this title style */}
                    <FaAward />
                    Certification
                </h2>
                {summaryText && (
                    <p className="section-summary">{summaryText}</p>
                )}

                <div className="certification-frame"> {/* Keep the outer frame */}
                    <div className="cert-header-area"> {/* Keep header area */}
                        <h3 className="cert-name-framed">{certification.name}</h3>
                        {certification.program && <p className="cert-program-framed">{certification.program}</p>}
                    </div>

                    {/* MODIFIED: Details are now stacked, not a grid */}
                    <div className="cert-details-stacked-list">
                        <div className="detail-item-stacked">
                            <FaUniversity className="detail-icon-stacked" />
                            <div className="detail-text-stacked">
                                <span className="detail-label-stacked">Issued by</span>
                                <p className="detail-value-stacked">{certification.issuer}</p>
                            </div>
                        </div>

                        {certification.trainingProvider && (
                            <div className="detail-item-stacked">
                                <FaChalkboardTeacher className="detail-icon-stacked" />
                                <div className="detail-text-stacked">
                                    <span className="detail-label-stacked">Training Partner</span>
                                    <p className="detail-value-stacked"><em>{certification.trainingProvider}</em></p>
                                </div>
                            </div>
                        )}

                        {certification.date && (
                            <div className="detail-item-stacked">
                                <FaCalendarCheck className="detail-icon-stacked" />
                                <div className="detail-text-stacked">
                                    <span className="detail-label-stacked">Date of Completion</span>
                                    <p className="detail-value-stacked">{certification.date}</p>
                                </div>
                            </div>
                        )}
                    </div>
                    {/* End of Modified Details Section */}


                    {/* Description and Skills areas can remain structurally similar, but ensure separators are logical */}
                    {(certification.description || (certification.skillsCovered && certification.skillsCovered.length > 0)) && (
                        <div className="cert-additional-info-separator"></div> // New separator if details are not grid
                    )}


                    {certification.description && (
                        <div className="cert-description-area-framed">
                            <h4 className="cert-area-subtitle"><FaInfoCircle /> Overview</h4>
                            <p>{certification.description}</p>
                        </div>
                    )}

                    {certification.skillsCovered && certification.skillsCovered.length > 0 && (
                        <div className="cert-skills-area-framed">
                            <h4 className="cert-area-subtitle"><FaListUl /> Key Skills Validated</h4>
                            <div className="skills-list-flow">
                                {certification.skillsCovered.map(skill => (
                                    <span className="skill-tag cert-skill-tag" key={skill}>{skill}</span>
                                ))}
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </AnimatedSection>
    );
};

export default Certification;