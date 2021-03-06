import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App numberData={[]} shuffleNumbers={() => false} onStop={() => false} placeNumber={() => false} rotateNumber={() => false} canUndo={true} canRedo={true} />, div);
  ReactDOM.unmountComponentAtNode(div);
});
