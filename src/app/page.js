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
const DOMAIN = "https://syroyce.in";

export async function generateMetadata() {
  const DOMAIN = "https://syroyce.in";
  const pageTitle = "Sham Roy - Top MERN & Frontend Developer in Kochi";
  const pageDescription = "Expert MERN stack, MEAN stack, React, and Next.js frontend developer in Kochi, Kerala. Building high-performance, engaging web applications.";
  const ogImageUrl = `${DOMAIN}/images/main.png`;

  const personJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Sham Roy',
    url: DOMAIN + "/",
    jobTitle: 'MERN Stack Developer, Frontend Developer',
    worksFor: { '@type': 'Organization', name: 'Sham Roy (Portfolio)' },
    address: { '@type': 'PostalAddress', addressLocality: 'Kochi', addressRegion: 'KL', addressCountry: 'IN' },
    sameAs: [
      contactInfo.linkedinUrl,
      contactInfo.githubUrl,
      contactInfo.instagramUrl,
      contactInfo.twitterUrl,
      contactInfo.facebookUrl,
      // contactInfo.snapchatUrl,
      // contactInfo.redditUrl,
      // contactInfo.whatsappUrl,
    ],
    knowsAbout: ['MERN Stack', 'MEAN Stack', 'React.js', 'Next.js', 'Frontend Development', 'Kochi Developer'],
  };

  return {
    title: pageTitle,
    description: pageDescription,
    keywords: [
      'MERN stack developer Kochi',
      'MEAN stack developer Kochi',
      'frontend developer Kochi',
      'React developer Kochi',
      'Next.js developer Kerala',
      'web developer India',
      'Sham Roy',
      'best developer Kochi',
    ],
    alternates: {
      canonical: DOMAIN + "/",
    },
    openGraph: {
      title: pageTitle,
      description: pageDescription,
      url: DOMAIN + "/",
      siteName: "Sham Roy Portfolio",
      images: [
        {
          url: ogImageUrl,
          width: 1200,
          height: 630,
          alt: 'Sham Roy - Portfolio | MERN & Frontend Developer, Kochi',
          type: 'image/jpeg',
        },
      ],
      type: 'website',
      locale: 'en_IN',
    },
    twitter: {
      card: 'summary_large_image',
      title: pageTitle,
      description: pageDescription,
      images: [ogImageUrl],
      site: '@SyRoyce____',
      creator: '@SyRoyce____',
    },
    // Optional manual meta tags for Facebook/LinkedIn if you want to add:
    meta: [
      { property: 'og:type', content: 'website' },
      { property: 'og:title', content: pageTitle },
      { property: 'og:description', content: pageDescription },
      { property: 'og:url', content: DOMAIN + '/' },
      { property: 'og:image', content: ogImageUrl },
      { property: 'og:site_name', content: 'Sham Roy Portfolio' },
      { property: 'linkedin:owner', content: 'https://www.linkedin.com/in/shyam-roy/' },
      { property: 'fb:profile_id', content: 'shyam.roy.50746444' }, // Optional
    ],
  };
}




export default function Home() {
  // JSON-LD for Person (can also be generated in generateMetadata and passed, but this is fine too)
  const personJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Sham Roy',
    url: DOMAIN + "/",
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