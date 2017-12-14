import React from 'react';

const SlideOne= (props) => {

  let background = {
    backgroundImage: "url('./pics/nationals.jpg')",
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    height: '80vh'
  }

  return <div style={background} className="slide"></div>
}

export default SlideOne;
