import React from "react";
import ReactDOM from "react-dom/client";
import "./App.css";
import App from "./App";
import Context from "./context";
import { Provider } from "react-redux";
import store from "./store/configStore";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <Context>
        <App />
      </Context>
    </Provider>
  </React.StrictMode>
);
