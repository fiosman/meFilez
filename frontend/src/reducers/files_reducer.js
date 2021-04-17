import {
  RECEIVE_FILE,
  RECEIVE_FILES,
  REMOVE_FILE,
} from "../actions/file_actions";
import { LOGOUT_CURRENT_USER } from "../actions/user_actions";

const filesReducer = (state = {}, action) => {
  Object.freeze(state);

  switch (action.type) {
    case RECEIVE_FILES:
      return Object.assign({}, action.files);
    case RECEIVE_FILE:
      return Object.assign({}, state, {
        [action.file._id]: action.file,
      });
    case REMOVE_FILE:
      let currentState = Object.assign({}, state);

      for (const file in currentState) {
        if (currentState[file]._id === action.fileId) {
          delete currentState[file];
        }
      }
      return currentState;
    case LOGOUT_CURRENT_USER:
      return {};
    default:
      return state;
  }
};

export default filesReducer;
