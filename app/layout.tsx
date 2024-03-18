import './globals.css'
import { Inter } from 'next/font/google'
import Header from './components/Header'
import Footer from './components/Footer'
import AnalyticsComponent from './components/AnalyticsComponent'
import { GoogleAnalytics } from '@next/third-parties/google'
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
      <body className={inter.className}>
        <Image src="/Looper-3.png"
        alt="looper"
        width={500}
        height={500}
        className="looper__top"
        >
        </Image>
        <Header/>
        <Head/>
        {/* <AnalyticsComponent/> */}
        <main>
          {children}
        </main>
        <Footer/>
      </body>
      <GoogleAnalytics gaId="G-G5VPXS1CXL" />
    </html>
  )
}
