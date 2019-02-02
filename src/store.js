import { createStore, compose, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import rootReducer, { rootSaga } from './modules';

const sagaMiddleware = createSagaMiddleware();
// Создайте sagaMiddleware

const combine = compose(
  applyMiddleware(sagaMiddleware),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

const createAppStore = () => {
  const store = createStore(rootReducer, combine)

  sagaMiddleware.run(rootSaga);

  return store

  // Подключите корневой редьюсер
  // Скорее всего вы захотите подключить Redux DevTools
  // Не забудьте подключить sagaMiddleware
};

export default createAppStore;
