import {
  getAllFiles,
  getFolder,
  deleteFile,
  createFile,
  updateFile,
} from "../util/file_util";
export const RECEIVE_FILES = "RECEIVE_FILES";
export const RECEIVE_SEARCH_TERM = "RECEIVE_SEARCH_TERM";
export const CLEAR_FILTERS = "CLEAR_FILTERS";
export const REMOVE_FILE = "REMOVE_FILE";
export const RECEIVE_FILE_ERRORS = "RECEIVE_FILE_ERRORS";
export const REMOVE_FILE_ERRORS = "REMOVE_FILE_ERRORS";
export const RECEIVE_NEW_FILE = "RECEIVE_NEW_FILE";
export const RECEIVE_UPDATED_FILE = "RECEIVE_UPDATED_FILE";

export const receiveFiles = (files) => ({
  type: RECEIVE_FILES,
  files: files.data,
});

export const receiveNewFile = (file) => ({
  type: RECEIVE_NEW_FILE,
  file: file.data,
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

export const receiveFileErrors = (errors) => ({
  type: RECEIVE_FILE_ERRORS,
  errors,
});

export const removeFileErrors = () => ({
  type: REMOVE_FILE_ERRORS,
});
export const receiveUpdatedFile = (file) => ({
  type: RECEIVE_UPDATED_FILE,
  file: file.data,
});

export const newFile = (data) => (dispatch) =>
  createFile(data)
    .then((file) => {
      dispatch(receiveNewFile(file));
    })
    .catch((err) => {
      dispatch(receiveFileErrors(err.response.data));
      throw err;
    });

export const fetchFiles = () => (dispatch) =>
  getAllFiles()
    .then((files) => {
      dispatch(removeFileErrors());
      dispatch(receiveFiles(files));
    })
    .catch((err) => {
      dispatch(receiveFileErrors(err.response.data));
      throw err;
    });

export const fetchFolder = (folderId) => (dispatch) =>
  getFolder(folderId)
    .then((files) => {
      dispatch(removeFileErrors());
      dispatch(receiveFiles(files));
    })
    .catch((err) => {
      dispatch(receiveFileErrors(err.response.data));
      throw err;
    });

export const wipeFile = (fileId, fileKey) => (dispatch) =>
  deleteFile(fileId, fileKey)
    .then((file) => {
      dispatch(removeFileErrors());
      dispatch(removeFile(file));
    })
    .catch((err) => {
      dispatch(receiveFileErrors(err.response.data));
      throw err;
    });

export const modifyFile = (fileData, fileId) => (dispatch) =>
  updateFile(fileData, fileId)
    .then((file) => dispatch(receiveUpdatedFile(file)))
    .catch((err) => {
      dispatch(receiveFileErrors(err.response.data));
      throw err;
    });
