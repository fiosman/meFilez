import { RECEIVE_FILES } from "../actions/file_actions";
import { LOGOUT_CURRENT_USER } from "../actions/user_actions";

const filesReducer = (state = {}, action) => {
  Object.freeze(state);

  switch (action.type) {
    case RECEIVE_FILES:
      return Object.assign({}, action.files);
    case LOGOUT_CURRENT_USER:
      return {};
    default:
      return state;
  }
};

export default filesReducer;
