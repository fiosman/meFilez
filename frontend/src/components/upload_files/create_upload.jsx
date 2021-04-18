import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFolderPlus,
  faFileUpload,
  faArrowLeft,
} from "@fortawesome/free-solid-svg-icons";
import { withRouter } from "react-router";
import { newFile } from "../../actions/file_actions";
import { useSelector, useDispatch } from "react-redux";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";

function CreateUpload(props) {
  const [isOpen, setIsOpen] = useState(false);
  const [details, setDetails] = useState({
    fileName: "",
    isFolder: null,
    parentId:
      props.match.params.fileId === undefined
        ? null
        : props.match.params.fileId,
  });

  const dispatch = useDispatch();

  function goToPreviousPage() {
    return props.history.goBack();
  }

  function showModal() {
    setIsOpen(true);
  }

  function hideModal() {
    setIsOpen(false);
  }

  function handleChange(e) {
    setDetails((prevState) => {
      return { ...prevState, [e.target.name]: e.target.value };
    });
  }

  function renderInput() {
    return (
      <>
        <Modal
          show={isOpen}
          onHide={hideModal}
          backdrop="static"
          keyboard={false}
          centered
          animation={false}
        >
          <Modal.Header closeButton>
            <Modal.Title>New Folder</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <InputGroup className="mb-3">
              <FormControl
                aria-label="Default"
                aria-describedby="inputGroup-sizing-default"
                placeholder="Enter folder name here..."
                name="fileName"
                value={details.fileName}
                onChange={handleChange}
              />
            </InputGroup>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="custom" onClick={createFolder}>
              Create Folder
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }

  function createFolder() {
    dispatch(newFile({ ...details, isFolder: true }))
      .then((file) => hideModal())
      .catch((err) => console.log(err));
  }

  function uploadFile() {
    console.log("something");
  }

  return (
    <div className="folder-upload-add">
      {renderInput()}
      {props.match.url === "/files" ? (
        <div>
          <span className="add-folder" onClick={showModal}>
            <FontAwesomeIcon icon={faFolderPlus} />
          </span>
          <span className="upload-file" onClick={uploadFile}>
            <FontAwesomeIcon icon={faFileUpload} />
          </span>
        </div>
      ) : (
        <div>
          <span className="previous-page">
            <FontAwesomeIcon icon={faArrowLeft} onClick={goToPreviousPage} />
          </span>
          <span className="add-folder" onClick={showModal}>
            <FontAwesomeIcon icon={faFolderPlus} />
          </span>
          <span className="upload-file" onClick={uploadFile}>
            <FontAwesomeIcon icon={faFileUpload} />
          </span>
        </div>
      )}
    </div>
  );
}

export default withRouter(CreateUpload);
