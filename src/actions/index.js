import uuid from 'uuid/v4';

export const inputs = (name, value) => {
    return {
        type: "GETTING_INPUT",
        input: { [name]: value }
    }
}
export const display = obj => {
    return {
        type: "DISPLAY_VALUES",
        obj,
        id: uuid()
    }
}

export const remove = index => {
    return {
        type: "REMOVE_VALUE",
        index
    }
}