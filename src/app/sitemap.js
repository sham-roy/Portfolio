// src/app/sitemap.js
const SITE_URL = "https://www.syroyce.in";


export default function sitemap() {
    const lastModified = new Date().toISOString();

    return [
        {
            url: SITE_URL,
            lastModified: lastModified,
            changeFrequency: 'weekly',
            // 'always', 'hourly', 'daily', 'weekly', 'monthly', 'yearly', 'never'
            priority: 1.0,
        },
        // {
        //   url: `${SITE_URL}/another-page`,
        //   lastModified: lastModified,
        //   changeFrequency: 'yearly',
        //   priority: 0.8,
        // },
    ];
}