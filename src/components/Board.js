import React from 'react';
import Number from './Number'
import numbers from './numbers';

const Board = (props) => (
    <React.Fragment>
        {props.numbers.map(n => (<Number data={numbers[n.name].points} fill={numbers[n.name].colour} />))}
    </React.Fragment>
);

export default Board;