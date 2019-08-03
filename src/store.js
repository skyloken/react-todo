import { connectRouter, routerMiddleware } from 'connected-react-router';
import { applyMiddleware, combineReducers, createStore as reduxCreateStore } from 'redux';
import { logger } from 'redux-logger';
import thunk from 'redux-thunk';

export default function createStore(history) {
    return reduxCreateStore(
        combineReducers({
            router: connectRouter(history)
        }),
        applyMiddleware(
            thunk,
            routerMiddleware(history),
            logger
        )
    );
}
