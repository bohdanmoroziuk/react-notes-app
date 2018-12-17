import { ACTION_TYPES } from '../constants';

const initialState = {
    list: [],
    search: ''
};

const notesReducer = (state = initialState, action) => {
    switch(action.type) {
        case ACTION_TYPES.ADD_NOTE:
            return { ...state, list: [ action.note, ...state.list ] };
        case ACTION_TYPES.REMOVE_NOTE:
            return { ...state, list: state.list.filter(note => note.id !== action.id) };
        case ACTION_TYPES.EDIT_NOTE:
            return { ...state, list: state.list.map(note => {
                return note.id === action.id
                    ? { ...note, ...action.note }
                    : note;
            }) };
        case ACTION_TYPES.SEARCH_NOTE:
            return { ...state, search: action.value };
        default:
            return state;
    }
};

export default notesReducer;