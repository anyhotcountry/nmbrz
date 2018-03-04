import React from 'react';
import Number from './Number'
import numbers from './numbers';

const Board = (props) => (
    <div>
        <Number data={numbers.nmbr0} fill="grey" />
        <Number data={numbers.nmbr1} fill="brown" />
        <Number data={numbers.nmbr2} fill="orange" />
        <Number data={numbers.nmbr3} fill="yellow" />
        <Number data={numbers.nmbr4} fill="green" />
        <Number data={numbers.nmbr5} fill="teal" />
        <Number data={numbers.nmbr6} fill="blue" />
        <Number data={numbers.nmbr7} fill="purple" />
        <Number data={numbers.nmbr8} fill="pink" />
        <Number data={numbers.nmbr9} fill="red" />
    </div>
);

export default Board;