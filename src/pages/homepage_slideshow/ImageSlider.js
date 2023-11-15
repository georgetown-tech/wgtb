// ImageSlider.js
import React, { useState } from 'react';
import './ImageSlider.css'; // Make sure to create an ImageSlider.css file for styling

const ImageSlider = ({ slides }) => {
  const [current, setCurrentIndex] = useState(0);
  const length = slides.length;

  const nextSlide = () => {
    setCurrentIndex(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrentIndex(current === 0 ? length - 1 : current - 1);
  };

  if (!Array.isArray(slides) || slides.length <= 0) {
    return null; // If there are no slides, don't render the component
  }

  return (
    <div className='slider'>
      <button className='left-arrow' onClick={prevSlide}>
        &lt;
      </button>
      <button className='right-arrow' onClick={nextSlide}>
        &gt;
      </button>
      {slides.map((slide, index) => (
        <div
          className={index === current ? 'slide active' : 'slide'}
          key={index}
        >
          {index === current && (
            <>
              <a href={slide.link} target="_blank" rel="noopener noreferrer">
                <img src={slide.imageSrc} alt={slide.title} className='image' />
              </a>
              <div className="slide-caption">
                <h2>{slide.title}</h2>
                <p>{slide.description}</p>
              </div>
            </>
          )}
        </div>
      ))}
    </div>
  );
};

export default ImageSlider;



