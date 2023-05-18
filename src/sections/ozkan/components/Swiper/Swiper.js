import React, { useRef, useEffect, useState } from 'react';

const Swiper = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const intervalRef = useRef(null);

  const slides = [
    // Add slide contents here
    <div key={1} className="swiper-slide">
      {/* <div class="sc-61461c41-2 domipi">
        <div class="sc-3a5c8d1f-1 sc-32d5f017-0 sc-61461c41-3 glwDJB fOPopv dYKHyr">
          <div class="sc-3a5c8d1f-1 sc-32d5f017-0 sc-61461c41-4 glwDJB fOPopv heNOHL">
            <h2 color="text" font-size="16px" 
            class="sc-daa4d312-0 sc-4eb7e0a9-0 sc-61461c41-0 ihXAEA csqZAq edhDX">Perpetual Futures</h2>
            <h2 width="160px,160px,auto" color="text" font-size="16px" 
            class="sc-daa4d312-0 sc-4eb7e0a9-0 sc-61461c41-1 sc-d9aa916d-1 imOpfM csqZAq gJyMKh ejgITE">Up to 100× Leverage</h2>
            <a target="_blank" rel="noreferrer noopener" href="https://perp.pancakeswap.finance/en/futures/BTCUSDT?theme=dark&amp;chain=bnbchain" 
            color="primary" font-size="16px" class="sc-daa4d312-0 sc-2d8b3c99-0 jUAPud jluAhG">
              <button class="sc-56a7a3a9-0 jJzlhX" scale="md">
                <div color="invertedContrast" font-size="16px" class="sc-daa4d312-0 EGkYO">Trade Now</div>
                <svg viewBox="0 0 24 24" color="invertedContrast" width="20px" xmlns="http://www.w3.org/2000/svg" class="sc-231a1e38-0 ietCJc">
                  <path d="M5 13H16.17L11.29 17.88C10.9 18.27 10.9 18.91 11.29 19.3C11.68 19.69 12.31 19.69 12.7 19.3L19.29 12.71C19.68 12.32 19.68 11.69 19.29 11.3L12.71 4.7C12.32 4.31 11.69 4.31 11.3 4.7C10.91 5.09 10.91 5.72 11.3 6.11L16.17 11H5C4.45 11 4 11.45 4 12C4 12.55 4.45 13 5 13Z"></path>
                  </svg></button></a></div>
                  <div class="sc-d9aa916d-0 feieLj">
                    <span style="box-sizing: border-box; display: inline-block; overflow: hidden; width: initial; height: initial; background: none; opacity: 1; border: 0px; margin: 0px; padding: 0px; position: relative; max-width: 100%;">
                      <span style="box-sizing: border-box; display: block; width: initial; height: initial; background: none; opacity: 1; border: 0px; margin: 0px; padding: 0px; max-width: 100%;">
                        <img alt="" aria-hidden="true" src="data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%27208%27%20height=%27208%27/%3e" style="display: block; max-width: 100%; width: initial; height: initial; background: none; opacity: 1; border: 0px; margin: 0px; padding: 0px;" />
                        </span><img alt="PerpetualBanner" src="/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FperpetualMobile.79f3069c.png&amp;w=640&amp;q=75" decoding="async" data-nimg="intrinsic" style="position: absolute; inset: 0px; box-sizing: border-box; padding: 0px; border: none; margin: auto; display: block; width: 0px; height: 0px; min-width: 100%; max-width: 100%; min-height: 100%; max-height: 100%;" srcset="/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FperpetualMobile.79f3069c.png&amp;w=256&amp;q=75 1x, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2FperpetualMobile.79f3069c.png&amp;w=640&amp;q=75 2x" /><noscript></noscript></span></div></div></div> */}
    </div>,
    <div key={2} className="swiper-slide">
      {/* Content of Slide 2 */}
    </div>,
    <div key={3} className="swiper-slide">
      {/* Content of Slide 3 */}
    </div>
    // Add more slides as needed
  ];

  useEffect(() => {
    // Start autoplay interval when the component mounts
    intervalRef.current = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, 3000); // Adjust delay value in milliseconds (ms) as needed

    // Clean up the interval when the component unmounts
    return () => {
      clearInterval(intervalRef.current);
    };
  }, [slides.length]);

  const handleSlideChange = (index) => {
    // Update active slide index when user clicks on a slide
    setActiveIndex(index);
  };

  return (
    <div className="swiper-container">
      <div className="swiper-wrapper">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`swiper-slide ${
              index === activeIndex ? 'swiper-slide-active' : ''
            }`}
            onClick={() => handleSlideChange(index)}
          >
            {slide}
          </div>
        ))}
      </div>
      {/* Custom pagination bar */}
      <div className="my-custom-pagination">
        {slides.map((_, index) => (
          <span
            key={index}
            className={`my-custom-pagination-bullet ${
              index === activeIndex ? 'my-custom-pagination-bullet-active' : ''
            }`}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default Swiper;