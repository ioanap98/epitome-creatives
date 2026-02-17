export const metadata = {
  title: 'Admin Login | Epitome Creatives',
  description: 'Login to the Epitome Creatives admin panel to manage uploads, portfolio, and website content securely.',
  keywords: [
    'admin login',
    'Epitome Creatives login',
    'content management login',
    'portfolio admin login',
    'website admin login'
  ],
  metadataBase: new URL('https://www.epitomecreatives.com'),
  authors: [{ name: 'Epitome Creatives', url: 'https://www.epitomecreatives.com' }],
  creator: 'Epitome Creatives',
  openGraph: {
    title: 'Admin Login | Epitome Creatives',
    description: 'Login to the Epitome Creatives admin panel to manage uploads and content.',
    url: 'https://www.epitomecreatives.com/login',
    siteName: 'Epitome Creatives',
    images: [
      {
        url: 'https://www.epitomecreatives.com/logo.png',
        width: 1200,
        height: 630,
        alt: 'Epitome Creatives Admin Login',
      },
    ],
    locale: 'en_GB',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Admin Login | Epitome Creatives',
    description: 'Login to the Epitome Creatives admin panel.',
    images: ['https://www.epitomecreatives.com/logo.png'],
  },
};
'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function LoginPage() {
  const [password, setPassword] = useState('');
  const router = useRouter();

  const handleLogin = async () => {
    const res = await fetch('/api/login', {
      method: 'POST',
      body: JSON.stringify({ password }),
    });

    if (res.ok) {
      router.push('/admin');
    } else {
      alert('Wrong password!');
    }
  };

  return (
    <div className="p-8 max-w-md mx-auto">
      <h1 className="text-2xl font-bold mb-4">Admin Login</h1>
      <input
        type="password"
        placeholder="Enter password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className="border p-2 w-full mb-4"
      />
      <button
        onClick={handleLogin}
        className="bg-blue-600 text-white px-4 py-2 rounded w-full"
      >
        Login
      </button>
    </div>
  );
}
