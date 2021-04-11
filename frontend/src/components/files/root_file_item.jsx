import { React, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchFiles } from "../../actions/file_actions";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFolder,
  faFile,
  faTrash,
  faFileDownload,
} from "@fortawesome/free-solid-svg-icons";
import Button from "react-bootstrap/Button";
import { withRouter } from "react-router";

function RootFileItem(props) {
  const {
    fileName,
    isFolder,
    createdAt,
    updatedAt,
    parentId,
    fileKey,
    ancestors,
    _id,
  } = props.file;

  function handleDelete() {}

  function handleDownload() {}

  function viewFolder() {
    props.history.push(`/files/${_id}`);
  }

  function viewFile() {}

  return (
    <tr className="item-row">
      <td>
        {isFolder ? (
          <span className="folder-item" onClick={viewFolder}>
            <FontAwesomeIcon className="folder-icon" icon={faFolder} /> &nbsp;
            {fileName}
          </span>
        ) : (
          <span className="file-item" onClick={viewFile}>
            <FontAwesomeIcon className="file-icon" icon={faFile} /> &nbsp;
            {fileName}
          </span>
        )}
      </td>
      <td>{new Date(createdAt).toLocaleString()}</td>
      <td>
        <FontAwesomeIcon
          className="delete-icon"
          icon={faTrash}
          onClick={handleDelete}
        />
        {isFolder ? (
          ""
        ) : (
          <FontAwesomeIcon
            className="download-icon"
            icon={faFileDownload}
            onClick={handleDownload}
          />
        )}
      </td>
    </tr>
  );
}

export default withRouter(RootFileItem);
