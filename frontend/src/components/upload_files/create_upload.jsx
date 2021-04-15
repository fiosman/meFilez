import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFolderPlus,
  faFileUpload,
  faArrowLeft,
} from "@fortawesome/free-solid-svg-icons";
import { withRouter } from "react-router";

function CreateUpload(props) {
  function goToPreviousPage() {
    return props.history.goBack();
  }
  return (
    <div className="folder-upload-add">
      {props.match.url === "/files" ? (
        <div>
          <span className="add-folder">
            <FontAwesomeIcon icon={faFolderPlus} />
          </span>
          <span className="upload-file">
            <FontAwesomeIcon icon={faFileUpload} />
          </span>
        </div>
      ) : (
        <div>
          <span className="previous-page">
            <FontAwesomeIcon icon={faArrowLeft} onClick={goToPreviousPage} />
          </span>
          <span className="add-folder">
            <FontAwesomeIcon icon={faFolderPlus} />
          </span>
          <span className="upload-file">
            <FontAwesomeIcon icon={faFileUpload} />
          </span>
        </div>
      )}
    </div>
  );
}

export default withRouter(CreateUpload);
