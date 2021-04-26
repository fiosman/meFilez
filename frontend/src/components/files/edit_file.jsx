import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";
import Button from "react-bootstrap/Button";
import { useDispatch, useSelector } from "react-redux";
import { modifyFile, removeFileErrors } from "../../actions/file_actions";
import { withRouter } from "react-router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit } from "@fortawesome/free-solid-svg-icons";

function EditFile(props) {
  const [editFileOpen, setEditFileOpen] = useState(false);
  const [fileName, setFileName] = useState("");

  const { errors } = useSelector((state) => state);

  const dispatch = useDispatch();

  function showEditFile() {
    setEditFileOpen(true);
  }

  function hideEditFile() {
    setEditFileOpen(false);
    if (errors.file.length > 0) return dispatch(removeFileErrors());
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
            {errors.file.length > 0 ? displayErrors() : ""}
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

  function displayErrors() {
    return (
      <ul>
        {errors.file.map((err, idx) => {
          return <li key={idx}>{err}</li>;
        })}
      </ul>
    );
  }

  function editFileName() {
    dispatch(modifyFile({ fileName: fileName }, props.fileId))
      .then((file) => {
        hideEditFile();
        setFileName("");
      })
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
