'use client';

import { ReactNode, UIEvent, useState, Children, useRef } from 'react';
import './styles.css';

type SliderProps = {
  children: ReactNode;
  className?: 'string';
};

export default function Slider({ children, className }: SliderProps) {
  const [currentSlide, setCurrentSlide] = useState<number>(0);
  const containerRef = useRef<HTMLDivElement | null>(null);

  const scrollHanlder = (event: UIEvent<HTMLDivElement>) => {
    const { offsetHeight, scrollTop } = event.currentTarget;
    const slideIndex = Math.round(scrollTop / offsetHeight);

    setCurrentSlide(slideIndex);
  };

  const handleDots = (index: number) => {
    const offsetHeight = containerRef.current?.offsetHeight;

    if (offsetHeight) {
      const newPosition = offsetHeight * index;

      containerRef.current?.scroll({ top: newPosition, behavior: 'smooth' });
    }
  };

  return (
    <div
      className={`flex gap-[40px] max-w-[880px] my-0 mx-auto ${
        className ?? ''
      }`}
    >
      <div
        ref={containerRef}
        className="sliderContainer max-w-[820px] max-h-[392px] p-[10px] overflow-y-scroll grow snap-mandatory snap-y"
        onScroll={scrollHanlder}
      >
        {children}
      </div>

      <div className="flex flex-col gap-[14px] justify-center items-center">
        {Children.map(children, (_, index) => (
          <span
            onClick={() => handleDots(index)}
            className={`w-[20px] h-[20px]  transition-all rounded-[50%] hover:cursor-pointer hover:opacity-80 active:opacity-70 ${
              index === currentSlide ? 'bg-black' : 'bg-lightGrey'
            }`}
          />
        ))}
      </div>
    </div>
  );
}
