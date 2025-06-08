// src/app/page.js
import React from 'react';
import "./page.scss";
import dynamic from 'next/dynamic';
import Header from '../components/Header/Header';
import HeroSection from '../components/HeroSection/HeroSection';
const ProfileSummary = dynamic(() => import('../components/ProfileSummary/ProfileSummary'));
const AboutMe = dynamic(() => import('../components/AboutMe/AboutMe'));
const Skills = dynamic(() => import('../components/Skills/Skills'));
const TechStackBanner = dynamic(() => import('../components/TechStackBanner/TechStackBanner'));
const Experience = dynamic(() => import('../components/Experience/Experience'));
const Projects = dynamic(() => import('../components/Projects/Projects'));
const Contact = dynamic(() => import('../components/Contact/Contact'));
const Footer = dynamic(() => import('../components/Footer/Footer'));
// import PageSeo from '../components/Seo/PageSeo';
import { contactInfo } from '../data/resumeData.js'; // For JSON-LD sameAs
const YOUR_DOMAIN = "https://syroyce.in";

export async function generateMetadata() {
  const pageTitle = "Sham Roy - Top MERN & Frontend Developer in Kochi";
  const pageDescription = "Expert MERN stack, MEAN stack, React, and Next.js frontend developer in Kochi, Kerala. Building high-performance, engaging web applications.";
  const ogImageUrl = `${YOUR_DOMAIN}/images/Screenshot From 2025-06-08 21-14-52.png`;

  const personJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Sham Roy',
    url: YOUR_DOMAIN + "/",
    jobTitle: 'MERN Stack Developer, Frontend Developer',
    worksFor: { '@type': 'Organization', name: 'Sham Roy (Portfolio)' },
    address: { '@type': 'PostalAddress', addressLocality: 'Kochi', addressRegion: 'KL', addressCountry: 'IN' },
    sameAs: [contactInfo.linkedinUrl, contactInfo.githubUrl], // Ensure contactInfo is accessible here
    knowsAbout: ['MERN Stack', 'MEAN Stack', 'React.js', 'Next.js', 'Frontend Development', 'Kochi Developer']
  };
  return {
    title: pageTitle, // This will be used by title.template from layout.js
    description: pageDescription,
    keywords: ['MERN stack developer Kochi', 'MEAN stack developer Kochi', 'frontend developer Kochi', 'React developer Kochi', 'Next.js developer Kerala', 'web developer India', 'Sham Roy', 'best developer Kochi'],
    alternates: {
      canonical: YOUR_DOMAIN + "/",
    },
    openGraph: {
      title: "Sham Roy - Leading Web & MERN Stack Developer, Kochi", // Specific OG Title
      description: "Portfolio of Sham Roy, a top MERN, MEAN, and frontend developer in Kochi.", // Specific OG Desc
      url: YOUR_DOMAIN + "/",
      images: [
        {
          url: ogImageUrl, // Relative path from /public, or absolute URL
          width: 1200,
          height: 630,
          alt: 'Sham Roy - Portfolio | MERN & Frontend Developer, Kochi',
          type: 'image/jpeg', // Or png
        },
      ],
      // siteName will be inherited from layout.js metadata
      // type: 'website', // Can inherit
      // locale: 'en_IN', // Can inherit
    },
    twitter: {
      card: 'summary_large_image',
      title: "Sham Roy - Leading Web & MERN Stack Developer, Kochi", // Often good to mirror OG title
      description: "Portfolio of Sham Roy, a top MERN, MEAN, and frontend developer in Kochi.",
      images: [ogImageUrl], // Twitter often uses the first OG image
      // creator: '@YourTwitterHandle',
    },
  };
}



export default function Home() {
  // JSON-LD for Person (can also be generated in generateMetadata and passed, but this is fine too)
  const personJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Sham Roy',
    url: YOUR_DOMAIN + "/",
    jobTitle: 'MERN Stack Developer, Frontend Developer',
    worksFor: { '@type': 'Organization', name: 'Sham Roy (Portfolio)' },
    address: { '@type': 'PostalAddress', addressLocality: 'Kochi', addressRegion: 'KL', addressCountry: 'IN' },
    sameAs: [contactInfo.linkedinUrl, contactInfo.githubUrl],
    knowsAbout: ['MERN Stack', 'MEAN Stack', 'React.js', 'Next.js', 'Frontend Development', 'Kochi Developer']
  };

  return (
    <>
      {/* JSON-LD Script Tag - Renders on server and client */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        key="person-jsonld-script" // Add a unique key
      />

      <div className="portfolio-app">
        <Header />
        <HeroSection />
        <main>
          <ProfileSummary id="profile" className="section" />
          <AboutMe className="section" />
          <Skills className="section" />
          <Experience className="section" />
          <Projects id="projects" className="section" />
          <Contact id="contact" className="section" />
          <TechStackBanner className="section" />
        </main>
        <Footer />
      </div>
    </>
  );
}