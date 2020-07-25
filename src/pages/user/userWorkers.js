import axios from "axios";
import { call, put } from "redux-saga/effects";
import { showLoading, hideLoading } from "react-redux-loading-bar";

import * as actions from "./userAction";
import config from "../../config/appConfig";

const callToAPI = async (method, url, data = {}) => {
  try {
    // You can use fetch but the status code has to handle
    const response = await axios({
      method: method,
      url: url,
      data: JSON.stringify(data),
    });
    return response.data;
  } catch (error) {
    throw new Error(error);
  }
};

export function* getUsersWorker() {
  try {
    yield put(showLoading());
    const result = yield call(callToAPI, "GET", config.getUserInfoEndpoint);
    yield put({
      result,
      error: null,
      type: actions.GET_USERS_SUCCESS,
    });
  } catch (error) {
    yield put({
      result: null,
      error,
      type: actions.GET_USERS_ERROR,
    });
  } finally {
    yield put(hideLoading());
  }
}

export function* getUserAddressesWorker(userId) {
  try {
    yield put(showLoading());
    const url = `${config.getUserInfoEndpoint}/${userId}/addresses`;
    const result = yield call(callToAPI, "GET", url);
    yield put({
      result,
      error: null,
      type: actions.GET_USER_ADDRESSES_SUCCESS,
    });
  } catch (error) {
    yield put({
      result: null,
      error,
      type: actions.GET_USER_ADDRESSES_ERROR,
    });
  } finally {
    yield put(hideLoading());
  }
}
