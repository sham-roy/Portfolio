// src/app/layout.js
import './globals.scss';
import SEO_CONFIG from '../../seo.config.js';
import { Roboto, Montserrat } from 'next/font/google';

const roboto = Roboto({
  weight: ['300', '400', '500', '700'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-roboto',
  preload: true,
});

const montserrat = Montserrat({
  weight: ['300', '400', '500', '600', '700', '800'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-montserrat',
  preload: true,
});

export const metadata = {
  metadataBase: new URL(SEO_CONFIG.openGraph.url),
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
    images: [
      {
        url: '/images/main.png',
        width: 1200,
        height: 630,
        alt: 'Sham Roy - Full Stack Developer from Kochi',
      },
    ],
  },
  twitter: {
    card: SEO_CONFIG.twitter.cardType,
    site: SEO_CONFIG.twitter.site,
    creator: SEO_CONFIG.twitter.handle,
  },
  icons: {
    icon: '/favicon.ico',
  },
  manifest: '/site.webmanifest',
  themeColor: '#0A192F',
  keywords: [
    'Sham Roy', 'Web Developer', 'Frontend Developer', 'Next.js',
    'React.js', 'Angular', 'MERN stack', 'MEAN stack', 'Kochi', 'Kerala'
  ],
  authors: [{ name: 'Sham Roy', url: SEO_CONFIG.openGraph.url }],
  robots: {
    index: true,
    follow: true,
    nocache: false,
  },
  alternates: {
    canonical: SEO_CONFIG.openGraph.url,
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${roboto.variable} ${montserrat.variable}`}>
      <body>{children}</body>
    </html>
  );
}
