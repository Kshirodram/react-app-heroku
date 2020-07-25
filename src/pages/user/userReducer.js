import { combineReducers } from "redux";
import * as actions from "./userAction";

const initialActivities = { result: [], error: null, fetching: false };

const users = (state = initialActivities, action) => {
  switch (action.type) {
    case actions.GET_USERS:
      return { ...state, fetching: true };
    case actions.GET_USERS_SUCCESS:
      return { result: action.result, error: null, fetching: false };
    case actions.GET_USERS_ERROR:
      return { result: [], error: action.error, fetching: false };
    default:
      return state;
  }
};

const addresses = (state = initialActivities, action) => {
  switch (action.type) {
    case actions.GET_USER_ADDRESSES:
      return { ...state, fetching: true };
    case actions.GET_USER_ADDRESSES_SUCCESS:
      return { result: action.result, error: null, fetching: false };
    case actions.GET_USER_ADDRESSES_ERROR:
      return { result: [], error: action.error, fetching: false };
    default:
      return state;
  }
};

export default combineReducers({
  users,
  addresses,
});
