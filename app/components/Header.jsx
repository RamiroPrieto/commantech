import Link from 'next/link'
import Image from 'next/image'
import '../globals.css'
import headerStyles from '../header.module.css'

const Header = () => {
  return (
    <header className={headerStyles.header}>
        <div className={headerStyles.headercontainer}>
            <div className={headerStyles.headerlogo}>
                <Link href="/">
                    <Image
                        className={headerStyles.logo}
                        src="/commantech_logo_full.png"
                        alt="Commantech Logo"
                        width={150}
                        height={71}
                        priority
                    />
                </Link>
            </div>
            <div className={headerStyles.headerlinks}>
                <Link href="/">Home</Link>
                <Link href="/about">About</Link>
                <Link href="/services">Services</Link>
                <Link href="/projects">Projects</Link>
                <Link href="/contact">Contact</Link>
            </div>
        </div>
    </header>
  )
}

export default Header