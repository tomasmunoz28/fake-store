import React from "react";
import ReactDOM from "react-dom/client";
import { StoreApp } from "./StoreApp";
import { Provider } from "react-redux";
import { store } from "./store/store";

import "./styles.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <StoreApp />
    </Provider>
  </React.StrictMode>
);
