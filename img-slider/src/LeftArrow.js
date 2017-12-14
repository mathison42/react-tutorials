import React from 'react';

const LeftArrow = (props) => {
  return (
    <div onClick={props.previousSlide} className="slider-left-arrow">
        <img src='./pics/slider-left-arrow.svg' />
    </div>
  );
}

export default LeftArrow;
