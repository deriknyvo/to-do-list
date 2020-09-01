import React from 'react';

const Input = ({ item, onKeydownHandler, onChangeValue }) => {
    return (
        <div>
            <label htmlFor="input">Digite aqui...</label>
            <input 
                value={item} 
                onChange={onChangeValue}
                onKeyDown={onKeydownHandler}
                type="text" 
                id="input" 
            />
        </div>
    );
}

export default Input;