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

  function createFolder() {
    
  }

  // const newFile = new File({
  //   owner: req.user,
  //   fileName: req.body.fileName,
  //   isFolder: req.body.isFolder,
  //   parentId: req.body.parentId,
  //   fileKey: req.file ? req.file.key : undefined,
  // });
  return (
    <div className="folder-upload-add">
      {props.match.url === "/files" ? (
        <div>
          <span className="add-folder" onClick={createFolder}>
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
