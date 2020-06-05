import React from "react";
import { BrowserRouter } from "react-router-dom";

import { Provider } from "react-redux";

import store  from "../../store";

import Routes from "../../routes/";

import "./App.scss";

const App = () => (
  <Provider store={store}>
    <div className="app" data-testid="app">
      <BrowserRouter>
        <Routes />
      </BrowserRouter>
    </div>
  </Provider>
);

export default App;
