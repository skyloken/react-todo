import { Checkbox, IconButton, ListItem, ListItemText } from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";
import React from 'react';

const TodoItem = ({ todo, deleteTask, doneTask }) => {

    const handleCheck = todoId => event => {
        const isDone = event.target.checked;
        doneTask(todoId, isDone);
    };

    const handleDeleteClick = todoId => event => {
        deleteTask(todoId);
    };

    return (<>
        <ListItem>
            <Checkbox
                checked={todo.isDone}
                onChange={handleCheck(todo.id)}
            />
            <ListItemText
                primary={todo.task}
                style={todo.isDone ? { textDecoration: 'line-through' } : {}} />
            <IconButton
                onClick={handleDeleteClick(todo.id)}><DeleteIcon />
            </IconButton>
        </ListItem>
    </>);
}

export default TodoItem;