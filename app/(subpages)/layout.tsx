import '../globals.css'
import styles from './subpage.module.css'

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
