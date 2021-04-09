import { React, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchFiles } from "../../actions/file_actions";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFolder, faFile } from "@fortawesome/free-solid-svg-icons";

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
      <td>
        {isFolder ? (
          <span>
            <FontAwesomeIcon className="folder-icon" icon={faFolder} /> &nbsp;
            {fileName}
          </span>
        ) : (
          <span>
            <FontAwesomeIcon className="file-icon" icon={faFile} /> &nbsp;
            {fileName}
          </span>
        )}
      </td>
      <td>{createdAt}</td>
    </tr>
  );
}

export default FileListItem;
