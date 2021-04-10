import axios from "axios";

export const getAllFiles = () => {
  return axios.get("api/files/");
};

export const getFile = (folderId) => {
  return axios.get(`api/files/${folderId}`);
};
