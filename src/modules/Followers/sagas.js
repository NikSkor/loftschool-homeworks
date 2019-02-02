import { takeLatest, select, put, call, fork } from 'redux-saga/effects';
import { fetchRequest, fetchSuccess, fetchFailure } from './actions';
import { getFollowersInfo } from './api';
import { getApiKey } from '../Auth';

function* fetchFollowersWatcher() {
  yield takeLatest(fetchRequest, fetchFollowersFlow); // Замените вопросительный знак на подходящий экшен
}

export function* fetchFollowersFlow(action) {
  const apiKey = yield select(getApiKey);
  const payload = action.payload;
  try {
    const result = yield call(getFollowersInfo, apiKey, payload);

    yield put(fetchSuccess(result));
  } catch (error) {
    yield put(fetchFailure(error));
  }


  // Реализуйте загрузку данных
  // Используйте экшены FETCH_SUCCESS / FETCH_FAILURE
}

export default function*() {
  yield fork(fetchFollowersWatcher);
}
