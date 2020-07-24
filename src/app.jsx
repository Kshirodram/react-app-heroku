import React from "react";
import { Provider } from "react-redux";
import LoadingBar from "react-redux-loading-bar";

import UserPage from "./pages/user/index.jsx";
import { store } from "./store";

// Main app bootstrap.
const App = () => (
  <Provider store={store}>
    <LoadingBar style={{ backgroundColor: "#77B722", height: "4px" }} />
    <UserPage />
  </Provider>
);

export default App;
