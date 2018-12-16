import { ACTION_TYPES } from '../constants';

const initialState = [];

const notesReducer = (state = initialState, action) => {
    switch(action.type) {
        case ACTION_TYPES.ADD_NOTE:
            return [ action.note, ...state ];
        case ACTION_TYPES.REMOVE_NOTE:
            return state.filter(note => note.id !== action.id);
        case ACTION_TYPES.EDIT_NOTE:
            return state.map(note => {
                return note.id === action.id 
                    ? { ...note, ...action.note }
                    : note;
            });
        default:
            return state;
    }
};

export default notesReducer;