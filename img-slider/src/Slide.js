import React from 'react';

let pictures = [
    "nationals.jpg",
    "regionals-2016.jpg",
    "regionals-2017.jpg"
]

const Slide= (props) => {

  let background = {
    backgroundImage: "url('./pics/" + pictures[props.num] + "')",
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    height: '80vh'
  }

  return <div style={background} className="slide"></div>
}

export default Slide;
