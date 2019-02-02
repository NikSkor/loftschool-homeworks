import {showRequest, showSuccess, showError} from '../actionsCreator/actions';

export default (state = {
    isLoading: false,
    page: [],
    error: false
}, action)=>{
    switch (action.type) {
        case showRequest.toString():
            return {
                ...state,
                isLoading: true, 
            }
        case showError.toString():
            return {
                ...state,
                isLoading: false,
                error: true
            }
        case showSuccess.toString():
            return {
                ...state,
                isLoading: false,
                page: action.payload
            }
    default:
            return state;
    }
}

