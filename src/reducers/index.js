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

const display = (state = [], action) => {
    switch(action.type) {
        case "DISPLAY_VALUES":
            return [
                ...state,
                {
                    ...action.obj,
                    id: action.id,
                }
            ]
        case "REMOVE_VALUE": 
            return [
                ...state.slice(0, action.index),
                ...state.slice(action.index, 0),
                ...state.slice(action.index + 1)
            ]
        default:
            return state;
    }
}

export const rReducer = combineReducers({
    inputs,
    display
})


