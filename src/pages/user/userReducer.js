import { combineReducers } from "redux";

const initialActivities = { result: [], error: null, fetching: false };

const users = (state = initialActivities, action) => {
  switch (action.type) {
    case "GET_USERS":
      return { ...state, fetching: true };
    case "GET_USERS_SUCCESS":
      return { result: action.result, error: null, fetching: false };
    case "GET_USERS_ERROR":
      return { result: [], error: action.error, fetching: false };
    default:
      return state;
  }
};

const user = (state = initialActivities, action) => {
  switch (action.type) {
    case "GET_USER":
      return { ...state, fetching: true };
    case "GET_USER_SUCCESS":
      return { result: action.result, error: null, fetching: false };
    case "GET_USER_ERROR":
      return { result: [], error: action.error, fetching: false };
    default:
      return state;
  }
};

export default combineReducers({
  users,
  user,
});
