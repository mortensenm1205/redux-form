export const inputs = (state = {}, action) => {
    switch (action.type) {
        case "GETTING_INPUT":
            return {
                ...state,
                ...action.input
            }
        default:
            return state;
    }
}
