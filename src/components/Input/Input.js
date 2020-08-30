import React from 'react';

import Button from '../Button/index';

export default function Input({ setItemList }) {
    const [inputValue = [], setInputValue] = React.useState();

    return (
        <div>
            <label htmlFor="input" className="label-input">Digite aqui...</label>
            <input 
                id="input" 
                className="input" 
                type="text" 
                value={inputValue || ''}
                onChange={(event) => {
                    setInputValue(event.target.value);
                }}
            />
            <Button 
                inputValue={inputValue}
                setItemList={setItemList}
            />
        </div>
    );
}