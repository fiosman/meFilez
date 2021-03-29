import axios from "axios";

export const getAllFiles = () => {
  return axios.get("api/files/");
};
