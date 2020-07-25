import { combineReducers } from "redux";
import * as actions from "./userAction";

const initialActivities = {
  result: [],
  error: null,
  fetching: false,
  searchText: null,
};

const users = (state = initialActivities, action) => {
  switch (action.type) {
    case actions.GET_USERS:
      return { ...state, fetching: true };
    case actions.GET_USERS_SUCCESS:
      return { ...state, result: action.result, error: null, fetching: false };
    case actions.GET_USERS_ERROR:
      return { ...state, result: [], error: action.error, fetching: false };
    case actions.SEARCH_USERS:
      return { ...state, searchText: action.payload };
    default:
      return state;
  }
};

const addresses = (state = initialActivities, action) => {
  switch (action.type) {
    case actions.GET_USER_ADDRESSES:
      return { ...state, fetching: true };
    case actions.GET_USER_ADDRESSES_SUCCESS:
      return { ...state, result: action.result, error: null, fetching: false };
    case actions.GET_USER_ADDRESSES_ERROR:
      return { ...state, result: [], error: action.error, fetching: false };
    default:
      return state;
  }
};

export default combineReducers({
  users,
  addresses,
});
