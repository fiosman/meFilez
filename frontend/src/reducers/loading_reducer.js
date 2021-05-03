import {
  START_LOADING_ALL_FILES,
  START_LOADING_SINGLE_FILE,
  RECEIVE_FILES,
  RECEIVE_NEW_FILE,
} from "../actions/file_actions";

const initialState = {
  index: {
    files: false,
  },
  detail: {
    file: false,
  },
};

const loadingReducer = (state = initialState, action) => {
  Object.freeze(state);

  switch (action.type) {
    case START_LOADING_ALL_FILES:
      return Object.assign({}, state, { index: { files: true } });
    case RECEIVE_FILES:
      return Object.assign({}, state, { index: { files: false } });
    case RECEIVE_NEW_FILE:
      return Object.assign({}, state, { detail: { file: false } });
    case START_LOADING_SINGLE_FILE:
      return Object.assign({}, state, {
        detail: { file: true },
      });
    default:
      return state;
  }
};

export default loadingReducer;
