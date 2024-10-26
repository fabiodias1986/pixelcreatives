import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./layout.css";
import Nav from "@/components/Nav/Nav";
import FooterInfo from "@/components/FooterInfo/FooterInfo";
import Footer from "@/components/Footer/Footer";
import Head from "next/head";
import { Suspense } from "react";
import LoadingSpinner from '@/components/loading/Loading'
import Script from 'next/script'

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: {
    default: 'Pixel Creatives',
    template: '%s | Pixel Creatives',
  },
  description: 'A Pixel Creatives é uma agência líder em webdesign e marketing digital em Portugal. Oferecemos soluções criativas e inovadoras para impulsionar o seu negócio online.',
  keywords: ['webdesign', 'marketing digital', 'SEO', 'design responsivo', 'branding', 'Portugal', 'agência digital'],
  authors: [{ name: 'Pixel Creatives' }],
  creator: 'Pixel Creatives',
  publisher: 'Pixel Creatives',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://www.pixelcreatives.pt'),
  alternates: {
    canonical: '/',
    languages: {
      'pt-PT': '/',
      'en-US': '/en',
    },
  },
  openGraph: {
    title: 'Pixel Creatives | Agência de Webdesign e Marketing Digital',
    description: 'Transforme sua presença online com a Pixel Creatives. Especialistas em webdesign e marketing digital em Portugal.',
    url: 'https://www.pixelcreatives.pt',
    siteName: 'Pixel Creatives',
    images: [
      {
        url: 'https://www.pixelcreatives.pt/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Pixel Creatives - Webdesign e Marketing Digital',
      },
    ],
    locale: 'pt_PT',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Pixel Creatives',
    description: 'Soluções criativas e inovadoras para o seu negócio online',
    creator: '@pixelcreatives',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'google-site-verification=VkoFbts43Z_wDGD7LjXQ0qWNYVIb2XJesFi9iN-9omg',
    yandex: 'sua_verificação_yandex_aqui',
    yahoo: 'sua_verificação_yahoo_aqui',
  },
};


export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
};



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt">
    <Head>
    
      <meta name="yandex-verification" content="6015463b94fe0d61" />
      <link rel="icon" href="@/favicon180.png" sizes="any" />
      <link rel="icon" href="@/favicon32.png" sizes="32x32" type="image/png" />
      <link rel="icon" href="@/favicon16.png" sizes="16x16" type="image/png" />    
      
    
    </Head>
    <Script
        async
        src="https://www.googletagmanager.com/gtag/js?id=G-QPSGE6KKYY"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-QPSGE6KKYY');
        `}
      </Script>
      <body className={poppins.className}>
        <div className=" bg-gradient-to-r from-main to-main">
        < Nav />
        <Suspense  fallback={<LoadingSpinner />}>
        {children}
        </Suspense>
        < Footer />
        <FooterInfo />
        </div>
      </body>
    </html>
  );
}
