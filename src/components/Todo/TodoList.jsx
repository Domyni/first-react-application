import React from 'react';

function todoList (props){
    const taskListItems = props.list;
    return (
        <ul>
            {taskListItems.map((value, index) => {
                return <li key={index}> {value} </li>
            })} 
        </ul>
    )
}

export default todoList