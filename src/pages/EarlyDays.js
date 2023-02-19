import React, { useState } from 'react';
import { EarlyDaysData } from '../components/EarlyDaysData';
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from 'react-icons/fa';

function EarlyDays({ slides }) {
  const [current, setCurrent] = useState(0);
  const length = slides.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  if (!Array.isArray(slides) || slides.length <= 0) {
    return null;
  }

  return (
    <div className='earlydays'>
      <h1>Early Days</h1>
      <section className='slider'>
        <FaArrowAltCircleLeft className='left-arrow' onClick={prevSlide} />
        <FaArrowAltCircleRight className='right-arrow' onClick={nextSlide} />
        {EarlyDaysData.map((slide, index) => {
          return (
            <div className={index === current ? 'slide active' : 'slide'} key={index}>
              {index === current && <img src={slide.image} alt='photo' className='image' />}
            </div>
          );
        })}
      </section>
    </div>
  );
}

export default EarlyDays;