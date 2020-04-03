import React from 'react';

function Todo(props) {
    const actionables = props.actionables;
    const listItems = actionables.map( (item, index) =>
        <li key={index}> {item} </li>
    );
    // only use index as last resort if data does not have IDs
    // do not use index if order of items change, use hash function of values
    
    return (
        <ul>
          {listItems}
        </ul>
    );
}

export default Todo;

