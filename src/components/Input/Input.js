import React from 'react';
import Button from '../Button/index';

const Input = ({ item, addItem, onChangeValue }) => {

    function onClickHandler() {
        addItem(item);
    }

    return (
        <div>
            <label htmlFor="input">Digite aqui...</label>
            <input 
                value={item} 
                onChange={onChangeValue}
                onKeyDown={(event) => {
                    if (event.key === 'Enter') {
                        console.log('entrou aqui');
                        addItem(item);
                    }
                }}
                type="text" 
                id="input" 
            />
            <Button onClickHandler={onClickHandler} />
        </div>
    );
}

export default Input;