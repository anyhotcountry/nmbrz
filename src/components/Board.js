import React from 'react';
import Number from './Number'
import numbers from './numbers';

const Board = ({ numberData, placeNumber, shuffleNumbers }) => (
    <React.Fragment>
        <div>
            <button onClick={shuffleNumbers} >
                Shuffle
            </button>
        </div>
        {numberData.filter(n => n.active).map((n, i) => (<Number data={numbers[n.name].points} fill={numbers[n.name].colour} index={i} placeNumber={placeNumber} />))}
        {numberData.filter(n => n.placed).map((n, i) => (<Number data={numbers[n.name].points} fill={numbers[n.name].colour} index={i} placeNumber={placeNumber} />))}
    </React.Fragment>
);

export default Board;