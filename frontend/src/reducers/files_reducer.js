import { RECEIVE_FILES, REMOVE_FILE } from "../actions/file_actions";
import { LOGOUT_CURRENT_USER } from "../actions/user_actions";

const filesReducer = (state = {}, action) => {
  Object.freeze(state);

  switch (action.type) {
    case RECEIVE_FILES:
      return Object.assign({}, action.files);
    case REMOVE_FILE:
      let currentState = Object.assign({}, state);
      delete currentState[action.fileId];
      return currentState;
    case LOGOUT_CURRENT_USER:
      return {};
    default:
      return state;
  }
};

export default filesReducer;
