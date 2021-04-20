import React, { useState, useEffect } from "react";
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
    isFolder: true,
    parentId: "",
  });

  useEffect(
    () =>
      setDetails((prevState) => {
        return { ...prevState, parentId: props.match.params.fileId };
      }),
    [props.match.params.fileId]
  );

  const dispatch = useDispatch();

  function showFolderModal() {
    setFolderModalOpen(true);
  }

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
          <Modal.Body className="folder-input">
            <InputGroup className="mb-3">
              <FormControl
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
    console.log(details);
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
