export const metadata = {
  title: 'Admin Panel | Epitome Creatives',
  description: 'Admin panel for Epitome Creatives. Manage uploads, portfolio, and website content securely.',
  keywords: [
    'admin panel',
    'content management',
    'Epitome Creatives admin',
    'upload management',
    'portfolio admin',
    'website admin'
  ],
  metadataBase: new URL('https://www.epitomecreatives.com'),
  authors: [{ name: 'Epitome Creatives', url: 'https://www.epitomecreatives.com' }],
  creator: 'Epitome Creatives',
  openGraph: {
    title: 'Admin Panel | Epitome Creatives',
    description: 'Admin panel for Epitome Creatives. Securely manage uploads, portfolio, and website content.',
    url: 'https://www.epitomecreatives.com/admin',
    siteName: 'Epitome Creatives',
    images: [
      {
        url: 'https://www.epitomecreatives.com/logo.png',
        width: 1200,
        height: 630,
        alt: 'Epitome Creatives Admin',
      },
    ],
    locale: 'en_GB',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Admin Panel | Epitome Creatives',
    description: 'Admin panel for Epitome Creatives. Manage uploads and content.',
    images: ['https://www.epitomecreatives.com/logo.png'],
  },
};
// Import the cookies API to read cookies on the server
import { cookies } from 'next/headers';
// Import the redirect function to send users to another page if needed
import { redirect } from 'next/navigation';
// Import the UploadForm component that will be shown on the admin page
import UploadForm from './UploadForm';
import UploadFormPortfolio from './UploadFormPortfolio';

// This is the default export: your Admin Page component
export default async function AdminPage() {
  // Get access to cookies using the cookies() function (server-side only)
  const cookieStore = await cookies();

  // Try to get the value of the cookie named 'admin-auth'
  const isAuth = cookieStore.get('admin-auth')?.value;

  // If the user is not logged in (cookie missing or not 'true')
  // Redirect them to the login page
  if (isAuth !== 'true') {
    redirect('/login');
  }

  // If the user is authenticated, return the admin panel UI
  return (
    <div className="p-8">
      {/* Heading for the admin panel */}
      <h1 className="text-2xl font-bold mb-4">Admin Panel</h1>
      
      {/* Show the upload form component */}
      <UploadForm />
      <UploadFormPortfolio />
    </div>
  );
}
