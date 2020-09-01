import React from 'react';

const Button = ({ onClickHandler }) => {
    return (
        <button type="button" onClick={() => onClickHandler()}>Salvar</button>
    );
}

export default Button;