const initialState = {
    loading: true,
    authed: false
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
        case 'AUTHED':
            return {
                ...state,
                authed: true
            }
        case 'UNAUTHED':
            return {
                ...state,
                authed: false
            }
        default:
            return state;
    }
}