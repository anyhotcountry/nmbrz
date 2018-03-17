import React from 'react';
import getNumber from '../utils/numbers';

export const SIZE = 25;
export const HEIGHT = 4 * SIZE;
export const WIDTH = 3 * SIZE;
const strokeWidth = 2;

const Number = ({ name, rotation }) => {
    const number = getNumber(name, rotation);
    return <svg viewBox={`${-WIDTH} ${-WIDTH} ${2 * WIDTH} ${2 * WIDTH}`} width={2 * WIDTH} height={2 * WIDTH}>
        {number.points.map(function (n, index) {
            return <rect key={index} width={SIZE} height={SIZE}
                x={SIZE * n.x} y={SIZE * n.y} stroke="black" fill={number.colour} strokeWidth={strokeWidth} />;
        })}
    </svg>
};

export default Number;