const initialState = {
    user: null,
    loading: true
};

export default function authReducer(state = initialState, action) {
    switch (action.type) {
        case 'LOGIN':
            return {
                ...state,
                user: action.payload.user,
                loading: false
            };
        case 'LOGOUT':
            return {
                ...state,
                user: null,
                loading: true
            };
        default:
            return state;
    }
}