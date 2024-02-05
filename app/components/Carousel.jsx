"use client";
import React, { useRef } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from "embla-carousel-autoplay";
import imageByIndex from '@/public/imageByIndex'
import Image from 'next/image'
import { Suspense } from 'react';


const EmblaCarousel = ({ slides, options = { loop: false } }) => {
    const autoplay = useRef(
      Autoplay(
        { delay: 8000, stopOnInteraction: false },
        (emblaRoot) => emblaRoot.parentElement
      )
    );
  
    const [emblaRef] = useEmblaCarousel(options, [autoplay.current]);
    return (
        <div className="embla">
            <div className="embla__viewport" ref={emblaRef}>
                <div className="embla__container">
                    {slides.map((index) => (
                        <div className="embla__slide" key={index}>
                            <div className="embla__slide__number">
                                <span>{index + 1}</span>
                            </div>
                            <Suspense fallback={<div>Loading repo...</div>}>
                                <Image
                                    className="embla__slide__img desktop"
                                    src={imageByIndex(index, false).src}
                                    alt="Commantech Logo"
                                    fill="true"
                                />
                                <Image
                                    className="embla__slide__img mobile"
                                    src={imageByIndex(index, true).src}
                                    alt="Commantech Logo"
                                    fill="true"
                                />
                            </Suspense>
                        </div>
                    ))}
                </div>
            </div>
            {/* <div className="embla__slide__text">
                <span>Linking Bio-based trending composites with your shipyard</span>
            </div> */}
        </div>
    )
}

export default EmblaCarousel