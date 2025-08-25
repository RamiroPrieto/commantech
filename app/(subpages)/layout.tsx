import '../globals.css'
import styles from './subpage.module.css'
import { Figtree } from "next/font/google";
import "../globals.css";

const figtree = Figtree({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-figtree",
});


export const metadata = {
  title: 'COMMANTECH - Composites Manufacturing Consultancy',
  description: 'Commantech',
}

export default function SubPageLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className={styles.subpage}>
      {children}
    </div>
  )
}
