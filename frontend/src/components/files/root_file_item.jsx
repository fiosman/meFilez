import { React, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchFiles } from "../../actions/file_actions";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFolder, faFile } from "@fortawesome/free-solid-svg-icons";
import Button from "react-bootstrap/Button";

function RootFileItem(props) {
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

  function viewFolder() {}

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
        <Button className="delete-btn" variant="custom" onClick={handleDelete}>
          Delete
        </Button>
        {isFolder ? (
          ""
        ) : (
          <Button
            className="download-btn"
            variant="custom"
            onClick={handleDownload}
          >
            Download
          </Button>
        )}
      </td>
    </tr>
  );
}

export default RootFileItem;
