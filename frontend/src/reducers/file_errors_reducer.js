import {
  RECEIVE_FILE_ERRORS,
  REMOVE_FILE_ERRORS,
} from "../actions/file_actions";

const fileErrorsReducer = (state = [], action) => {
  Object.freeze(state);

  switch (action.type) {
    case RECEIVE_FILE_ERRORS:
      return action.errors;
    case REMOVE_FILE_ERRORS:
      return [];
    default:
      return state;
  }
};

export default fileErrorsReducer;
