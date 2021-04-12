import { RECEIVE_SEARCH_TERM, CLEAR_FILTERS } from "../actions/file_actions";

const searchReducer = (state = "", action) => {
  Object.freeze(state);

  switch (action.type) {
    case RECEIVE_SEARCH_TERM:
      return action.searchTerm;
    case CLEAR_FILTERS:
      return "";
    default:
      return state;
  }
};

export default searchReducer;
