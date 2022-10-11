import React from 'react';
import './Home.css';
import Slider from './slider/Slider';

export default function HomePage() {
  return (
    <div className="home">

      <img src="../../../img/hero.jpg" alt="..." className="img_home" />
      <Slider />
    </div>
  );
}
