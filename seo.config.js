//seo.config.js // created at root just like next.config.js 
const SEO_CONFIG = {
    defaultTitle: "Sham Roy - Expert Web Developer in Kochi (MERN, MEAN, Frontend)",
    titleTemplate: "%s | Sham Roy - Kochi Developer", // %s will be replaced by page title
    description: "Sham Roy, a skilled MERN, MEAN, React, and Next.js frontend developer based in Kochi, Kerala. Delivering high-quality web solutions.",
    openGraph: {
        type: 'website',
        locale: 'en_IN',
        url: 'https://www.syroyce.in/',
        site_name: 'Sham Roy | Web Developer Kochi',
        // You can add a default OG image here too
    },
    twitter: {
        // handle: '@yourTwitterHandle',
        // site: '@yourTwitterHandle',
        cardType: 'summary_large_image',
    },
    // You can add more default configurations like canonical URLs if applicable globally
};
export default SEO_CONFIG;