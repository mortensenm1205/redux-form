import { combineReducers } from 'redux';

const inputs = (state = {}, action) => {
    switch(action.type) {
        case "GETTING_INPUT":
            return {
                ...state,
                ...action.input
            }
        default:
            return state;
    }
}

export const rReducer = combineReducers({
    inputs
})


