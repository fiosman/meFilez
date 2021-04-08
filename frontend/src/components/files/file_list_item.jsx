import { React, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchFiles } from "../../actions/file_actions";

function FileListItem(props) {
  const {
    fileName,
    isFolder,
    createdAt,
    updatedAt,
    parentId,
    fileKey,
    ancestors,
  } = props.file;

  return (
    <tr>
      <td>{fileName}</td>
      <td>{createdAt}</td>
    </tr>
  );
}

export default FileListItem;
