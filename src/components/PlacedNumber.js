import React from 'react';
import { Number, HEIGHT, WIDTH } from './Number';

const PlacedNumber = ({ data, fill, destination, rotation }) => {
    let style = { position: 'absolute', width: WIDTH + 'px', height: HEIGHT + 'px', top: destination.y + 'px', left: destination.x + 'px' };
    return <div style={style}>
        <Number data={data} fill={fill} rotation={rotation} />
    </div>
};

export default PlacedNumber;