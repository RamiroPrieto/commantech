import Link from 'next/link'
import Image from 'next/image'
import '../globals.css'
import styles from '../services.module.css'

const ServiceBox = ({image, text}) => {
    return (
        <div className={styles.linkcontainer}>
            <Link href="/services">
                <Image
                    className={styles.image}
                    src={image}
                    alt={text}
                    width={200}
                    height={165}
                />
                <p className={styles.imagebutton}>
                    {text}
                </p>
            </Link>
        </div>
    );
}

const ServicesPreview = () => {
  return (
    <div className={styles.services}>
        <h2 className={styles.title}>Our Services</h2>
        <div className={styles.grid}>
            <ServiceBox image="/services_1.webp" text="COMPOSITE MANUFACTURING TECHNOLOGY IMPROVEMENT" />
            <ServiceBox image="/services_2.webp" text="POTENTIAL CONSTITUENTS AND TOOLING" />
            <ServiceBox image="/services_3.webp" text="DRAPABILITY AND CONFORMING PREDICTIONS" />
            <ServiceBox image="/services_4.webp" text="PROCESS QUALITY CONTROL MONITORING" />
            <ServiceBox image="/services_5.webp" text="STRUCTURAL INTEGRITY STUDIES" />
            <ServiceBox image="/services_6.webp" text="PROJECT MANAGEMENT" />
        </div>
    </div>
  )
}

export default ServicesPreview