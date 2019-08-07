import { Box, Button, Card, Input, List } from '@material-ui/core';
import React from 'react';
import TodoItem from './TodoItem';

class Todo extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            task: ''
        }
    }

    handleChange = (event) => {
        this.setState({
            ...this.state,
            task: event.target.value
        });
    }

    handleClick = (event) => {
        const task = this.state.task;
        if (task !== '') {
            this.props.addTask(this.state.task);
            this.setState({
                ...this.state,
                task: ''
            })
        }
    }

    render() {
        const { todos } = this.props;
        return (
            <Card>
                <Box p={5} textAlign='center'>
                    <Input
                        type='text'
                        value={this.state.task}
                        onChange={this.handleChange}
                        placeholder='ToDo'
                        style={{ marginRight: 20 }} />
                    <Button
                        variant='contained'
                        color='primary'
                        onClick={this.handleClick}>Add</Button>
                    <List style={{ marginTop: 20 }}>
                        {todos.map((todo, i) => (
                            <TodoItem key={i} task={todo.task} isDone={todo.isDone} />
                        ))}
                    </List>
                </Box>
            </Card>
        );
    }
}

export default Todo;