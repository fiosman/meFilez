import { getAllFiles } from "../util/file_util";
export const RECEIVE_FILES = "RECEIVE_FILES";

export const receiveFiles = (files) => ({
  type: RECEIVE_FILES,
  files,
});

export const fetchFiles = () => (dispatch) => {
  getAllFiles()
    .then((files) => dispatch(receiveFiles(files)))
    .catch((err) => console.log(err));
};
