import Image from 'next/image'
import '../globals.css'
import styles from '../clients.module.css'

const ClientsPreview = () => {
  return (
    <div className={styles.clientstitle}>
        <h2 className={styles.title}>Our Clients</h2>
        <div className={styles.clients}>
            <Image src="/clients-1.png" alt="a" height={70} width={70}/>
            <Image src="/clients-2.svg" alt="vismara" height={70} width={70}/>
            <Image src="/clients-3.png" alt="ginogandino" height={70} width={176}/>
            <Image src="/clients-4.png" alt="cuarentagradossur" height={70} width={280}/>
        </div>
    </div>
  )
}

export default ClientsPreview