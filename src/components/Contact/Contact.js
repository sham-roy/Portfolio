// src/components/Contact/Contact.js
"use client";


// src/components/Contact/Contact.js
import React from 'react';
import { contactInfo, contactSectionInfo } from '../../data/resumeData';
import AnimatedSection from '../AnimatedSection/AnimatedSection';
import './Contact.scss';
import { FaEnvelope, FaLinkedin, FaGithub, FaWhatsapp, FaPaperPlane, FaUser, FaAt } from 'react-icons/fa';
import { MdMessage } from 'react-icons/md';

const Contact = () => {
    const heading = contactSectionInfo?.heading || "Get In Touch";
    const subheading = contactSectionInfo?.subheading || "I'm always open to discussing new projects or opportunities. Let's connect!";

    return (
        <AnimatedSection className="section contact-section-two-col-refined" id="contact"> {/* New main class */}
            <div className="container" id='contact'>
                <div className="section-header-contact"> {/* Consistent section header */}
                    <h2>{heading}</h2>
                    {subheading && (
                        <p className="contact-intro-text">{subheading}</p>
                    )}
                </div>

                <div className="contact-content-grid"> {/* Grid for the two columns */}

                    {/* Right Column: Contact Form */}
                    <div className="contact-form-panel-main"> {/* Consistent panel class */}
                        <h3 className="panel-title">Send a Message</h3>
                        <form
                            className="main-contact-form" // Consistent form class
                            onSubmit={(e) => {
                                e.preventDefault();
                                alert("Thank you for your interest. This section is currently under development. We appreciate your patience.");
                                e.target.reset();
                            }}
                        >
                            <div className="form-row-contact">
                                <div className="form-group-contact">
                                    <label htmlFor="contactName"><FaUser /> Your Name</label>
                                    <input type="text" id="contactName" name="name" placeholder="e.g., Jane Doe" required />
                                </div>
                                <div className="form-group-contact">
                                    <label htmlFor="contactEmail"><FaAt /> Your Email</label>
                                    <input type="email" id="contactEmail" name="email" placeholder="e.g., jane.doe@example.com" required />
                                </div>
                            </div>
                            <div className="form-group-contact">
                                <label htmlFor="contactSubject">Subject (Optional)</label>
                                <input type="text" id="contactSubject" name="subject" placeholder="e.g., Project Inquiry" />
                            </div>
                            <div className="form-group-contact">
                                <label htmlFor="contactMessage"><MdMessage /> Your Message</label>
                                <textarea id="contactMessage" name="message" rows="5" placeholder="Tell me more..." required></textarea>
                            </div>
                            <button type="submit" className="btn-submit-contact">
                                <FaPaperPlane /> Send Message
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </AnimatedSection>
    );
};

export default Contact;