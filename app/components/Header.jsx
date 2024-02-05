import Link from 'next/link'
import Image from 'next/image'
import '../globals.css'
import headerStyles from '../header.module.css'

const Header = () => {
  return (
    <header className="header">
        <div className="header__container container">
            <div className="header__logo">
                <Link href="/" className='header__titulo'>
                    <div>
                        COMMANTECH
                    </div>
                    <div className='header__titulo-srls'>
                        SRLS
                    </div>
                </Link>
            </div>
            <div className="navBar">
                <Link href="/about">About</Link>
                <Link href="/services">Services</Link>
                <Link href="/projects">Projects</Link>
                <Link href="/contact" className='navBar__contact'>Contact</Link>
            </div>
        </div>
    </header>
  )
}

export default Header