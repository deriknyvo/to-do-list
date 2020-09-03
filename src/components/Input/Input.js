import React from 'react';

import './Input.css';

const Input = ({ value, onKeydownHandler, onChangeValueHandler }) => {
    return (
        <div id="input-container">
            <input 
                value={value} 
                onChange={onChangeValueHandler}
                onKeyDown={onKeydownHandler}
                type="text" 
                id="input" 
            />
            <label htmlFor="input">Digite aqui...</label>
        </div>
    );
}

export default Input;