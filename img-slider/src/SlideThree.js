import React from 'react';

const SlideThree= (props) => {

    let background = {
        backgroundImage: "url('./pics/regionals-2017.jpg')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '80vh'
    }

    return <div style={background} className="slide"></div>
}

export default SlideThree;
