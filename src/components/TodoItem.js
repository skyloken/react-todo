import { Checkbox, ListItem, ListItemText } from "@material-ui/core";
import React from 'react';

const TodoItem = ({ todo, handleCheck }) => {
    return (<>
        <ListItem>
            <Checkbox
                checked={todo.isDone}
                onChange={handleCheck(todo.id)}
            />
            <ListItemText primary={todo.task} style={todo.isDone ? { textDecoration: 'line-through' } : {}} />
        </ListItem>
    </>);
}

export default TodoItem;