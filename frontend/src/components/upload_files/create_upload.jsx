import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { withRouter } from "react-router";
import CreateFolder from "./create_folder";
import UploadFile from "./upload_file";

function CreateUpload(props) {
  function goToPreviousPage() {
    return props.history.goBack();
  }

  return (
    <div>
      {props.match.url === "/files" ? (
        <div className="folder-upload-add">
          <CreateFolder />
          <UploadFile />
        </div>
      ) : (
        <div className="folder-upload-add">
          <span className="previous-page">
            <FontAwesomeIcon icon={faArrowLeft} onClick={goToPreviousPage} />
          </span>
          <CreateFolder />
          <UploadFile />
        </div>
      )}
    </div>
  );
}

export default withRouter(CreateUpload);
