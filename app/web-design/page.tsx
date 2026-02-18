import Header from '@/components/navbar'
import WebDesignHero from '@/components/web-design-hero'
import WebDesignServicesSection from '@/components/web-design-services'
import DemoTemplatesSection from '@/components/web-design-templates'
import WebDesignPackagesV2 from '@/components/web-design-packages-v2'
import ContactSection from '@/components/contact-section'
import Footer from '@/components/footer'

export const metadata = {
  title: 'Web Design & Development for Product Brands | Epitome Creatives',
  description:
    'Conversion-focused website design and development for small product-based brands. Clean, fast, beautiful websites built to sell.',
  keywords: [
    'web design UK',
    'product website design',
    'ecommerce web design',
    'website designer London',
    'web development for brands',
    'Shopify design',
  ],
  metadataBase: new URL('https://www.epitomecreatives.com'),
  authors: [{ name: 'Epitome Creatives', url: 'https://www.epitomecreatives.com' }],
  creator: 'Epitome Creatives',
  openGraph: {
    title: 'Web Design & Development for Product Brands | Epitome Creatives',
    description:
      'Conversion-focused websites designed to showcase your products and convert visitors into customers.',
    url: 'https://www.epitomecreatives.com/web-design',
    siteName: 'Epitome Creatives',
    images: [
      {
        url: 'https://www.epitomecreatives.com/logo.png',
        width: 1200,
        height: 630,
        alt: 'Epitome Creatives - Web Design',
      },
    ],
    locale: 'en_GB',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Web Design & Development for Product Brands | Epitome Creatives',
    description:
      'Conversion-focused websites for small product brands. Built to sell, optimised for growth.',
    images: ['https://www.epitomecreatives.com/logo.png'],
  },
}

function SchemaScript() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'LocalBusiness',
          'name': 'Epitome Creatives - Web Design',
          'image': 'https://www.epitomecreatives.com/logo.png',
          'url': 'https://www.epitomecreatives.com/web-design',
          'address': {
            '@type': 'PostalAddress',
            'addressLocality': 'London',
            'addressCountry': 'GB',
          },
          'description': 'Conversion-focused web design and development for product-based brands. Clean, fast websites built to sell.',
          'areaServed': {
            '@type': 'Country',
            'name': 'United Kingdom',
          },
          'sameAs': ['https://www.instagram.com/epitome.creatives'],
        }),
      }}
    />
  )
}

export default function WebDesignPage() {
  return (
    <>
      <SchemaScript />
      <Header />
      <WebDesignHero />
      <WebDesignServicesSection />
      <WebDesignPackagesV2 />
      <DemoTemplatesSection />
      <ContactSection />
      <Footer />
    </>
  )
}
