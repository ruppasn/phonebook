import { all } from "redux-saga/effects";
import fetchUsersSagas from "../user/userSagas";

export default function* rootSaga() {
  yield all([
    ...fetchUsersSagas
  ])
}

