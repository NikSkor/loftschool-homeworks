import {createAction} from 'redux-actions';

export const searchRequest = createAction("SEARCH_REQUEST");
export const searchSuccess = createAction("SEARCH_SUCCESS");
export const searchError = createAction('SEARCH_ERROR');

export const showRequest = createAction("SHOW_REQUEST");
export const showSuccess = createAction("SHOw_SUCCESS");
export const showError = createAction('SHOW_ERROR');