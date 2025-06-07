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
import Education from '../components/Education/Education'; // Renamed
import Certification from '../components/Certification/Certification';
import AboutMe from '../components/AboutMe/AboutMe'; // New
import Contact from '../components/Contact/Contact'; // Import
import TechStackBanner from '../components/TechStackBanner/TechStackBanner';
import ThreeJsBackground from '@components/components/ThreeJsBackground/ThreeJsBackground';


export default function Home() {
  return (
    <div className="portfolio-app">
      <Header />
      <main>
        <ProfileSummary />
        <AboutMe />
        <Skills />
        <Experience />
        <Projects />
        <Contact />
        {/* <Education /> 
        <Certification />  */}
        <Languages />
        <TechStackBanner />
      </main>
      <Footer />
    </div>
  );
}
