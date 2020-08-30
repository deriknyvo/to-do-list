import React from 'react';

export default function List({ itemsList }) {
    return (
        <div>
            <ul>
                {itemsList.map(item => {
                    return (
                        <li key={item}>{item}</li>
                    )
                })}
            </ul>
        </div>
    );
}