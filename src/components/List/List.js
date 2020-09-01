import React from 'react';

const List = ({ list }) => {
    return (
        <ul>
            {list.map((item, index) => {
                return (
                    <li key={index}>{item}</li>
                )
            })}
        </ul>
    );
}

export default List;