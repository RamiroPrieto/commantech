import React from 'react'
import Image from "next/image";


const PageTitle = () => {
  return (
    <div className='PageTitle'>
        <div className='container'>
            {/* <div className='PageTitle__subtitle'>Composites manufacturing consultancy</div> */}
            <div className='PageTitle__title'> <p className="PageTitle_title--text">Aligning your shipyard with the <span className='PageTitle_title--color'>bio-based composites</span> trend</p></div>
        </div>
        <Image
              className="PageTitle__img"
              src="/fondoHome1.svg"
              alt="svgInicio.svg"
              width={255}
              height={238}
          />
    </div>
  )
}

export default PageTitle
