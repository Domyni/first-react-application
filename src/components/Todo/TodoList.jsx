import React from 'react';
import { v4 as uuidv4 } from 'uuid';

function todoList (props){
    const taskListItems = props.list;
    return (
        <ul>
            {taskListItems.map((value) => {
                return <li key = {uuidv4()}> {value} </li>
            })} 
        </ul>
    )
}

export default todoList;













