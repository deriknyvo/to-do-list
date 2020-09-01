import React from 'react';
import Input from '../Input/index';
import Button from '../Button/index';

const Form = ({ item, addItemList, setItem }) => {

    function onKeydownHandler(event) {
        if (event.key === 'Enter') {
            event.preventDefault();
            addItemList(item);
        }
    }

    return (
        <form>
            <Input 
                value={item}
                onChangeValueHandler={(event) => setItem(event.target.value)}
                onKeydownHandler={onKeydownHandler}
            />
            
            <Button onClickHandler={() => addItemList(item)} />
        </form>
    )
}

export default Form;