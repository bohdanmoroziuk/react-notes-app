import React from 'react';
import { render } from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from './reducers/root';
import App from './components/App/App';
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEdit, faTrashAlt, faPlus } from '@fortawesome/free-solid-svg-icons'
import './styles/styles.css';
import * as serviceWorker from './serviceWorker';
import Database from './database/Database';

const initialState = Database.get() || {};

const store = createStore(rootReducer, initialState);

const RootElement = document.getElementById('root');

library.add(faEdit, faTrashAlt, faPlus);

store.subscribe(() => {
    Database.set(store.getState());
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