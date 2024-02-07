import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

const Intro = () => {
  return (
    <div className='intro container'>
      {/* <Image className='intro__looper' src="looperIntro.png" alt="looperIntro" height={400} width={300}/> */}

      <div className='intro__content'>
        <div className='intro__content-text'>
            At <span className='intro__content-sub'>COMMANTECH</span>, we specialize on giving the best solution for a BIO or traditional composite manufacturing process, reducing costs with a process optimization and choosing the best available products in the market.
        </div>
        <div>
            <Link href="/about" className='intro__content-link'>
            Learn more about us
            </Link>
        </div>
      </div>
    </div>
  )
}

export default Intro
