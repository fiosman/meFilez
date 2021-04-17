import { getAllFiles, getFolder, deleteFile } from "../util/file_util";
export const RECEIVE_FILES = "RECEIVE_FILES";
export const RECEIVE_SEARCH_TERM = "RECEIVE_SEARCH_TERM";
export const CLEAR_FILTERS = "CLEAR_FILTERS";
export const REMOVE_FILE = "REMOVE_FILE";

export const receiveFiles = (files) => ({
  type: RECEIVE_FILES,
  files: files.data,
});

export const receiveSearchTerm = (searchTerm) => ({
  type: RECEIVE_SEARCH_TERM,
  searchTerm,
});

export const clearFilters = () => ({
  type: CLEAR_FILTERS,
});

export const removeFile = (file) => ({
  type: REMOVE_FILE,
  fileId: file.data,
});

export const fetchFiles = () => (dispatch) =>
  getAllFiles()
    .then((files) => dispatch(receiveFiles(files)))
    .catch((err) => {
      // console.log(err);
      throw err;
    });

export const fetchFolder = (folderId) => (dispatch) =>
  getFolder(folderId)
    .then((files) => dispatch(receiveFiles(files)))
    .catch((err) => {
      // console.log(err);
      throw err;
    });

export const wipeFile = (fileId) => (dispatch) =>
  deleteFile(fileId)
    .then((file) => dispatch(removeFile(file)))
    .catch((err) => {
      throw err;
    });
