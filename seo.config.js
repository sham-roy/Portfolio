const SEO_CONFIG = {
    defaultTitle: "Sham Roy - Web Developer in Kochi (MERN, MEAN, Frontend)",
    titleTemplate: "%s | Sham Roy - Kochi Developer",
    description:
        "Sham Roy, MERN, MEAN, React, and Next.js frontend developer based in Kochi, Kerala. Delivering high-quality web solutions.",

    // Open Graph (used by Facebook, LinkedIn, etc.)
    openGraph: {
        type: "website",
        locale: "en_IN",
        url: "https://www.syroyce.in/",
        site_name: "Sham Roy | Web Developer Kochi",
        images: [
            {
                url: "https://www.syroyce.in/images/main.png",
                width: 1200,
                height: 630,
                alt: "Sham Roy - Full Stack Developer from Kochi",
            },
        ],
    },

    // Twitter meta tags
    twitter: {
        handle: "@SyRoyce____", // Your Twitter handle
        site: "@SyRoyce____",   // Displayed site handle on cards
        cardType: "summary_large_image",
    },

    // Canonical URL (SEO best practice)
    alternates: {
        canonical: "https://www.syroyce.in/",
    },

    // Modern SEO tags
    additionalMetaTags: [
        { name: "author", content: "Sham Roy" },
        { name: "keywords", content: "Sham Roy, Web Developer, Frontend Developer, Next.js, React.js, Angular, MERN stack, MEAN stack, Kochi, Kerala" },
        { name: "robots", content: "index, follow" },
        { name: "theme-color", content: "#0A192F" },
        { httpEquiv: "Content-Type", content: "text/html; charset=UTF-8" },
    ],

    // SOCIAL MEDIA INTEGRATIONS
    socialLinks: {
        facebook: "https://www.facebook.com/shyam.roy.50746444",
        instagram: "https://www.instagram.com/sy.royce____",
        linkedin: "https://www.linkedin.com/in/shyam-roy/",
        twitter: "https://twitter.com/SyRoyce____",
        // snapchat: "https://www.snapchat.com/add/your-handle", 
        // reddit: "https://www.reddit.com/user/your-username", 
        // whatsapp: "https://wa.me/91XXXXXXXXXX",
        github: "https://github.com/sham-roy",
    },
};

export default SEO_CONFIG;
