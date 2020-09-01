import React from 'react';

const Button = ({ onClickHandler }) => {
    return (
        <button type="button" onClick={onClickHandler}>Adicionar</button>
    );
}

export default Button;