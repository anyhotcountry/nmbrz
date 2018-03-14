import React from 'react';
import Draggable from 'react-draggable';

const size = 25;
const strokeWidth = 2;

const Number = ({ placeNumber, data, fill, index }) => (
    <Draggable
        axis="both"
        grid={[size, size]} onStop={(e, o) => placeNumber && placeNumber(index, {x : o.x, y : o.y})}>
        <svg width={3 * size} height={4 * size} >
            {data.map(function (c, index) {
                return <rect width={size} height={size} x={size * c.x} y={size * c.y} stroke="black" fill={fill} stroke-width={strokeWidth} />;
            })}
        </svg>
    </Draggable>
);

export default Number;