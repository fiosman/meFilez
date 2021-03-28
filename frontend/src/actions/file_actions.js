import { getAllfiles } from "../util/file_util";
const RECEIVE_FILES = "RECEIVE_FILES";

export const receiveFiles = (files) => ({
  type: RECEIVE_FILES,
  files,
});

export const fetchFiles = () => (dispatch) => {
  getAllfiles()
    .then((files) => dispatch(receiveFiles(files)))
    .catch((err) => console.log(err));
};
