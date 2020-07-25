import { takeLatest, call } from "redux-saga/effects";

import * as actions from "./userAction";
import { getUsersWorker, getUserAddressesWorker } from "./userWorkers";

export function* watchGetUsers() {
  yield takeLatest(actions.GET_USERS, function* (loadAction) {
    yield call(getUsersWorker, loadAction.payload);
  });
}

export function* watchGetUserAddresses() {
  yield takeLatest(actions.GET_USER_ADDRESSES, function* (loadAction) {
    yield call(getUserAddressesWorker, loadAction.payload);
  });
}
