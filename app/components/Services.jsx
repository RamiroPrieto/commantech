import React from 'react'
import Link from 'next/link'
import Image from 'next/image'


const Services = () => {
  return (
    <div className='services container'>
        <div className='services__left'>
            <div className='services__title'>Services</div>
            <div className='services__description'>The use of new renewable composite materials helps to counterbalance the extensive use of petroleum-based polymers used today. Hence, the industry is investing too much effort on applying them in their products.</div>
            <Link href="/about" className='services__content-link'>
              Get to know us
            </Link>
        </div>
        <div className='services__right'>
            <div className='services__right-item'>
                <Image
                    className=""
                    src="/Group1.svg"
                    alt="Group1.png"
                    width={28}
                    height={28}
                />
                <div>
                    Composite manufacturing technology improvement
                </div>
            </div>
            <div className='services__right-item'>
                <Image
                    className=""
                    src="/Group1.svg"
                    alt="Group1.png"
                    width={28}
                    height={28}
                />
                <div>
                    Drapability and conforming predictions
                </div>
            </div>
            <div className='services__right-item'>
                <Image
                    className=""
                    src="/Group1.svg"
                    alt="Group1.png"
                    width={28}
                    height={28}
                />
                <div>
                   Structural integrity studies
                </div>
            </div>
            <div className='services__right-item'>
                <Image
                    className=""
                    src="/Group1.svg"
                    alt="Group1.png"
                    width={28}
                    height={28}
                />
                <div>
                    Potencial constituents and tooling
                </div>
            </div>
            <div className='services__right-item'>
                <Image
                    className=""
                    src="/Group1.svg"
                    alt="Group1.png"
                    width={28}
                    height={28}
                />
                <div>
                    Process quality control monitoring
                </div>
            </div>
            <div className='services__right-item'>
                <Image
                    className=""
                    src="/Group1.svg"
                    alt="Group1.png"
                    width={28}
                    height={28}
                />
                <div>
                    Project management
                </div>
            </div>
        </div>
    </div>
  )
}

export default Services
