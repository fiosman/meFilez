import {
  signupUser,
  logoutUser,
  loginUser,
  setAuthToken,
} from "../util/user_util";
export const RECEIVE_CURRENT_USER = "RECEIVE_CURRENT_USER";
export const LOGOUT_CURRENT_USER = "LOGOUT_CURRENT_USER";
export const RECEIVE_SESSION_ERRORS = "RECEIVE_SESSION_ERRORS";
export const REMOVE_SESSION_ERRORS = "REMOVE_SESSION_ERRORS";

export const receiveCurrentUser = (currentUser) => ({
  type: RECEIVE_CURRENT_USER,
  currentUser: currentUser.data,
});

export const logoutCurrentUser = () => ({
  type: LOGOUT_CURRENT_USER,
});

export const receiveSessionErrors = (errors) => ({
  type: RECEIVE_SESSION_ERRORS,
  errors,
});

export const removeSessionErrors = () => ({
  type: REMOVE_SESSION_ERRORS,
});

export const signup = (userDetails) => (dispatch) =>
  signupUser(userDetails)
    .then((user) => {
      setAuthToken();
      dispatch(receiveCurrentUser(user));
      dispatch(removeSessionErrors());
    })
    .catch((err) => {
      dispatch(receiveSessionErrors(err.response.data));
      throw err;
    });

export const login = (userDetails) => (dispatch) =>
  loginUser(userDetails)
    .then((user) => {
      setAuthToken();
      dispatch(receiveCurrentUser(user));
      dispatch(removeSessionErrors());
    })
    .catch((err) => {
      dispatch(receiveSessionErrors(err.response.data));
      throw err;
    });

export const logout = () => (dispatch) =>
  logoutUser()
    .then(() => dispatch(logoutCurrentUser()))
    .catch((err) => {
      dispatch(receiveSessionErrors(err.response.data));
      throw err;
    });
