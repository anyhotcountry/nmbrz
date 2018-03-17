import React from 'react';
import Number, { HEIGHT, WIDTH } from './Number';

const PlacedNumber = ({ name, destination, rotation }) => {
    let style = { position: 'absolute', width: WIDTH + 'px', height: HEIGHT + 'px', top: destination.y + 'px', left: destination.x + 'px' };
    return <div style={style}>
        <Number name={name} rotation={rotation} />
    </div>
};

export default PlacedNumber;