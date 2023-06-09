import Link from 'next/link'
import Image from 'next/image'
import styles from '../page.module.css'

const Header = () => {
  return (
    <header className={styles.header}>
        <div className={styles.headercontainer}>
            <div className={styles.headerlogo}>
                <Link href="/">
                    <Image
                        className={styles.logo}
                        src="/logo.png"
                        alt="Commantech Logo"
                        width={150}
                        height={71}
                        priority
                    />
                </Link>
            </div>
            <div className={styles.headerlinks}>
                <Link href="/">Home</Link>
                <Link href="/about">About Us</Link>
                <Link href="/services">Services</Link>
                <Link href="/projects">Our Projects</Link>
                <Link href="/contact">Contact Us</Link>
            </div>
        </div>
    </header>
  )
}

export default Header