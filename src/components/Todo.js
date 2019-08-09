import { Box, Button, Card, Input, List } from '@material-ui/core';
import React from 'react';
import TodoItem from '../containers/TodoItem';

class Todo extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            task: ''
        }
    }

    componentDidMount() {
        this.props.fetchTodos();
    }

    handleChange = (event) => {
        this.setState({
            ...this.state,
            task: event.target.value
        });
    }

    handleAddClick = () => {
        const task = this.state.task;
        if (task !== '') {
            this.props.addTask(this.state.task);
            this.setState({
                ...this.state,
                task: ''
            })
        }
    }

    handleDeleteAllClick = () => {
        this.props.deleteAllTask();
    }

    handleDeleteDoneClick = () => {
        this.props.deleteDoneTask();
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
                        placeholder='ToDo...'
                        fullWidth
                        style={{ marginRight: 20, marginBottom: 20 }} />
                    <Button
                        variant='contained'
                        color='primary'
                        style={{ marginRight: 20 }}
                        onClick={this.handleAddClick}>Add</Button>
                    <Button
                        variant='contained'
                        color='secondary'
                        style={{ marginRight: 20 }}
                        onClick={this.handleDeleteDoneClick}>Delete Done</Button>
                    <Button
                        variant='contained'
                        color='secondary'
                        onClick={this.handleDeleteAllClick}>Delete All</Button>
                    <List style={{ marginTop: 20 }}>
                        {todos.map((todo, i) => (
                            <TodoItem key={i} todo={todo} />
                        ))}
                    </List>
                </Box>
            </Card>
        );
    }
}

export default Todo;