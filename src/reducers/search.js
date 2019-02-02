import {searchRequest, searchSuccess, searchError} from '../actionsCreator/actions';

export default (state = {
    isLoading: false,
    preview: [],
    error: false
}, action)=>{
    switch (action.type) {
        case searchRequest.toString():
            return {
                ...state,
                isLoading: true, 
            }
        case searchError.toString():
            return {
                ...state,
                isLoading: false,
                error: true
            }
        case searchSuccess.toString():
            return {
                ...state,
                isLoading: false,
                preview: action.payload
            }
    default:
            return state;
    }
}