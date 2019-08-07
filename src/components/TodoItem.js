import { Checkbox, ListItem, ListItemText } from "@material-ui/core";
import React from 'react';

const TodoItem = ({ task, isDone, handleCheck }) => {
    return (<>
        <ListItem>
            <Checkbox
                checked={isDone}
            />
            <ListItemText primary={task} style={isDone ? { textDecoration: 'line-through' } : {}} />
        </ListItem>
    </>);
}

export default TodoItem;