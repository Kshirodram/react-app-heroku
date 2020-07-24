import { takeLatest, call } from "redux-saga/effects";

import * as actions from "./userAction";
import { getUsersWorker, getUserWorker } from "./userWorkers";

export function* watchGetUsers() {
  yield takeLatest(actions.GET_USERS, function* (loadAction) {
    yield call(getUsersWorker, loadAction.payload);
  });
}

export function* watchGetUser() {
  yield takeLatest(actions.GET_USER, function* (loadAction) {
    yield call(getUserWorker, loadAction.payload);
  });
}
