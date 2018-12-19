import { ACTION_TYPES } from '../constants';

export const addNote = (note) => ({
    type: ACTION_TYPES.ADD_NOTE,
    note
});

export const removeNote = (id) => ({
    type: ACTION_TYPES.REMOVE_NOTE,
    id
});

export const editNote = (id, text) => ({
    type: ACTION_TYPES.EDIT_NOTE,
    id,
    text
});

export const searchNote = (value) => ({
    type: ACTION_TYPES.SEARCH_NOTE,
    value
});

export const addColor = (color) => ({
    type: ACTION_TYPES.ADD_COLOR,
    color
});