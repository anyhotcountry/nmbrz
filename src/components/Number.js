import React from 'react';

export const SIZE = 25;
export const HEIGHT = 4 * SIZE;
export const WIDTH = 3 * SIZE;
const strokeWidth = 2;

export const Number = ({ data, fill }) => (
    <svg width={WIDTH} height={HEIGHT} >
        {data.map(function (c, index) {
            return <rect width={SIZE} height={SIZE} x={SIZE * c.x} y={SIZE * c.y} stroke="black" fill={fill} stroke-width={strokeWidth} />;
        })}
    </svg>
);

export default Number;