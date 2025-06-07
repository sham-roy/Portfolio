// src/components/ProfileSummary/ProfileSummary.js
import React from 'react';
import { profileSummary } from '../../data/resumeData';
import AnimatedSection from '../AnimatedSection/AnimatedSection';
import './ProfileSummary.scss';

const ProfileSummary = () => {
  return (
    <AnimatedSection className="section profile-summary-section">
      <div className="container">
        <h2>Professional Summary</h2>

        {profileSummary.map((paragraph, index) => (
          <p key={index}>{paragraph}</p>
        ))}
      </div>
    </AnimatedSection>
  );
};
export default ProfileSummary;