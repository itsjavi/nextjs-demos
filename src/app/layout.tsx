import { MainLogo } from '@/components/logos'
import type { Metadata } from 'next'
import localFont from 'next/font/local'
import Link from 'next/link'
import './globals.css'

const geistSans = localFont({
  src: './fonts/GeistVF.woff',
  variable: '--font-geist-sans',
  weight: '100 900',
})
const geistMono = localFont({
  src: './fonts/GeistMonoVF.woff',
  variable: '--font-geist-mono',
  weight: '100 900',
})

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <header className="container mx-auto mb-0 fixed top-0 left-0 right-0 z-50">
          <nav className="flex items-center justify-between py-4">
            <Link href="/">
              <MainLogo className="w-24" />
            </Link>
            <div className="flex gap-4 items-center flex-col sm:flex-row">
              <Link className="btn" href="/signin">
                Sign in
              </Link>
            </div>
          </nav>
        </header>
        <main className="container mx-auto">{children}</main>
      </body>
    </html>
  )
}
