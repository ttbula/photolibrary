import React from 'react';
import { EarlyDaysData } from '../components/EarlyDaysData';

function CrossCountry() {
  return (
    <div className='crosscountry'>
      <h1>CrossCountry</h1>
      {EarlyDaysData.map((slide, index) => {
          return <img src={slide.image} alt="photo" />;
          
        })}
    </div>
  );
}

export default CrossCountry;