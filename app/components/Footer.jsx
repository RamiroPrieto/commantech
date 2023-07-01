import Link from 'next/link'
import Image from 'next/image'
import '../globals.css'
import footerStyles from '../footer.module.css'
import { HiLocationMarker } from 'react-icons/hi';
import { GrMail } from 'react-icons/gr';
import { AiFillPhone } from 'react-icons/ai';

const Footer = () => {
  return (
    <footer className={footerStyles.footer}>
        <div className={footerStyles.footercontainer}>
            <p className={footerStyles.address}>
                <HiLocationMarker/> Address: <Link href={process.env.location} className="link">Via di Salicchi, 361 1P, 55100 Lucca LU, Italia</Link>
                <br/>
                <AiFillPhone/> Phone: <span className="link">(39) 331 3542388</span>
                <br/>
                <GrMail/> Email: <Link href="mailto:info@commantech.it" className="link">info@commantech.it</Link>
            </p>
            <div className={footerStyles.footerlogo}>
                <Link href="/">
                    <Image
                        className={footerStyles.logo}
                        src="/logo.webp"
                        alt="Commantech Logo"
                        width={150}
                        height={71}
                        priority
                    />
                </Link>
            </div>
            <div className={footerStyles.contactUs}>
                <p>Helping the marine industry to improve composites manufacturing processes...</p>
                <br/>
                <Link href="/contact" className="button">
                    <button >Contact Us</button>
                </Link>
            </div>
        </div>
        <div className={footerStyles.reserved}>
            All Rights Reserved. 2023
        </div>
    </footer>
  )
}

export default Footer