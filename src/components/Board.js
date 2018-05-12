import React from 'react';
import PropTypes from 'prop-types';
import DraggableNumber from './DraggableNumber'
import PlacedNumber from './PlacedNumber'
import RaisedButton from 'material-ui/RaisedButton';

const Board = ({ numberData, onStop, placeNumber, rotateNumber, newGame }) => {
    return <React.Fragment>
        <div style={{marginLeft: 'auto', marginRight: 'auto', textAlign: 'center'}}>
            <RaisedButton label="New Game" onClick={newGame} />
            <RaisedButton label="Next" onClick={placeNumber} disabled={numberData.every(n => !n.active)} />
            <RaisedButton label="Rotate"  onClick={rotateNumber} disabled={numberData.every(n => !n.active)} />
        </div>
        <div>
            {numberData.filter(n => n.placed).map(n => (<PlacedNumber key={n.key} name={n.name} destination={n.destination} rotation={n.rotation} />))}
            {numberData.filter(n => n.active).map(n => (<DraggableNumber key={n.key} name={n.name} onStop={onStop} destination={n.destination} rotation={n.rotation} />))}
        </div>
    </React.Fragment>
};

Board.propTypes = {
    onStop: PropTypes.func.isRequired,
    placeNumber: PropTypes.func.isRequired,
    rotateNumber: PropTypes.func.isRequired,
    newGame: PropTypes.func.isRequired,
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
    })).isRequired
};

export default Board;