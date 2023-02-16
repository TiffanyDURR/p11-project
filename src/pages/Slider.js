import React from 'react';

const Slider = () => {
    return (
        const sliderData = card.pictures;

        const length = sliderData.length;
      
        const nextSlide = () => {
          setCurrent(current === length - 1 ? 0 : current + 1);
        };
      
        const prevSlide = () => {
          setCurrent(current === 0 ? length - 1 : current - 1);
        };
      
        if (!Array.isArray(sliderData) || sliderData.length <= 0) {
          return null;
        }
    );
};

export default Slider;