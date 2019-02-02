import { combineReducers } from 'redux';
import { handleActions } from 'redux-actions';
import { addApiKey } from './actions';

const apiKey = handleActions(
    {
      [addApiKey]: (state ={}, { payload }) =>
        payload
    },
    null
  );
  
  export default combineReducers({
    apiKey
  });
  
  export const getApiKey = ({ auth }) => auth.apiKey;
  export const getIsAuthorized = ({ auth }) => auth.apiKey !== null;

// В этом редьюсере вам нужно будет обрабатывать addApiKey экшен.

// Имеет смысл определить селекторы
// getIsAuthorized, getApiKey
