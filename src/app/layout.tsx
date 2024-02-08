import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import db from '@/lib/supabase/db'
import { ThemeProvider } from '@/lib/providers/next-theme-provider'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  console.log(db)
  return (
    <html lang='en'>
      <body className={inter.className}>
        <ThemeProvider attribute='class' defaultTheme='dark' enableSystem>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
