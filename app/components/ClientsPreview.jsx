import Image from 'next/image'
import '../globals.css'
import styles from '../clients.module.css'
import Link from 'next/link'

const logos = [
  { src: "/clients-1.png", width: 120, height: 91, alt: "a" },
  { src: "/clients-2.svg", width: 91, height: 91, alt: "vismara" },
  { src: "/clients-2.png", width: 106, height: 74, alt: "cuarentagradossur" },
  { src: "/clients-3.png", width: 181, height: 72, alt: "ginogandino" },
  { src: "/clients-6.jpg", width: 148, height: 64, alt: "cryachts" },
  { src: "/nautor.png", width: 94, height: 63, alt: "nautor's swan" },
  { src: "/clients-5.png", width: 120, height: 30, alt: "bryd" },
];

const infiniteLogos = [...logos, ...logos];

const ClientsPreview = () => {
  return (
    <div className="clients container">
      <h2 className="clients__title">Clients - who trust us</h2>
      <div className="clients__grid">
        <div className="clients__slider">
          {infiniteLogos.map((logo, i) => (
            <div key={i} className="clients__item">
              <Image
                src={logo.src}
                alt={logo.alt}
                width={logo.width}
                height={logo.height}
              />
            </div>
          ))}
        </div>
      </div>
    </div>

  )
}

export default ClientsPreview