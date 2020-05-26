import React from "react";
import { BrowserRouter } from "react-router-dom";

import Topbar from "../../components/Topbar";

import Routes from "../../routes";

import "./App.scss";

const App = () => (
  <BrowserRouter>
    <div data-testid="app">
      <Topbar />
      <Routes />
    </div>
  </BrowserRouter>
);

export default App;
