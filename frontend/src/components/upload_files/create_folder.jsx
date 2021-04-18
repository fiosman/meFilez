import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";
import Button from "react-bootstrap/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFolderPlus } from "@fortawesome/free-solid-svg-icons";
import { useDispatch } from "react-redux";
import { newFile } from "../../actions/file_actions";
import { withRouter } from "react-router";

function CreateFolder(props) {
  const [folderModalOpen, setFolderModalOpen] = useState(false);
  const [details, setDetails] = useState({
    fileName: "",
    isFolder: null,
    parentId:
      props.match.params.fileId === undefined
        ? null
        : props.match.params.fileId,
  });
  function showFolderModal() {
    setFolderModalOpen(true);
  }

  const dispatch = useDispatch();

  function hideFolderModal() {
    setFolderModalOpen(false);
  }

  function handleChange(e) {
    setDetails((prevState) => {
      return { ...prevState, [e.target.name]: e.target.value };
    });
  }

  function renderFolderModal() {
    return (
      <>
        <Modal
          show={folderModalOpen}
          onHide={hideFolderModal}
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
      .then((file) => hideFolderModal())
      .catch((err) => console.log(err));
  }

  return (
    <div>
      {renderFolderModal()}
      <span className="add-folder" onClick={showFolderModal}>
        <FontAwesomeIcon icon={faFolderPlus} />
      </span>
    </div>
  );
}

export default withRouter(CreateFolder);
