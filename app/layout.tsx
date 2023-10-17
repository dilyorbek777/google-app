import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: "Google v2 | Dilyorbek Asfandiyorov",
  description: 'Google v2 | Dilyorbek Asfandiyorov gogle clone',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={'bg-gray-950 ' + inter.className}>
        <Navbar />
        <main>
          {children}
        </main>
      </body>
    </html>
  )
}
