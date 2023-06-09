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
                    width={300}
                    height={247}
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
    <div className={styles.grid}>
        <ServiceBox image="/services_1.png" text="COMPOSITE MANUFACTURING TECHNOLOGY IMPROVEMENT" />
        <ServiceBox image="/services_2.png" text="POTENTIAL CONSTITUENTS AND TOOLING" />
        <ServiceBox image="/services_3.png" text="DRAPABILITY AND CONFORMING PREDICTIONS" />
        <ServiceBox image="/services_4.png" text="PROCESS QUALITY CONTROL MONITORING" />
        <ServiceBox image="/services_5.png" text="STRUCTURAL INTEGRITY STUDIES" />
        <ServiceBox image="/services_6.png" text="PROJECT MANAGEMENT" />
    </div>
  )
}

export default ServicesPreview