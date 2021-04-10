import { getAllFiles, getFolder } from "../util/file_util";
export const RECEIVE_FILES = "RECEIVE_FILES";

export const receiveFiles = (files) => ({
  type: RECEIVE_FILES,
  files: files.data,
});

export const fetchFiles = () => (dispatch) =>
  getAllFiles()
    .then((files) => dispatch(receiveFiles(files)))
    .catch((err) => {
      throw err;
    });

export const fetchFolder = (folderId) => (dispatch) =>
  getFolder(folderId)
    .then((files) => dispatch(receiveFiles(files)))
    .catch((err) => {
      throw err;
    });
