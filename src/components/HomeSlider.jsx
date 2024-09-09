import React, { useState, useRef, useCallback, useEffect } from "react";
import { Slider } from "./Slider";
import Homepagetest from "../pages/Homepagetest";
import HomepagetestB from "../pages/HomepagetestB";

const HomeSlider = () => {
  const [sliderState, setSliderState] = useState(0);
  const [isHovering, setIsHovering] = useState(false);
  const sliderRef = useRef(null);
  const isDraggingRef = useRef(false);
  const startXRef = useRef(0);
  const isSelectingRef = useRef(false);

  const slides = [
    <Homepagetest key="homepagetest" />,
    <HomepagetestB key="homepagetestb" />
  ];

  const handlePrev = () => {
    if (sliderRef.current) {
      sliderRef.current.slidePrev();
    }
  };

  const handleNext = () => {
    if (sliderRef.current) {
      sliderRef.current.slideNext();
    }
  };

  const handleMouseDown = useCallback((e) => {
    if (window.getSelection().toString().length === 0) {
      isDraggingRef.current = true;
      startXRef.current = e.clientX;
    }
  }, []);

  const handleMouseMove = useCallback((e) => {
    if (!isDraggingRef.current || isSelectingRef.current) return;
    const diff = startXRef.current - e.clientX;
    if (Math.abs(diff) > 50) {
      if (diff > 0) {
        handleNext();
      } else {
        handlePrev();
      }
      isDraggingRef.current = false;
    }
  }, []);

  const handleMouseUp = useCallback(() => {
    isDraggingRef.current = false;
    isSelectingRef.current = false;
  }, []);

  const handleSelectionStart = useCallback(() => {
    isSelectingRef.current = true;
  }, []);

  const handleSelectionEnd = useCallback(() => {
    isSelectingRef.current = false;
  }, []);

  useEffect(() => {
    let interval;
    if (!isHovering) {
      interval = setInterval(() => {
        handleNext();
      }, 500); // Auto-scroll every 5 seconds
    }
    return () => clearInterval(interval);
  }, [isHovering]);

  useEffect(() => {
    document.addEventListener('selectionchange', handleSelectionStart);
    document.addEventListener('mouseup', handleSelectionEnd);

    return () => {
      document.removeEventListener('selectionchange', handleSelectionStart);
      document.removeEventListener('mouseup', handleSelectionEnd);
    };
  }, []);

  return (
    <div 
      className="relative"
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
    >
      <Slider
        autoPlay={false}
        responsive={{ 0: { items: 1 } }}
        activeIndex={sliderState}
        onSlideChanged={(e) => {
          setSliderState(e?.item);
        }}
        ref={sliderRef}
        items={slides}
        mouseTracking={false}
        touchTracking={false}
      />
      <button
        onClick={handlePrev}
        className="absolute left-4 top-[500px] transform -translate-y-1/2 bg-white bg-opacity-75 hover:bg-opacity-100 text-gray-800 font-bold py-4 px-6 rounded-full shadow-lg transition duration-300 ease-in-out z-10 text-2xl"
      >
        &#8592;
      </button>
      <button
        onClick={handleNext}
        className="absolute right-4 top-[500px] transform -translate-y-1/2 bg-white bg-opacity-75 hover:bg-opacity-100 text-gray-800 font-bold py-4 px-6 rounded-full shadow-lg transition duration-300 ease-in-out z-10 text-2xl"
      >
        &#8594;
      </button>
    </div>
  );
};

export default HomeSlider;