import './globals.css'
import { Figtree } from 'next/font/google'
import Header from './components/Header'
import Footer from './components/Footer'
import AnalyticsComponent from './components/AnalyticsComponent'
import { GoogleAnalytics } from '@next/third-parties/google'
import Image from "next/image";
import Head from "@/app/Head";

const figtree = Figtree({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
})

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
      <body className={figtree.className}>
        <Image 
          src="/Looper-3.png"
          alt="looper"
          width={500}
          height={500}
          className="looper__top"
        />
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
