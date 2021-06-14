import React from 'react';

function handleChange() {
    console.log('Entering password...');
}

function Keypad() {
    return (
        <input onChange={handleChange} type="password"></input>
    )
}

export default Keypad;
