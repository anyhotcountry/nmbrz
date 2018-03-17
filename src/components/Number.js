import React from 'react';

export const SIZE = 25;
export const HEIGHT = 4 * SIZE;
export const WIDTH = 3 * SIZE;
const strokeWidth = 2;

export const Number = ({ data, fill, rotation }) => {
    let matrix = [[Math.cos(rotation), -Math.sin(rotation)], [Math.sin(rotation), Math.cos(rotation)]]
    return <svg style={{border: "1px"}} viewBox={`${-WIDTH} ${-WIDTH} ${2 * WIDTH} ${2 * WIDTH}`} width={2 * WIDTH} height={2 * WIDTH}>
        {data.map(function (c, index) {
            return <rect key={index} width={SIZE} height={SIZE}
                x={SIZE * (matrix[0][0] * (c.x - 1) + matrix[0][1] * (c.y - 2))}
                y={SIZE * (matrix[1][0] * (c.x - 1) + matrix[1][1] * (c.y - 2))}
                stroke="black" fill={fill} strokeWidth={strokeWidth} />;
        })}
    </svg>
};

export default Number;