import { RECEIVE_FILES } from "../actions/file_actions";

const fileReducer = (state = {}, action) => {
  Object.freeze(state);

  switch (action.type) {
    case RECEIVE_FILES:
      return Object.assign({}, action.files);
    default:
      return state;
  }
};

export default fileReducer;
