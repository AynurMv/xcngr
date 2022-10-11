/* eslint-disable jsx-a11y/control-has-associated-label */
import React from 'react';
import Marquee from 'react-fast-marquee';
import './slider.css';
import { useSelector } from 'react-redux';
import SliderItem from '../../SliderItem';

export default function Slider({ night }) {
  const categories = useSelector((state) => state.categories);
  return (
    <>
      <div className={!night === true ? ('slider-container') : ('slider-container2')}>
        <Marquee>
          {categories?.map((item) => (
            <SliderItem
              item={item}
              key={item.id}
            />
          ))}
        </Marquee>
      </div>
    </>
  );
}

// {night === true ? ('overlay') : ('overlay2')}
