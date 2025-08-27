import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

const Intro = () => {
  return (
    <div className='looperContainer' id='section'>
        {/* <Image className='intro__looper' src="Maskgroup.png" alt="looperIntro" height={400} width={300}/> */}
        <div className='intro__content-backgroundImage'>
            <Image
              className=""
              src="/imgIntro.png"
              alt="imgIntro.png"
              width={530}
              height={640}
            />
          </div>
      <div className='intro container'>

        <div className='intro__content'>
          <div className='intro__content-image'><Image
              className=""
              src="/Group1.svg"
              alt="Group1.png"
              width={89.93191528320312}
              height={101.45182037353516}
            /></div>
          <div className='intro__content-title'>Composites manufacturing consultancy</div>
          <div className='intro__content-text'>
              At <span className='intro__content-sub'>COMMANTECH</span>, we specialize on giving the best solution for a BIO or traditional composite manufacturing process, reducing costs with a process optimization and choosing the best available products in the market.
          </div>
          <div>
              <Link href="/about" className='intro__content-link'>
              Get to know us
              </Link>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Intro
