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
                        src="/logo.svg"
                        alt="Commantech Logo"
                        width={181}
                        height={81}
                        priority
                    />
                </Link>
            </div>
            <div className="footer__grid">
        
                <div>
                    <h4 className="footer__title">Address</h4>
                    <p className='footer__text'>Via di Salicchi, 361 1P, 55100</p>
                    <p className='footer__text'>Lucca LU, Italia</p>
                    </div>

                    <div>
                    <h4 className="footer__title">Contact</h4>
                    <p className='footer__text'>(39) 331 3542388</p>
                    <p className='footer__text'>info@commantech.it</p>
                    </div>

                    <div>
                    <h4 className="footer__title">Follow us</h4>
                    <p className='footer__text'>LinkedIn</p>
                    <p className='footer__text'>Instagram</p>
                    </div>

                    <div>
                    <h4 className="footer__title">License</h4>
                    <p className='footer__text'>VAT NUMBER: IT02687920468</p>
                    <p className='footer__text'>© 2023 CommanTech. All Rights Reserved</p>
                    </div>

                </div>
            </div>
        
    </footer>
  )
}

export default Footer