import Link from 'next/link'
import Image from 'next/image'
import '../globals.css'
import styles from '../services.module.css'

const ServiceBox = ({image, text}) => {
    return (
        <div className="serviceBox">
            <Link href="/services">
                <Image
                    className={styles.image}
                    src={image}
                    alt={text}
                    width={30}
                    height={30}
                />
                <p className="serviceBox__text">
                    {text}
                </p>
            </Link>
        </div>
    );
}

const ServicesPreview = () => {
  return (
    <div className={styles.services}>
        <div className='container services'>
            <div className='services__top'>
                <h2 className="services__top-title">Find the services - <b> that best suits your needs</b></h2>
                <p className='services__top-subtitle'>The use of new renewable composite materials helps to counterbalance the extensive use of petroleum-based polymers used today. Hence, the industry is investing too much effort on applying them in their products.</p>
            </div>
            <div className="services__grid">
                <ServiceBox image="/fibra1.png" text="Composite manufacturing technology improvement" />
                <ServiceBox image="/incrementar1.png" text="Potencial constituents and tooling" />
                <div className='services__looperContainer'>
                    <Image
                        className="services__looper"
                        src="./LooperServices.png"
                        alt="looper"
                        width={100}
                        height={100}
                    />
                </div>
                <ServiceBox image="/obrero1.png" text="Drapability and conforming predictions" />
                <ServiceBox image="/iso-9001.png" text="Process quality control monitoring" />
                <ServiceBox image="/incrementar2.png" text="Structural integrity studies" />
                <ServiceBox image="/obrero.png" text="Project management" />
                <Link href="/services" className='services__learnMore'>
                    <div className='services__learnMore-container'>
                        <div className='services__learnMore-text'>
                            <div className='services__learnMore-text1'>Learn more about</div>
                            <div className='services__learnMore-text2'>Our Services</div>
                        </div>
                        <div className='services__image'>
                            <Image
                                src="./frameServices.png"
                                alt="frame"
                                width={75}
                                height={35}
                            />
                        </div>
                    </div>
                    <Image
                        className="services__learnMore-looper"
                        src="./LooperServices.png"
                        alt="looper"
                        width={100}
                        height={100}
                    />
                </Link>
                    
               
            </div>
        </div>
    </div>
  )
}

export default ServicesPreview