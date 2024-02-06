import Image from 'next/image'
import '../globals.css'
import styles from '../clients.module.css'
import Link from 'next/link'

const ClientsPreview = () => {
  return (
    <div className="clients container">
        <h2 className="clients__title">Clients - who trust us</h2>
        <div className="clients__grid">
          <Link href="/" className='clients__item'>
            <Image src="/clients-1.png" alt="a" height={91} width={91}/>
          </Link>
          <Link href="/" className='clients__item'>
            <Image src="/clients-2.svg" alt="vismara" height={91} width={91}/>
          </Link>
          <Link href="/" className='clients__item'> 
            <Image src="/clients-2.png" alt="cuarentagradossur" height={74} width={106}/>
          </Link>
          <Link href="/" className='clients__item'>
            <Image src="/clients-3.png" alt="ginogandino" height={72} width={181}/>
          </Link>
          <Link href="/" className='clients__item'>
            <Image src="/clients-6.jpg" alt="cryachts" height={64} width={148}/>
          </Link>
          <Link href="/" className='clients__item'>
            <Image src="/nautor.png" alt="nautor's swan" height={63} width={94}/>
          </Link>
          <Link href="/" className='clients__item'>
            <Image src="/clients-5.png" alt="bryd" height={30} width={220}/>
          </Link>
        </div>
    </div>
  )
}

export default ClientsPreview