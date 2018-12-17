import React from 'react';

export const List = ({ items }) => (
    <ul>
        {items.map(item => <li className="list" key={item}>{item}</li>)}
    </ul>
);

export default List;