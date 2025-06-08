import React from 'react';
import "./page.scss";
import Header from '../components/Header/Header';
import ProfileSummary from '../components/ProfileSummary/ProfileSummary';
import Skills from '../components/Skills/Skills';
import Experience from '../components/Experience/Experience';
import Projects from '../components/Projects/Projects';
// import EducationAndCert from '../components/EducationAndCert/EducationAndCert'; // Updated
import Languages from '../components/Languages/Languages';
import Footer from '../components/Footer/Footer';
import Education from '../components/Education/Education'; 
import Certification from '../components/Certification/Certification';
import AboutMe from '../components/AboutMe/AboutMe';
import Contact from '../components/Contact/Contact'; 
import TechStackBanner from '../components/TechStackBanner/TechStackBanner';
import ThreeJsBackground from '@components/components/ThreeJsBackground/ThreeJsBackground';
import HeroSection from '../components/HeroSection/HeroSection';

export default function Home() {
  return (
    <div className="portfolio-app">
      <Header />
      <HeroSection />
      <main>
        <ProfileSummary id="profile" />
        <AboutMe />
        <Skills />
        <Experience />
        <Projects id="projects" />
        <Contact id="contact" />
        {/* <Education />  */}
        {/* <Certification />   */}
        <Languages />
        <TechStackBanner />
      </main>
      <Footer />
    </div>
  );
}
