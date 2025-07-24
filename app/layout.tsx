import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/next"


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: 'UK Product Photographer | Epitome Creatives',
  description:
    'Epitome Creatives offers premium product photography for UK-based e-commerce brands. Specialising in clean, aesthetic, and high-converting visuals for skincare, lifestyle, and wellness products.',
  keywords: [
    'UK product photography',
    'product photographer UK',
    'ecommerce photography UK',
    'London product photographer',
    'aesthetic product photos',
    'skincare photography UK',
    'minimal product photography',
    'Epitome Creatives'
  ],
  metadataBase: new URL('https://www.epitomecreatives.com'),
  authors: [{ name: 'Epitome Creatives', url: 'https://www.epitomecreatives.com' }],
  creator: 'Epitome Creatives',
  openGraph: {
    title: 'Epitome Creatives | UK Product Photography',
    description:
      'High-quality product photography for small brands across the UK. Skincare, accessories, and wellness products styled to perfection.',
    url: 'https://www.epitomecreatives.com',
    siteName: 'Epitome Creatives',
    images: [
      {
        url: 'https://www.epitomecreatives.com/logo.png', 
        width: 1200,
        height: 630,
        alt: 'Epitome Creatives logo and sample product photo',
      },
    ],
    locale: 'en_GB',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Epitome Creatives | UK Product Photographer',
    description:
      'Scroll-stopping product photos for brands in the UK. Clean, minimalist visuals tailored to convert.',
    images: ['https://www.epitomecreatives.com/logo.png'], // use a custom Twitter OG image if available
  },
  icons: {
    icon: '/logo.png',
    shortcut: '/logo.png',
    apple: '/logo.png',
  },
  category: 'photography',
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} bg-gradient-to-t from-blue-100 to-white text-black h-screen`}>
      <main>
        {children}
      </main>
      <Analytics />
        
      </body>
    </html>
  );
}
