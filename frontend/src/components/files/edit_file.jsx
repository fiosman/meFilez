import React, { useState, useEffect } from "react";
import Modal from "react-bootstrap/Modal";
import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";
import Button from "react-bootstrap/Button";
import { useDispatch } from "react-redux";
import { modifyFile } from "../../actions/file_actions";
import { withRouter } from "react-router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit } from "@fortawesome/free-solid-svg-icons";

function EditFile(props) {
  const [editFileOpen, setEditFileOpen] = useState(false);
  const [fileName, setFileName] = useState("");

  // useEffect(
  //   () =>
  //     setDetails((prevState) => {
  //       return { ...prevState, parentId: props.match.params.fileId };
  //     }),
  //   [props.match.params.fileId]
  // );

  const dispatch = useDispatch();

  function showEditFile() {
    setEditFileOpen(true);
  }

  function hideEditFile() {
    setEditFileOpen(false);
  }

  function handleChange(e) {
    setFileName(e.target.value);
  }

  function renderEditFileModal() {
    return (
      <>
        <Modal
          show={editFileOpen}
          onHide={hideEditFile}
          backdrop="static"
          keyboard={false}
          centered
          animation={false}
        >
          <Modal.Header closeButton>
            <Modal.Title>Edit</Modal.Title>
          </Modal.Header>
          <Modal.Body className="folder-input">
            <InputGroup className="mb-3">
              <FormControl
                placeholder="Enter new file name here..."
                name="fileName"
                value={fileName}
                onChange={handleChange}
              />
            </InputGroup>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="custom" onClick={editFileName}>
              Finish Editing
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }

  function editFileName() {
    dispatch(modifyFile({ fileName: fileName }, props.fileId))
      .then((file) => hideEditFile())
      .catch((err) => console.log(err));
  }

  return (
    <div>
      {renderEditFileModal()}
      <span onClick={showEditFile}>
        <FontAwesomeIcon className="edit-icon" icon={faEdit} />
      </span>
    </div>
  );
}

export default withRouter(EditFile);
