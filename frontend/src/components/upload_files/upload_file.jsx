import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";
import Button from "react-bootstrap/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFileUpload } from "@fortawesome/free-solid-svg-icons";
import { useDispatch } from "react-redux";
import { newFile } from "../../actions/file_actions";
import { withRouter } from "react-router";

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
            <Button variant="custom" onClick={createFile}>
              Create Folder
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }

  function createFile() {
    // dispatch(newFile({ ...details, isFolder: true }))
    //   .then((file) => hideFolderModal())
    //   .catch((err) => console.log(err));
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
