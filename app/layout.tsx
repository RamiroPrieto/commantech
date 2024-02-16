import './globals.css'
import { Inter } from 'next/font/google'
import Header from './components/Header'
import Footer from './components/Footer'
import Image from "next/image";
import Head from "@/app/Head";


const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'COMMANTECH - Composites Manufacturing Consultancy',
  description: 'Commantech',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <Head/>
      <body className={inter.className}>
        <Image src="/Looper-3.png"
        alt="looper"
        width={500}
        height={500}
        className="looper__top"
        >
        </Image>
        <Header/>
        <main>
          {children}
        </main>
        <Footer/>
      </body>
    </html>
  )
}
