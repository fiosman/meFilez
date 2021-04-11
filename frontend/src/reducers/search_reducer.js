import { RECEIVE_SEARCHED_FILES, CLEAR_FILTERS } from "../actions/file_actions";

const searchReducer = (state = "", action) => {
  Object.freeze(state);

  switch (action.type) {
    case RECEIVE_SEARCHED_FILES:
      return action.searchTerm;
    case CLEAR_FILTERS:
      return "";
    default:
      return state;
  }
};

export default searchReducer;
