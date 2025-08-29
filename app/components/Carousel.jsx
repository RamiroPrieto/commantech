"use client";
import React, { useRef, useState, useEffect, useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import imageByIndex from "@/public/imageByIndex";
import Image from "next/image";
import { Suspense } from "react";

const EmblaCarousel = ({ slides, options = { loop: false } }) => {
  const autoplay = useRef(
    Autoplay(
      { delay: 8000, stopOnInteraction: false },
      (emblaRoot) => emblaRoot.parentElement
    )
  );

  const [emblaRef, emblaApi] = useEmblaCarousel(options, [autoplay.current]);
  const [selectedIndex, setSelectedIndex] = useState(0);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on("select", onSelect);
  }, [emblaApi, onSelect]);

  return (
    <div className="embla">
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container">
          {slides.map((index) => (
            <div className="embla__slide" key={index}>
              <Suspense fallback={<div>Loading...</div>}>
                <Image
                  className="embla__slide__img desktop"
                  src={imageByIndex(index, false).src}
                  alt="Commantech Logo"
                  fill
                />
                <Image
                  className="embla__slide__img mobile"
                  src={imageByIndex(index, true).src}
                  alt="Commantech Logo"
                  fill
                />
              </Suspense>
            </div>
          ))}
        </div>
      </div>

      {/* Puntos de navegación */}
      <div className="embla__dots">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => emblaApi && emblaApi.scrollTo(i)}
            className={`embla__dot ${
              selectedIndex === i ? "embla__dot--selected" : ""
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default EmblaCarousel;
