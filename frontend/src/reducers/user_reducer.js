import { RECEIVE_CURRENT_USER } from "../actions/user_actions";

export const usersReducer = (state = {}, action) => {
  Object.freeze(state);

  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      return Object.assign(
        {},
        {
          [action.currentUser.userId]: action.currentUser,
        }
      );
    default:
      return state;
  }
};

export default usersReducer;
