import { combineReducers } from "redux";

import user from "./user";
import auth from "./auth";
import app from "./app";
import content from "./content";

export default combineReducers({
  user,
  auth,
  app,
  content,
});
