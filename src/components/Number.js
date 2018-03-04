import React from 'react';

const size = 25;

const Number = (props) => (
    <svg width={3 * size} height={4 * size} style={{margin: 5}}>
        {props.data.map(function (c, index) {
            return <rect width={size} height={size} x={size * c.x} y={size * c.y} stroke="black" fill={props.fill} stroke-width={2} />;
        })}
    </svg>
);

export default Number;