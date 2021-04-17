import userErrorsReducer from "./user_errors_reducer";
import fileErrorsReducer from "./file_errors_reducer";
import { combineReducers } from "redux";

const errorsReducer = combineReducers({
  user: userErrorsReducer,
  file: fileErrorsReducer,
});

export default errorsReducer;
