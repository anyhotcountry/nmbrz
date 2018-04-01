import React from 'react';
import PropTypes from 'prop-types';
import DraggableNumber from './DraggableNumber'
import PlacedNumber from './PlacedNumber'

const Board = (props) => {
    const { numberData, canUndo, canRedo, onStop, placeNumber, rotateNumber, shuffleNumbers, undoMove, redoMove } = props;
    return <React.Fragment>
        <div style={{marginLeft: 'auto', marginRight: 'auto', textAlign: 'center'}}>
            <button onClick={shuffleNumbers} >
                Shuffle
            </button>
            <button onClick={placeNumber} disabled={numberData.every(n => !n.active)} >
                Next 
            </button>
            <button onClick={rotateNumber} disabled={numberData.every(n => !n.active)}  >
                Rotate
            </button>
            <button onClick={undoMove} disabled={!canUndo} >
                Undo
            </button>
            <button onClick={redoMove} disabled={!canRedo} >
                Redo
            </button>
        </div>
        <div>
            {numberData.filter(n => n.placed).map(n => (<PlacedNumber key={n.key} name={n.name} destination={n.destination} rotation={n.rotation} />))}
            {numberData.filter(n => n.active).map(n => (<DraggableNumber key={n.key} name={n.name} onStop={onStop} destination={n.destination} rotation={n.rotation} />))}
        </div>
    </React.Fragment>
};

Board.propTypes = {
    onStop: PropTypes.func.isRequired,
    undoMove: PropTypes.func,
    redoMove: PropTypes.func,
    placeNumber: PropTypes.func.isRequired,
    rotateNumber: PropTypes.func.isRequired,
    shuffleNumbers: PropTypes.func.isRequired,
    numberData: PropTypes.arrayOf(PropTypes.shape({
        key: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
        placed: PropTypes.bool.isRequired,
        active: PropTypes.bool.isRequired,
        destination: PropTypes.shape({
            x: PropTypes.number.isRequired,
            y: PropTypes.number.isRequired
        }).isRequired,
        rotation: PropTypes.number.isRequired
    })).isRequired,
    canUndo: PropTypes.bool.isRequired,
    canRedo: PropTypes.bool.isRequired
};

export default Board;