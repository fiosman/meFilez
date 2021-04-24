import {
  RECEIVE_NEW_FILE,
  RECEIVE_FILES,
  REMOVE_FILE,
  RECEIVE_UPDATED_FILE,
} from "../actions/file_actions";
import { LOGOUT_CURRENT_USER } from "../actions/user_actions";

const filesReducer = (state = {}, action) => {
  Object.freeze(state);

  switch (action.type) {
    case RECEIVE_FILES:
      return Object.assign({}, action.files);
    case RECEIVE_NEW_FILE:
      return Object.assign({}, state, {
        [action.file._id]: action.file,
      });
    case RECEIVE_UPDATED_FILE:
      let currState = Object.assign({}, state);

      for (let fileKey in currState) {
        if (currState[fileKey]._id === action.file._id) {
          currState[fileKey] = action.file;
        }
      }
      return currState;
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
