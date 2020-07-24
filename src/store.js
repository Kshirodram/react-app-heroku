import { createStore, applyMiddleware, compose } from "redux";
import createSagaMiddleware from "redux-saga";

import createRootReducer from "./rootReducers";
import rootSaga from "./rootSaga";

// helper to check server side
// TODO: move this to a util file
export const isServer = !(
  typeof window !== "undefined" &&
  window.document &&
  window.document.createElement
);
const createAppStore = () => {
  const enhancers = [];

  // integrate dev tools
  if (process.env.NODE_ENV === "development" && !isServer) {
    const { devToolsExtension } = window;
    if (typeof devToolsExtension === "function") {
      enhancers.push(devToolsExtension());
    }
  }

  const reduxSaga = createSagaMiddleware();
  const middleware = [reduxSaga];
  const composeEnhancers = compose(
    applyMiddleware(...middleware),
    ...enhancers
  );

  // check for preloaded state
  const initialState = !isServer ? window.__PRELOADED_STATE__ : {}; // eslint-disable-line

  // delete it once we store into initial state
  if (!isServer) {
    delete window.__PRELOADED_STATE__; // eslint-disable-line
  }

  const store = createStore(
    createRootReducer(),
    initialState,
    composeEnhancers
  );
  reduxSaga.run(rootSaga);

  return {
    store,
  };
};
export const { store } = createAppStore();
