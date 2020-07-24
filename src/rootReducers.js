import { combineReducers } from "redux";
import { loadingBarReducer } from "react-redux-loading-bar";

import userState from "./pages/user/userReducer";

export default () =>
  combineReducers({
    loadingBar: loadingBarReducer,
    userState,
  });
