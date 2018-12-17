import { ACTION_TYPES } from '../constants';

export const addNote = (note) => ({
    type: ACTION_TYPES.ADD_NOTE,
    note
});

export const removeNote = (id) => ({
    type: ACTION_TYPES.REMOVE_NOTE,
    id
});

export const editNote = (id, note) => ({
    type: ACTION_TYPES.EDIT_NOTE,
    id,
    note
});

export const addColor = (color) => ({
    type: ACTION_TYPES.ADD_COLOR,
    color
});