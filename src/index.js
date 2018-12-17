import React from 'react';
import { render } from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from './reducers/root';
import App from './components/App/App';
import { STORAGE_KEY } from './constants';
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEdit, faTrashAlt, faPlus } from '@fortawesome/free-solid-svg-icons'
import './styles/styles.css';
import * as serviceWorker from './serviceWorker';

const initialState = JSON.parse(localStorage.getItem(STORAGE_KEY)) || {};

const store = createStore(rootReducer, initialState);

const RootElement = document.getElementById('root');

library.add(faEdit, faTrashAlt, faPlus);

store.subscribe(() => {
    const stateJSON = JSON.stringify(store.getState());
    localStorage.setItem(STORAGE_KEY, stateJSON);
});

const Index = () => (
    <Provider store={store}>
        <App />
    </Provider>
);

render(
    <Index />,
    RootElement
);

serviceWorker.unregister();