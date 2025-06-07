"use client";
// src/components/AnimatedSection/AnimatedSection.js
import React from 'react';
import { useInView } from 'react-intersection-observer';
import './AnimatedSection.scss';

const AnimatedSection = ({ children, animationType = 'fadeInUp', threshold = 0.1, triggerOnce = true, className = '' }) => {
    const { ref, inView } = useInView({
        threshold: threshold,
        triggerOnce: triggerOnce,
    });

    return (
        <div
            ref={ref}
            className={`animated-section ${animationType} ${inView ? 'is-visible' : ''} ${className}`}
        >
            {children}
        </div>
    );
};

export default AnimatedSection;