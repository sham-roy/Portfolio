// src/app/page.js
import React from 'react';
import "./page.scss";
// ... main component imports
import Header from '../components/Header/Header';
import HeroSection from '../components/HeroSection/HeroSection';
import ProfileSummary from '../components/ProfileSummary/ProfileSummary';
import AboutMe from '../components/AboutMe/AboutMe';
import Skills from '../components/Skills/Skills';
import TechStackBanner from '../components/TechStackBanner/TechStackBanner';
import Experience from '../components/Experience/Experience';
import Projects from '../components/Projects/Projects';
import Contact from '../components/Contact/Contact';
import Footer from '../components/Footer/Footer';

import PageSeo from '../components/Seo/PageSeo';
import { contactInfo } from '../data/resumeData.js'; // For JSON-LD sameAs

const YOUR_DOMAIN = process.env.NEXT_PUBLIC_SITE_URL || "https://www.yourdomain.com";

// --- Page-specific Metadata using Next.js App Router convention for title/description defaults ---
// This will work alongside PageSeo. PageSeo will provide more detailed OG/Twitter/JSON-LD tags.
// The title from generateMetadata will be templated by layout.js.
// The title in PageSeo will be the final one displayed in the browser tab if different.
export async function generateMetadata() {
  // You can fetch data here if needed for metadata
  const pageTitle = "Sham Roy - Top MERN & Frontend Developer in Kochi";
  const pageDescription = "Expert MERN stack, MEAN stack, React, and Next.js frontend developer in Kochi, Kerala. Building high-performance, engaging web applications.";

  return {
    title: pageTitle,
    description: pageDescription,
    alternates: {
      canonical: YOUR_DOMAIN + "/",
    },
    // Basic OG/Twitter can be here, but PageSeo will provide more detail
    // openGraph: {
    //   title: pageTitle,
    //   description: pageDescription,
    //   url: YOUR_DOMAIN + "/",
    //   siteName: "Sham Roy Portfolio", // From your seo.config.js equivalent
    // },
  };
}


export default function Home() {
  // Define props for PageSeo
  const seoProps = {
    title: "Sham Roy - Top MERN & Frontend Developer in Kochi", // This title will be used by NextSeo
    description: "Expert MERN stack, MEAN stack, React, and Next.js frontend developer in Kochi, Kerala. Building high-performance, engaging web applications.",
    canonical: YOUR_DOMAIN + "/",
    openGraph: {
      url: YOUR_DOMAIN + "/",
      title: "Sham Roy - Leading Web & MERN Stack Developer, Kochi",
      description: "Portfolio of Sham Roy, a top MERN, MEAN, and frontend developer in Kochi.",
      images: [
        {
          url: `${YOUR_DOMAIN}/sham-roy-og-image.jpg`,
          width: 1200,
          height: 630,
          alt: 'Sham Roy - Portfolio | MERN & Frontend Developer, Kochi',
          type: 'image/jpeg',
        },
      ],
    },
    twitter: {
      cardType: 'summary_large_image',
      // handle: '@TwitterHandle',
    },
    additionalMetaTags: [
      {
        name: 'keywords',
        content: 'MERN stack developer Kochi, MEAN stack developer Kochi, frontend developer Kochi, React developer Kochi, Next.js developer Kerala, web developer India, Sham Roy, best developer Kochi'
      },
    ],
    jsonLd: { // Pass the JSON-LD object
      '@context': 'https://schema.org',
      '@type': 'Person',
      name: 'Sham Roy',
      url: YOUR_DOMAIN + "/",
      jobTitle: 'MERN Stack Developer, Frontend Developer',
      worksFor: { '@type': 'Organization', name: 'Sham Roy (Portfolio)' },
      address: { '@type': 'PostalAddress', addressLocality: 'Kochi', addressRegion: 'KL', addressCountry: 'IN' },
      sameAs: [contactInfo.linkedinUrl, contactInfo.githubUrl],
      knowsAbout: ['MERN Stack', 'MEAN Stack', 'React.js', 'Next.js', 'Frontend Development', 'Kochi Developer']
    }
  };

  return (
    <>
      <PageSeo {...seoProps} /> {/* Use the Client Component for detailed SEO tags */}

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