// src/app/layout.js
import "./globals.scss";
import SEO_CONFIG from '../../seo.config';

// Import next/font
import { Roboto, Montserrat } from 'next/font/google';

// Configure Roboto font
const roboto = Roboto({
  weight: ['300', '400', '500', '700'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-roboto',
  preload: true,
});

// Configure Montserrat font
const montserrat = Montserrat({
  weight: ['300', '400', '500', '600', '700', '800'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-montserrat',
  preload: true,
});

// Use Next.js App Router's built-in metadata object for global defaults
export const metadata = {
  metadataBase: new URL(SEO_CONFIG.openGraph.url), // Ensure SEO_CONFIG.openGraph.url is your full base URL
  title: {
    default: SEO_CONFIG.defaultTitle,
    template: SEO_CONFIG.titleTemplate,
  },
  description: SEO_CONFIG.description,
  openGraph: {
    type: SEO_CONFIG.openGraph.type,
    locale: SEO_CONFIG.openGraph.locale,
    url: SEO_CONFIG.openGraph.url,
    siteName: SEO_CONFIG.openGraph.site_name,
  },
  twitter: {
    card: SEO_CONFIG.twitter.cardType === 'summary_large_image' ? 'summary_large_image' : 'summary',
  },
};

export default function RootLayout({ children }) {
  return (
    // Apply the font variables to the <html> tag
    <html lang="en" className={`${roboto.variable} ${montserrat.variable}`}>
      <body>
        {children}
      </body>
    </html>
  );
}