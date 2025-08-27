import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

const Structure = () => {
  return (
    <div className='structure container'>
        <div className='structure__title'>How we <span className='structure__title-highlight'>structure</span> our company</div>
        <div className="structure__description">We propose a three pillared composites study starting from engineering and advanced calculations, passing through manufacturing models up to new composites development.</div>
        <div className="structure__items">
            <div className="structure__items-item">
                <div className="structure__items-item-top">
                    <Image
                        className="structure_items-item-svg"
                        src="/structure1.svg"
                        alt="structure1.svg"
                        width={50}
                        height={44}
                    />
                    <div className='structure__items-item-title'>Advanced engineering and calculation</div>
                    <div className='structure__items-item-description'>Development of finite element models from micro to macro scale in order to understand different behaviours and proper calculate your part made in composites.</div>
                </div>
                <div className="structure__items-item-bottom">
                    <div className='structure__items-item-image'>
                        <Image
                            className="structure_items-item-png"
                            src="/structure1.png"
                            alt="structure1.png"
                            width={400}
                            height={320}
                        />
                    </div>
                </div>
            </div>
            <div className="structure__items-item">
                <div className="structure__items-item-top">
                    <Image
                        className="structure_items-item-svg"
                        src="/structure2.svg"
                        alt="structure2.svg"
                        width={50}
                        height={44}
                    />
                    <div className='structure__items-item-title'>Advanced engineering and calculation</div>
                    <div className='structure__items-item-description'>Development of finite element models from micro to macro scale in order to understand different behaviours and proper calculate your part made in composites.</div>
                </div>
                <div className="structure__items-item-bottom">
                    <div className='structure__items-item-image'>
                        <Image
                            className="structure_items-item-png"
                            src="/structure2.png"
                            alt="structure2.png"
                            width={400}
                            height={320}
                        />
                    </div>
                </div>
            </div>
            <div className="structure__items-item">
                <div className="structure__items-item-top">
                    <Image
                        className="structure_items-item-svg"
                        src="/structure3.svg"
                        alt="structure3.svg"
                        width={50}
                        height={44}
                    />
                    <div className='structure__items-item-title'>Advanced engineering and calculation</div>
                    <div className='structure__items-item-description'>Development of finite element models from micro to macro scale in order to understand different behaviours and proper calculate your part made in composites.</div>
                </div>
                <div className="structure__items-item-bottom">
                    <div className='structure__items-item-image'>
                        <Image
                            className="structure_items-item-png"
                            src="/structure3.png"
                            alt="structure3.png"
                            width={400}
                            height={320}
                        />
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Structure