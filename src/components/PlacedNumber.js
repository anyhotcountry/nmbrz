import React from 'react';
import PropTypes from 'prop-types';
import Number, { HEIGHT, WIDTH } from './Number';

const PlacedNumber = (props) => {
    const { name, destination, rotation } = props;
    let style = { position: 'absolute', width: WIDTH + 'px', height: HEIGHT + 'px', top: destination.y + 'px', left: destination.x + 'px' };
    return <div style={style}>
        <Number name={name} rotation={rotation} />
    </div>
};

PlacedNumber.propTypes = {
    name: PropTypes.string.isRequired,
    destination: PropTypes.shape({
        x: PropTypes.number.isRequired,
        y: PropTypes.number.isRequired
      }).isRequired,
    rotation: PropTypes.number.isRequired
};

export default PlacedNumber;