import React from 'react';
import { render } from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from './reducers/root';
import * as serviceWorker from './serviceWorker';

const store = createStore(rootReducer);

const RootElement = document.getElementById('root');

const Index = () => (
    <Provider store={store}>

    </Provider>
);

render(
    <Index />,
    RootElement
);

serviceWorker.unregister();