import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Kiptere NGO - Empowering Rural Kenya Through Digital Education',
  description: 'Kiptere NGO provides computer education and digital skills training to students in rural Kericho County, Kenya. Join us in bridging the digital divide.',
  keywords: ['NGO', 'Kenya', 'education', 'computer literacy', 'Kericho', 'digital skills', 'rural education'],
  openGraph: {
    title: 'Kiptere NGO - Empowering Rural Kenya Through Digital Education',
    description: 'Providing computer education to students in rural Kericho County, Kenya',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
