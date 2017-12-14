import React from 'react';

const SlideTwo= (props) => {

    let background = {
        backgroundImage: "url('./pics/regionals-2016.jpg')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '80vh'
    }

    return <div style={background} className="slide"></div>
}

export default SlideTwo;
