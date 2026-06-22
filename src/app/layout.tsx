import type { Metadata, Viewport } from 'next';
import { Poppins, Geist } from 'next/font/google';
import './globals.css';
import { cn } from '@/lib/utils';

const geist = Geist({ subsets: ['latin'], variable: '--font-sans' });

const poppins = Poppins({
  variable: '--font-poppins',
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
});

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#FE3905',
};

export const metadata: Metadata = {
  metadataBase: new URL('https://magnaye.online'),
  title: {
    default: 'Magnaye | Software Developer',
    template: '%s | James Magnaye',
  },
  description:
    'James Michael Magnaye is a full stack developer and UI/UX-focused creator building modern websites, web applications, and AI-powered digital experiences for clients and startups.',
  keywords: [
    'James Magnaye',
    'James Michael',
    'Magnaye',
    'Full Stack Developer',
    'Next.js Developer',
    'React Developer',
    'UI/UX Designer',
    'Software Developer Philippines',
    'Freelance Web Developer',
    'Portfolio Website',
    'Web Application Developer',
  ],
  authors: [{ name: 'James Michael Magnaye' }],
  creator: 'James Michael Magnaye',
  publisher: 'James Michael Magnaye',
  applicationName: 'Magnaye Portfolio',
  alternates: {
    canonical: 'https://magnaye.online',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-snippet': -1,
      'max-image-preview': 'large',
      'max-video-preview': -1,
    },
  },
  manifest: '/icons/site.webmanifest',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://magnaye.online',
    siteName: 'James Magnaye Portfolio',
    title: 'James Magnaye | Full Stack Developer & UI/UX Engineer',
    description:
      'Full stack developer and UI/UX designer creating modern websites, web apps, and AI-powered experiences.',
    images: [
      {
        url: '/logo/profile.png',
        width: 1200,
        height: 630,
        alt: 'James Magnaye portfolio preview',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'James Magnaye | Full Stack Developer & UI/UX Engineer',
    description:
      'Full stack developer and UI/UX-focused designer creating modern websites, web apps, and AI-powered experiences.',
    creator: '@ratatatatcode',
    images: ['/logo/profile.png'],
  },
  icons: {
    icon: '/logo/logo.png',
    shortcut: '/logo/logo.png',
    apple: '/logo/logo.png',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className={cn('font-sans', geist.variable)}>
      <body className={`${poppins.variable} scroll-smooth antialiased`}>{children}</body>
    </html>
  );
}
