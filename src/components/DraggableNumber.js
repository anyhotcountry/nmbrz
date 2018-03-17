import React from 'react';
import Draggable from './Draggable';
import Number, { SIZE } from './Number';

const DraggableNumber = ({ onStop, name, destination, rotation }) => {
    return <Draggable
        grid={[SIZE, SIZE]} onStop={onStop} x={destination.x} y={destination.y}>
        <Number name={name} rotation={rotation} />
    </Draggable>
};

export default DraggableNumber;