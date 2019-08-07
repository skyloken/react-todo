const initialState = {
    todos: []
};

export default function todoReducer(state = initialState, action) {
    switch (action.type) {
        case 'ADD_TASK':
            return {
                ...state,
                todos: state.todos.concat([{
                    task: action.payload.task,
                    isDone: false
                }])
            };
        default:
            return state;
    }
}