import axios from "axios";

export const getAllFiles = () => {
  return axios.get("/api/files/");
};

export const getFolder = (fileId) => {
  return axios.get(`/api/files/${fileId}`);
};

export const deleteFile = (fileId) => {
  return axios.delete(`/api/files/${fileId}`);
};
