import {showRequest, showSuccess, showError} from '../actionsCreator/actions';
import {show} from '../api';


export const showMiddleware = store => next => action => {
    if (action.type === showRequest.toString()) {
        show(action.payload)
            .then(data=> {
                store.dispatch(showSuccess(data))
            })
            .catch(error=>{
                store.dispatch(showError(error))
            })
    }
    
    
    return next(action);
};


// Реализуйте showMiddleware

// Вам необходимо обработать showRequest
// После получения данных с сервера - диспачте showSuccess
// В случае ошибки showSuccess

// На забудьте вызвать метод next.
