export const inputs = (name, value) => {
    return {
        type: "GETTING_INPUT",
        input: { [name]: value }
    }
}