import searchReducer from "./search_reducer";
import { combineReducers } from "redux";

const filtersReducer = combineReducers({
  search: searchReducer,
});

export default filtersReducer;
