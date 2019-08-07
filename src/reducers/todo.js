const initialState = {
    todos: []
};

export default function todoReducer(state = initialState, action) {
    switch (action.type) {
        case 'RECEIVE_TODOS':
            return {
                ...state,
                todos: action.payload.todos
            }
        default:
            return state;
    }
}