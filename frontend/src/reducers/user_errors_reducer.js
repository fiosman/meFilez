import {
  RECEIVE_SESSION_ERRORS,
  REMOVE_SESSION_ERRORS,
} from "../actions/user_actions";

const userErrorsReducer = (state = [], action) => {
  Object.freeze(state);

  switch (action.type) {
    case RECEIVE_SESSION_ERRORS:
      return action.errors;
    case REMOVE_SESSION_ERRORS:
      return [];
    default:
      return state;
  }
};

export default userErrorsReducer;
