import React from 'react';

export default function SliderItem({ item }) {
  return (
    <div className="sliderBlock">
      <p>{item.name}</p>
    </div>
  );
}
