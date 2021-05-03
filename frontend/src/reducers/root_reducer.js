import { combineReducers } from "redux";
import entitiesReducer from "./entities_reducer";
import sessionReducer from "./session_reducer";
import errorsReducer from "./errors_reducer";
import filtersReducer from "./filters_reducer";
import loadingReducer from "./loading_reducer";

const rootReducer = combineReducers({
  entities: entitiesReducer,
  session: sessionReducer,
  errors: errorsReducer,
  filters: filtersReducer,
  loading: loadingReducer,
});

export default rootReducer;
