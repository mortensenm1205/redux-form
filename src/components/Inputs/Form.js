import React from 'react';

const InputsForm = ({ submit, change }) => {
    return (
        <form onSubmit={submit}>
            <input type="text" name="input" onChange={change} />
            <input type="text" name="second_input" onChange={change} />
            <button>Add Value</button>
        </form>
    );
}

export default InputsForm;