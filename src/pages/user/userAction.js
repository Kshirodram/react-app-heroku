// TODO: Ideally it should stay in a constant file
export const GET_USERS = "GET_USERS";
export const GET_USERS_SUCCESS = "GET_USERS_SUCCESS";
export const GET_USERS_ERROR = "GET_USERS_ERROR";

export const GET_USER_ADDRESSES = "GET_USER_ADDRESSES";
export const GET_USER_ADDRESSES_SUCCESS = "GET_USER_ADDRESSES_SUCCESS";
export const GET_USER_ADDRESSES_ERROR = "GET_USER_ADDRESSES_ERROR";

export const getUsersAction = (payload = null) => ({
  type: GET_USERS,
  payload,
});

export const getUserAddressesAction = (payload = null) => ({
  type: GET_USER_ADDRESSES,
  payload,
});
