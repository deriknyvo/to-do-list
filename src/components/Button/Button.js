import React from 'react'

export default function Button({ inputValue, setItemList }) {
    const onClickButton = () => {
        setItemList([...inputValue, inputValue]);
    }
    
    return (
        <button 
            type="button"
            onClick={onClickButton}>
            Salvar
        </button>
    )
}
