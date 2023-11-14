import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from './components/home/Navbar'
import Footer from './components/home/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Brainwave',
  description: 'JavaScript Learning Platform',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}
