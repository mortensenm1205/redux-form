import React from 'react';

const Display = ({ display, remove }) => {
    return (
        <div>
            {display.map((value, index) => {
                return (
                    <div key={index} onClick={() => remove(index)}>
                        <h3>{value.input}</h3>
                        <h3>{value.second_input}</h3>
                    </div>
                )
            })}
        </div>
    )
}

export default Display;