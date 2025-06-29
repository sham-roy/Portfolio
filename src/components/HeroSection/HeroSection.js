// src/components/HeroSection/HeroSection.js
import React from 'react';
import ThreeJsBackground from '../ThreeJsBackground/ThreeJsBackground'; // Your existing 3D background
import AnimatedSection from '../AnimatedSection/AnimatedSection'; // For text animations
import './HeroSection.scss';
import { contactInfo } from '../../data/resumeData'; // Assuming name and title are here

const HeroSection = () => {
    return (
        <section className="hero-section" id="hero"> {/* id for potential nav linking */}

            <ThreeJsBackground
                particleCount={200}
                particleColor="#FFFFFF"
                particleBaseSize={0.1}
                spreadFactor={15}
                mouseParallaxStrength={1.0}
            />

            <div className="container hero-content">
                <AnimatedSection animationType="fadeInUp" delay={0.1}>
                    <h1 className="hero-title">Hi, I&apos;m {contactInfo.name}</h1>
                </AnimatedSection>
                <AnimatedSection animationType="fadeInUp" delay={0.3}>
                    <p className="hero-subtitle">{contactInfo.title || "Mearn Stack Developer"}</p>
                </AnimatedSection>
                <AnimatedSection animationType="fadeInUp" delay={0.5}>
                    <p className="hero-description">
                        I build engaging and performant web applications with a focus on clean code and great user experiences.
                        {/* Add a short, impactful sentence or two about yourself */}
                    </p>
                </AnimatedSection>
                <AnimatedSection animationType="fadeInUp" delay={0.7}>
                    <a href="#contact" className="btn hero-cta-button">Let&apos;s Connect</a>
                    {/* Or link to projects: <a href="#projects" className="btn hero-cta-button">View My Work</a> */}
                </AnimatedSection>
            </div>
        </section>
    );
};

export default HeroSection;