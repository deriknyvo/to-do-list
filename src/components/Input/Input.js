import React from 'react';

const Input = ({ value, onKeydownHandler, onChangeValueHandler }) => {
    return (
        <div>
            <label htmlFor="input">Digite aqui...</label>
            <input 
                value={value} 
                onChange={onChangeValueHandler}
                onKeyDown={onKeydownHandler}
                type="text" 
                id="input" 
            />
        </div>
    );
}

export default Input;