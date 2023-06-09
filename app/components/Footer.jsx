import Link from 'next/link'
import Image from 'next/image'
import '../globals.css'
import footerStyles from '../footer.module.css'

const Footer = () => {
  return (
    <footer className={footerStyles.footer}>
        <div className={footerStyles.footercontainer}>
            <p className={footerStyles.address}>
                Address: <Link href="https://www.google.com/maps/place/Via+di+Salicchi,+361%2F1p,+55100+Lucca+LU/@43.8564069,10.5093756,17z/data=!3m1!4b1!4m5!3m4!1s0x12d583ea3b41f87f:0x80387d423703db77!8m2!3d43.8564069!4d10.5119505" className="link">Via di Salicchi, 361 1P, 55100 Lucca LU, Italia</Link>
                <br/>
                Email: <Link href="mailto:info@commantech.it" className="link">info@commantech.it</Link>
            </p>
            <div className={footerStyles.footerlogo}>
                <Link href="/">
                    <Image
                        className={footerStyles.logo}
                        src="/logo.png"
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