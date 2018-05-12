import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import './fonts/index.css';

import Game from './containers/Game';
import reducer from './reducers';
import registerServiceWorker from './registerServiceWorker';

/* eslint-disable no-underscore-dangle */
// create a store that has redux-thunk middleware enabled
const createStoreWithMiddleware = applyMiddleware(
    thunk
  )(createStore);
  
// const store = createStoreWithMiddleware(rootReducer);

const store = createStoreWithMiddleware(
    reducer, /* preloadedState, */
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);
/* eslint-enable */

ReactDOM.render(
    <Provider store={store}>
        <Game />
    </Provider>,
    document.getElementById('root'),
);

registerServiceWorker();
