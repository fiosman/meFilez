import { getAllFiles, getFolder } from "../util/file_util";
export const RECEIVE_FILES = "RECEIVE_FILES";
export const RECEIVE_SEARCHED_FILES = "RECEIVE_SEARCHED_FILES";
export const CLEAR_FILTERS = "CLEAR_FILTERS";

export const receiveFiles = (files) => ({
  type: RECEIVE_FILES,
  files: files.data,
});

export const receiveSearchedFiles = (searchTerm) => ({
  type: RECEIVE_SEARCHED_FILES,
  searchTerm,
});

export const clearFilters = () => ({
  type: CLEAR_FILTERS,
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
