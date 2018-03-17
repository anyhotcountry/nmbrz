import React from 'react';
import Draggable from './Draggable';
import { Number, SIZE } from './Number';

const DraggableNumber = ({ onStop, data, fill, destination, rotation }) => {
    return <Draggable
        grid={[SIZE, SIZE]} onStop={onStop} x={destination.x} y={destination.y}>
        <Number data={data} fill={fill} rotation={rotation} />
    </Draggable>
};

export default DraggableNumber;