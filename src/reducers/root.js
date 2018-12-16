import { combineReducers } from 'redux';
import colorsReducer from './colors';
import notesReducer from './notes';

const rootReducer = combineReducers({
    colors: colorsReducer,
    notes: notesReducer
});

export default rootReducer;