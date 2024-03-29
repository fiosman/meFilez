import { React } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFolder, faFile, faTrash } from "@fortawesome/free-solid-svg-icons";
import { withRouter } from "react-router";
import { useDispatch } from "react-redux";
import { wipeFile } from "../../actions/file_actions";
import EditFile from "./edit_file";

function RootFileItem(props) {
  const { fileName, isFolder, createdAt, _id, fileKey } = props.file;

  const dispatch = useDispatch();

  function handleDelete() {
    return dispatch(wipeFile(_id, fileKey));
  }

  function viewFolder() {
    props.history.push(`/files/${_id}`);
  }

  function viewFile() {
    return window.open(
      `https://mefilez-pro.s3.us-east-2.amazonaws.com/${fileKey}`
    );
  }

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
      <td className="action-icons">
        <FontAwesomeIcon
          className="delete-icon"
          icon={faTrash}
          onClick={handleDelete}
        />
        <EditFile fileId={_id} />
      </td>
    </tr>
  );
}

export default withRouter(RootFileItem);
