import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFolderPlus, faFileUpload } from "@fortawesome/free-solid-svg-icons";

function CreateUpload() {
  return (
    <div className="folder-upload-add">
      <span className="add-folder">
        <FontAwesomeIcon icon={faFolderPlus} />
      </span>
      <span className="upload-file">
        <FontAwesomeIcon icon={faFileUpload} />
      </span>
    </div>
  );
}

export default CreateUpload;
