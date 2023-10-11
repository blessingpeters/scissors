import Footer from '@/components/Footer'
import './globals.css'
import type { Metadata } from 'next'
import { Quicksand } from 'next/font/google'

const quicksand = Quicksand({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Scissors',
  description: 'Optimize Your Online Experience with Our Advanced URL Shortening Solution',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={quicksand.className}>
        {children}
        <Footer />
      </body>
    </html>
  )
}
