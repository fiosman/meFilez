import React, { useState, useEffect } from "react";
import Modal from "react-bootstrap/Modal";
import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";
import Button from "react-bootstrap/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFileUpload } from "@fortawesome/free-solid-svg-icons";
import { useDispatch } from "react-redux";
import { newFile } from "../../actions/file_actions";
import { withRouter } from "react-router";
import Form from "react-bootstrap/Form";
import bsCustomFileInput from "bs-custom-file-input";

function UploadFile(props) {
  const [fileModalOpen, setFileModalOpen] = useState(false);
  const [details, setDetails] = useState({
    fileName: "",
    isFolder: false,
    parentId:
      props.match.params.fileId === undefined
        ? null
        : props.match.params.fileId,
  });

  useEffect(() => {
    bsCustomFileInput.init();
  });

  function showFileModal() {
    setFileModalOpen(true);
  }

  const dispatch = useDispatch();

  function hideFileModal() {
    setFileModalOpen(false);
  }

  function handleChange(e) {
    setDetails((prevState) => {
      return { ...prevState, [e.target.name]: e.target.value };
    });
  }

  function renderFileModal() {
    return (
      <>
        <Modal
          show={fileModalOpen}
          onHide={hideFileModal}
          backdrop="static"
          keyboard={false}
          centered
          animation={false}
        >
          <Modal.Header closeButton>
            <Modal.Title>Upload a file</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <InputGroup className="mb-3">
              <FormControl
                placeholder="File name"
                name="fileName"
                value={details.fileName}
                onChange={handleChange}
                className="file-name-input"
              />
              <Form>
                <Form.File id="custom-file" label="Choose file" custom />
              </Form>
            </InputGroup>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="custom" onClick={createFile}>
              Upload File
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }

  function createFile() {
    console.log("test");
  }

  return (
    <div>
      {renderFileModal()}
      <span className="add-folder" onClick={showFileModal}>
        <FontAwesomeIcon icon={faFileUpload} />
      </span>
    </div>
  );
}

export default withRouter(UploadFile);
