export const inputs = (name, value) => {
    return {
        type: "GETTING_INPUT",
        input: { [name]: value }
    }
}
let ID = 0;
export const display = obj => {
    ID += 1;
    return {
        type: "DISPLAY_VALUES",
        obj,
        id: ID
    }
}

export const remove = index => {
    return {
        type: "REMOVE_VALUE",
        index
    }
}