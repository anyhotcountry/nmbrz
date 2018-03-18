import React from 'react';
import PropTypes from 'prop-types';
import Draggable from './Draggable';
import Number, { SIZE } from './Number';

const DraggableNumber = (props) => {
    const { onStop, name, destination, rotation } = props;
    return <Draggable
        grid={[SIZE, SIZE]} onStop={onStop} x={destination.x} y={destination.y}>
        <Number name={name} rotation={rotation} />
    </Draggable>
};

DraggableNumber.propTypes = {
    onStop: PropTypes.func.isRequired,
    name: PropTypes.string.isRequired,
    destination: PropTypes.shape({
        x: PropTypes.number.isRequired,
        y: PropTypes.number.isRequired
      }).isRequired,
    rotation: PropTypes.number.isRequired
};

export default DraggableNumber;