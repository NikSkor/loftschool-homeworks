import combineReducer from './reducers';
import {createStore, compose, applyMiddleware} from 'redux';
import {searchMiddleware} from './middlewares/searchMiddleware';
import {showMiddleware} from './middlewares/showMiddleware';

export default () => {
    const store = createStore(combineReducer,
        compose(
            applyMiddleware(searchMiddleware),
            applyMiddleware(showMiddleware),
            window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
        );
    return store;
}

    
