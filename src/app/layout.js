// src/app/layout.js
import "./globals.scss";
import SEO_CONFIG from '../../seo.config.js';
import { Roboto, Montserrat } from 'next/font/google';

const roboto = Roboto({ /* ... your config ... */
  weight: ['300', '400', '500', '700'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-roboto',
  preload: true,
});
const montserrat = Montserrat({ /* ... your config ... */
  weight: ['300', '400', '500', '600', '700', '800'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-montserrat',
  preload: true,
});

export const metadata = {
  metadataBase: new URL(SEO_CONFIG.openGraph.url), // From your seo.config.js
  title: {
    default: SEO_CONFIG.defaultTitle,
    template: SEO_CONFIG.titleTemplate,
  },
  description: SEO_CONFIG.description,
  openGraph: {
    type: SEO_CONFIG.openGraph.type,
    locale: SEO_CONFIG.openGraph.locale,
    url: SEO_CONFIG.openGraph.url,
    siteName: SEO_CONFIG.openGraph.site_name, // Note: Next.js uses siteName
    // You can add a default OG image here if it's an ABSOLUTE URL
    // images: [{ url: '/default-og.jpg', width: 1200, height: 630, alt: 'Default Site Image' }],
  },
  twitter: {
    card: SEO_CONFIG.twitter.cardType === 'summary_large_image' ? 'summary_large_image' : 'summary',
    // site: '@YourTwitterSiteHandle', // Define in seo.config.js or here
    // creator: '@YourTwitterCreatorHandle', // Define in seo.config.js or here
  },
  // Add other global metadata like icons, manifest, theme-color etc.
  // icons: { icon: '/favicon.ico' },
  // manifest: '/site.webmanifest',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${roboto.variable} ${montserrat.variable}`}>
      <body>
        {children}
      </body>
    </html>
  );
}