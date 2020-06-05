import { createStore } from "redux";
import rootReducer from "./reducers/";

import { getState, setState } from "../utils/localStorage";

const persistedState = getState("app");

const store = createStore(
  rootReducer,
  persistedState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

store.subscribe(() => {
  setState("app", store.getState());
});

export default store;
