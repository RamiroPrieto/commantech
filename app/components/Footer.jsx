import Link from 'next/link'
import Image from 'next/image'
import '../globals.css'
import footerStyles from '../footer.module.css'
import { HiLocationMarker } from 'react-icons/hi';
import { GrMail } from 'react-icons/gr';
import { AiFillPhone } from 'react-icons/ai';

const Footer = () => {
  return (
    <footer className="footer">
        <div className="container footer__container">
            <div className="footer__logo">
                <Link href="/">
                    <Image
                        className=""
                        src="/logo.png"
                        alt="Commantech Logo"
                        width={207}
                        height={101}
                        priority
                    />
                </Link>
            </div>
            <div className='footer__right'>
                <div className='footer__right-container'>
                    <div className='footer__right-item'>
                        <Image
                            className=""
                            src="/Location.svg"
                            alt="Location"
                            width={20}
                            height={20}
                        />
                        <div className='footer__right-info'>
                        <Link href={process.env.location} target="_blank">Via di Salicchi, 361 1P, 55100 Lucca LU, Italia</Link>
                        </div>
                    </div>
                    <div className='footer__right-linea'>|</div>
                    <div className='footer__right-item'>
                        <Image
                            className=""
                            src="/Phone.svg"
                            alt="Phone"
                            width={20}
                            height={20}
                        />
                        <div className='footer__right-info'>
                        <Link href="tel:+393313542388" target="_blank">(39) 331 3542388</Link>
                        </div>
                    </div>
                    <div className='footer__right-linea'>|</div>
                    <div className='footer__right-item'>
                        <Image
                            className=""
                            src="/Email.svg"
                            alt="Mail"
                            width={20}
                            height={20}
                        />
                        <div className='footer__right-info'>
                        <Link href="mailto:info@commantech.it" target="_blank">info@commantech.it</Link>
                        </div>
                    </div>
                </div>
                <div className='footer__right-vat'>
                    COMMANTECH S.R.L.S  ·  VAT NUMBER: IT02687920468
                </div>
                <div className='footer__right-vat'>
                    Capitale Sociale: €1000,00
                </div>
                <div className='footer__right-rights'>
                    © 2024 Commantech. All Rights Reserved.
                </div>
            </div>
        </div>
        
    </footer>
  )
}

export default Footer