import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Ibrahim Hassan - Mechanical Engineering Portfolio',
  description: 'Portfolio showcasing mechanical engineering projects including thermal analysis, CAD design, materials testing, and advanced manufacturing',
  openGraph: {
    title: 'Ibrahim Hassan - Mechanical Engineering Portfolio',
    description: 'Innovative mechanical engineer specializing in thermal systems and materials analysis',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        {children}
      </body>
    </html>
  )
}
