import { React, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchFiles } from "../../actions/file_actions";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFolder, faFile } from "@fortawesome/free-solid-svg-icons";
import Button from "react-bootstrap/Button";

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

  function handleDelete() {}

  function handleDownload() {}

  return (
    <tr className="item-row">
      <td>
        {isFolder ? (
          <span className="folder-item">
            <FontAwesomeIcon className="folder-icon" icon={faFolder} /> &nbsp;
            {fileName}
          </span>
        ) : (
          <span className="file-item">
            <FontAwesomeIcon className="file-icon" icon={faFile} /> &nbsp;
            {fileName}
          </span>
        )}
      </td>
      <td>{new Date(createdAt).toLocaleString()}</td>
      <td>
        <Button className="delete-btn" variant="custom" onClick={handleDelete}>
          Delete
        </Button>
        <Button
          className="download-btn"
          variant="custom"
          onClick={handleDownload}
        >
          Download
        </Button>
      </td>
    </tr>
  );
}

export default FileListItem;
