import React from 'react';

export const List = ({ items }) => (
    <ul>
        {items.map(item => <li className="list">{item}</li>)}
    </ul>
);

export default List;