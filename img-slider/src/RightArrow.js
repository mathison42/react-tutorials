import React from 'react';

const RightArrow = (props) => {
  return (
    <div onClick={props.nextSlide} className="slider-right-arrow">
        <img src='./pics/slider-right-arrow.svg' alt='right-arrow'/>
    </div>
  );
}

export default RightArrow;
