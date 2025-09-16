import './globals.css'

export const metadata = {
  title: 'SW Studios - Best Production Studio in India',
  description: 'SW Studios or Sociowash Studios is a leading Integrated Production agency in India that provides high-quality video film services.',
  keywords: 'video production, film services, production studio, India, advertising, commercial videos',
  authors: [{ name: 'SW Studios' }],
  creator: 'SW Studios',
  publisher: 'SW Studios',
  metadataBase: new URL('https://swstudios.in'),
  openGraph: {
    title: 'SW Studios - Best Production Studio in India',
    description: 'SW Studios or Sociowash Studios is a leading Integrated Production agency in India that provides high-quality video film services.',
    url: 'https://swstudios.in',
    siteName: 'SW Studios',
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'SW Studios'
      }
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'SW Studios - Best Production Studio in India',
    description: 'SW Studios or Sociowash Studios is a leading Integrated Production agency in India that provides high-quality video film services.',
    images: ['/images/og-image.jpg'],
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
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body>
        {children}
      </body>
    </html>
  )
}