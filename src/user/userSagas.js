import { call, put, takeLatest } from 'redux-saga/effects';
import * as userApi from './userApi';
import * as types from './userActionTypes'

function* fetchUsers() {
  try {
    let users = yield call(userApi.fetchUsers);
    yield put({ type: types.FETCH_USERS_SUCCESS, users });
  } catch (e) {
    yield put({ type: types.FETCH_USERS_ERROR, error: e.message });
  }
}
const fetchUsersSagas = [
  takeLatest(types.FETCH_USERS, fetchUsers),
]

export default fetchUsersSagas;