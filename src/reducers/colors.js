import { ACTION_TYPES } from '../constants';

const initialState = [ 'grey', '#0095dd', 'crimson' ];

const colorsReducer = (state = initialState, action) => {
    switch(action.type) {
        case ACTION_TYPES.ADD_COLOR:
            return [ action.color, ...state ];
        default:
            return state;
    }
};

export default colorsReducer;