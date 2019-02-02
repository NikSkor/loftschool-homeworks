import { combineReducers } from 'redux';
import { handleActions } from 'redux-actions';
import { fetchRequest, fetchSuccess, fetchFailure } from './actions';

const isLoading = handleActions(
    {
        [fetchRequest]:(state={}) =>
        true,
        [fetchSuccess]:(state={}) => 
        false,
        [fetchFailure]:(state={}) =>
        false,  
    }, false
)

const data = handleActions(
    {
        [fetchSuccess]: (state={}, {payload}) =>
        payload
    }, null
)

const error = handleActions({
        [fetchRequest]:(state={}) =>
        null,
        [fetchSuccess]:(state={}) =>
        null,
        [fetchFailure]:(state={}, {payload}) =>
        payload,
}, null
);

export default combineReducers({
    isLoading,
    data,
    error
});
// Обратите внимание на тесты, они помогут вам написать код редьюсера
