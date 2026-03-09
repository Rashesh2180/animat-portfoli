import type { Metadata } from 'next'
import { ThemeProvider } from './contexts/ThemeContext'
import PageLoader from '@/components/PageLoader'
import './globals.css'

export const metadata: Metadata = {
  title: 'Rashesh Motivala',
  description: 'Creative digital agency portfolio with innovative design and cutting-edge development',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider>
          <PageLoader />
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}


