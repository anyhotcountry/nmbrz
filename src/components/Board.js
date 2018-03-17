import React from 'react';
import DraggableNumber from './DraggableNumber'
import PlacedNumber from './PlacedNumber'
import numbers from './numbers';

const Board = ({ numberData, onStop, placeNumber, rotateNumber, shuffleNumbers }) => (
    <React.Fragment>
        <div>
            <button onClick={shuffleNumbers} >
                Shuffle
            </button>
            <button onClick={placeNumber} >
                Next
            </button>
            <button onClick={rotateNumber} >
                Rotate
            </button>
        </div>
        <div>
            {numberData.filter(n => n.placed).map(n => (<PlacedNumber key={n.key} data={numbers[n.name].points} fill={numbers[n.name].colour} destination={n.destination} rotation={n.rotation} />))}
            {numberData.filter(n => n.active).map(n => (<DraggableNumber key={n.key} data={numbers[n.name].points} fill={numbers[n.name].colour} onStop={onStop} destination={n.destination} rotation={n.rotation} />))}
        </div>
    </React.Fragment>
);

export default Board;