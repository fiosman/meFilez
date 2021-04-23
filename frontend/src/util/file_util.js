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

export const createFile = (data) => {
  return axios.post("/api/files/", data);
};

export const updateFile = (file, fileId) => {
  return axios.patch(`/api/files/${fileId}`, file);
};
