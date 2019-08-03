const initialState = {
    loading: true
};

export default function appReducer(state = initialState, action) {
    switch (action.type) {
        case 'LOADING':
            return {
                ...state,
                loading: true
            }
        case 'LOADED':
            return {
                ...state,
                loading: false
            }
        default:
            return state;
    }
}