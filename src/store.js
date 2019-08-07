import { connectRouter, routerMiddleware } from 'connected-react-router';
import { applyMiddleware, combineReducers, createStore as reduxCreateStore } from 'redux';
import { logger } from 'redux-logger';
import thunk from 'redux-thunk';
import appReducer from './reducers/app';
import todoReducer from './reducers/todo';

export default function createStore(history) {
    return reduxCreateStore(
        combineReducers({
            app: appReducer,
            todo: todoReducer,
            router: connectRouter(history)
        }),
        applyMiddleware(
            thunk,
            routerMiddleware(history),
            logger
        )
    );
}
