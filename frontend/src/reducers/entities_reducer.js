import userReducer from "./user_reducer";
import filesReducer from "./files_reducer";
import { combineReducers } from "redux";

const entitiesReducer = combineReducers({
  files: filesReducer,
  user: userReducer,
});

export default entitiesReducer;
