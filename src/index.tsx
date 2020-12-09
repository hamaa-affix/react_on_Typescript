import React from "react";
import ReactDOM from "react-dom";
import { Route, BrowserRouter } from "react-router-dom";
import Login from "./Logins/Login";
import App from "./App";

import "./styles.css";

const rootElement = document.getElementById("root");

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <>
        <Route exact path="/" component={App} />
        <Route exact path="/login" component={Login} />
      </>
    </BrowserRouter>
  </React.StrictMode>,
  rootElement
);
