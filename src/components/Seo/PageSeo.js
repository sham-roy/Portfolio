// // src/components/Seo/PageSeo.js
// "use client"; 
// import { NextSeo } from 'next-seo';
// import React from 'react';

// // This component will receive all the SEO props and render NextSeo
// const PageSeo = ({ title, description, canonical, openGraph, twitter, additionalMetaTags, jsonLd }) => {
//     return (
//         <>
//             <NextSeo
//                 title={title}
//                 description={description}
//                 canonical={canonical}
//                 openGraph={openGraph}
//                 twitter={twitter}
//                 additionalMetaTags={additionalMetaTags}
//             // If you have other specific next-seo props, pass them here
//             />
//             {/* Render JSON-LD script if provided */}
//             {jsonLd && (
//                 <script
//                     type="application/ld+json"
//                     dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
//                     key="page-jsonld" // Unique key for the script tag
//                 />
//             )}
//         </>
//     );
// };

// export default PageSeo;