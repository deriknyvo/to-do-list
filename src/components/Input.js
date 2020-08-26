import React from 'react';
import './Input.css';

export default function Input() {
    return (
        <label>
            <span className="label-input">Digite aqui...</span>
            <input className="input" type="text" />
        </label>
    );
}