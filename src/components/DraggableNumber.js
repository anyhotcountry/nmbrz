import React from 'react';
import Draggable from './Draggable';
import { Number, SIZE } from './Number';

const DraggableNumber = ({ onStop, data, fill, destination }) => {
    return <Draggable
        grid={[SIZE, SIZE]} onStop={onStop}>
        <Number data={data} fill={fill} />
    </Draggable>
};

export default DraggableNumber;