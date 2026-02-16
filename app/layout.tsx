import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/next"


const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata = {
  title: 'Product Photography & Web Design | Epitome Creatives UK',
  description:
    'Professional product photography and web design for e-commerce brands. Clean, high-converting visuals and websites for skincare, supplements, fashion, and lifestyle products. Based in the UK.',
  keywords: [
    'product photography UK',
    'e-commerce photography',
    'small brand photography',
    'product photographer London',
    'skincare photography',
    'product photos for online stores',
    'lifestyle product photography',
    'Epitome Creatives'
  ],
  metadataBase: new URL('https://www.epitomecreatives.com'),
  authors: [{ name: 'Epitome Creatives', url: 'https://www.epitomecreatives.com' }],
  creator: 'Epitome Creatives',
  openGraph: {
    title: 'Product Photography & Web Design | Epitome Creatives',
    description:
      'Professional product photography and web design for e-commerce, social media, and product launches. Clean, conversion-focused visuals and websites for brands across the UK.',
    url: 'https://www.epitomecreatives.com',
    siteName: 'Epitome Creatives',
    images: [
      {
        url: 'https://www.epitomecreatives.com/logo.png', 
        width: 1200,
        height: 630,
        alt: 'Epitome Creatives - Product Photography',
      },
    ],
    locale: 'en_GB',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Product Photography & Web Design | Epitome Creatives',
    description:
      'Clean, professional product photos and high-converting websites for e-commerce brands across the UK.',
    images: ['https://www.epitomecreatives.com/logo.png'],
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
      <body className={`${inter.variable} ${playfair.variable} bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 text-black min-h-screen`}>
      {/* screenshot toggle: client component */}
   
      <main>
        {children}
      </main>
      <Analytics />
        
      </body>
    </html>
  );
}
