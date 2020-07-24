import { all } from "redux-saga/effects";

import userSaga from "./pages/user/userSaga";

export default function* rootSaga() {
  yield all([...userSaga].map((fn) => fn()));
}
