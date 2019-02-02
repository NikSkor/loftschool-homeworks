import { combineReducers } from 'redux';
import { handleActions } from 'redux-actions';
import { fetchRequest, fetchSuccess, fetchFailure } from './actions';

const isLoading = handleActions(
    {
        [fetchRequest]:(state={}) => {
        state.isLoading = true
        },
        [fetchSuccess]:(state={}) => {
            state.isLoading = false
        },
        [fetchFailure]:(state={}) => {
            state.isLoading = false
        },  
    }, false
)

const data = handleActions(
    {
        [fetchSuccess]: (state={}, {payload}) => {
            state.data = payload
        }
    }, null
)

const error = handleActions({
        [fetchRequest]:(state={}) => {
            state.error = null
        },
        [fetchSuccess]:(state={}) => {
            state.error = null
        },
        [fetchFailure]:(state={}, {payload}) => {
            state.error = payload
        },
}, null
);

export default combineReducers({
    isLoading,
    data,
    error
});

// Обратите внимание на тесты reducer.test.js
// Они помогут вам написать редьюсер
