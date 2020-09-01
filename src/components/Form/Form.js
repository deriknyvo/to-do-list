import React from 'react';
import Input from '../Input/index';
import Button from '../Button/index';

const Form = ({ item, addItemList, setItem }) => {
    function onClickHandler() {
        addItemList(item);
    }

    function onChangeValue(event) {
        setItem(event.target.value);
    }

    function onKeydownHandler(event) {
        if (event.key === 'Enter') {
            event.preventDefault();
            addItemList(item);
        }
    }

    return (
        <form>
            <Input 
                item={item}
                onChangeValue={onChangeValue}
                onKeydownHandler={onKeydownHandler}
            />
            
            <Button onClickHandler={onClickHandler} />
        </form>
    )
}

export default Form;