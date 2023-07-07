import './globals.css'
import { Inter } from 'next/font/google'
import { Footer, Navbar } from '@/components'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Phim mới',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
        <div className='absolute flex flex-col h-screen w-screen justify-between'>
          <Navbar/>
          <Footer/>
        </div>
      </body>
    </html>
  )
}
