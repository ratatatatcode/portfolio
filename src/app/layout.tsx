import type { Metadata, Viewport } from 'next';
import { Geist } from 'next/font/google';
import './globals.css';
import { cn } from '@/lib/utils';
import { siteConfig } from '@/data/siteConfig';

const geist = Geist({ subsets: ['latin'], variable: '--font-sans' });

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#27272a',
};

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.siteUrl),
  title: {
    default: siteConfig.seo.title,
    template: siteConfig.seo.titleTemplate,
  },
  description: siteConfig.seo.description,
  keywords: [...siteConfig.seo.keywords],
  authors: [{ name: siteConfig.owner.fullName }],
  creator: siteConfig.owner.fullName,
  publisher: siteConfig.owner.fullName,
  applicationName: siteConfig.seo.applicationName,
  alternates: {
    canonical: siteConfig.siteUrl,
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
    url: siteConfig.siteUrl,
    siteName: siteConfig.seo.applicationName,
    title: siteConfig.seo.socialTitle,
    description: siteConfig.seo.socialDescription,
    images: [
      {
        url: siteConfig.seo.previewImage,
        width: 1200,
        height: 630,
        alt: `${siteConfig.owner.displayName} portfolio preview`,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: siteConfig.seo.socialTitle,
    description: siteConfig.seo.socialDescription,
    creator: siteConfig.seo.twitterHandle,
    images: [siteConfig.seo.previewImage],
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
      <body className="scroll-smooth antialiased">{children}</body>
    </html>
  );
}
