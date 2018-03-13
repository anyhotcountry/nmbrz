import React from 'react';
import Draggable from 'react-draggable';

const size = 25;
const strokeWidth = 2;

const Number = (props) => (
    <Draggable
        axis="both"
        defaultPosition={{ x: 0, y: 0 }}
        position={null}
        grid={[size, size]}>
        <svg width={3 * size} height={4 * size} >
            {props.data.map(function (c, index) {
                return <rect width={size} height={size} x={size * c.x} y={size * c.y} stroke="black" fill={props.fill} stroke-width={strokeWidth} />;
            })}
        </svg>
    </Draggable>
);

export default Number;