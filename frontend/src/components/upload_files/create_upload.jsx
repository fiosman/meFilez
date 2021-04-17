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

  const dispatch = useDispatch();
  const { session } = useSelector((state) => state);

  function goToPreviousPage() {
    return props.history.goBack();
  }

  function showModal() {
    setIsOpen(true);
  }

  function hideModal() {
    setIsOpen(false);
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
    hideModal();
  }

  return (
    <div className="folder-upload-add">
      {props.match.url === "/files" ? (
        <div>
          <span className="add-folder" onClick={showModal}>
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
      {renderInput()}
    </div>
  );
}

export default withRouter(CreateUpload);
