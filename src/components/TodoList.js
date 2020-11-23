import React from 'react';
import TodoListItem from "./TodoListItem";
import './TodoList.css'

const TodoLIst = ({todos}) => {

  const elements = todos.map((item) => {

      const {id, ... itemProps} = item

        return(
            <li key={id} className="list-group-item">
                <TodoListItem {... itemProps}/>
            </li>
        )
    })
    return (
        <ul className="list-group todo-list">
            {elements}
 {/*if atr i empty its mean attr === true;*/}
        </ul>
    )
}
export default TodoLIst;