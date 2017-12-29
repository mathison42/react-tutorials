import React from 'react';

const LeftArrow = (props) => {
  return (
    <div onClick={props.previousSlide} className="slider-left-arrow">
        <img src='./pics/slider-left-arrow.svg' alt='left-arrow'/>
    </div>
  );
}

export default LeftArrow;
