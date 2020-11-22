import React from 'react';
import TodoListItem from "./TodoListItem";

const TodoLIst = ({ todos }) => {
    const elements = todos.map((item) => {
        console.log({...item});
        return(
            <li>
                <TodoListItem {...item}/>
            </li>
        )
    })
    return (
        <ul>
            {elements}
 {/*if atr i empty its mean attr === true;*/}
        </ul>
    )
}
export default TodoLIst;