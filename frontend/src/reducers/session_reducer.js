import { RECEIVE_CURRENT_USER } from "../actions/user_actions";

const _defaultState = {
  id: null,
};
export const usersReducer = (state = _defaultState, action) => {
  Object.freeze(state);

  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      return Object.assign(
        {},
        {
          id: action.currentUser._id,
        }
      );
    default:
      return state;
  }
};

export default usersReducer;
