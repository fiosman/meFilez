import axios from "axios";

export const signupUser = (userDetails) => {
  return axios.post("/api/users/register", userDetails);
};

export const loginUser = (userDetails) => {
  return axios.post("/api/users/login", userDetails);
};

export const logoutUser = () => {
  return axios.get("/api/users/logout");
};

export const setAuthToken = () => {
  axios.defaults.withCredentials = true;
};
