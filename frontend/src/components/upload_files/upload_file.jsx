import React, { useState, useEffect } from "react";
import Modal from "react-bootstrap/Modal";
import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";
import Button from "react-bootstrap/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFileUpload } from "@fortawesome/free-solid-svg-icons";
import { useDispatch, useSelector } from "react-redux";
import { newFile, removeFileErrors } from "../../actions/file_actions";
import { withRouter } from "react-router";
import Form from "react-bootstrap/Form";
import bsCustomFileInput from "bs-custom-file-input";

function UploadFile(props) {
  const [fileModalOpen, setFileModalOpen] = useState(false);
  const [details, setDetails] = useState({
    fileName: "",
    isFolder: false,
    parentId: undefined,
    file: "",
  });

  useEffect(
    () =>
      setDetails((prevState) => {
        return {
          ...prevState,
          parentId: props.match.params.fileId,
        };
      }),
    [props.match.params.fileId]
  );

  useEffect(() => {
    bsCustomFileInput.init();
  });

  const { errors } = useSelector((state) => state);

  const dispatch = useDispatch();

  function showFileModal() {
    setFileModalOpen(true);
  }

  function hideFileModal() {
    setFileModalOpen(false);
    if (errors.file.length > 0) return dispatch(removeFileErrors());
  }

  function handleChange(e) {
    if (e.target.name === "fileName") {
      return setDetails((prevState) => {
        return { ...prevState, fileName: e.target.value };
      });
    }

    const file = e.target.files[0];
    const fileReader = new FileReader();

    fileReader.onloadend = () => {
      setDetails((prevState) => {
        return { ...prevState, file: file };
      });
    };

    if (file) {
      fileReader.readAsDataURL(file);
    }
  }

  function createFile() {
    const formData = new FormData();
    formData.append("file", details.file);
    formData.append("fileName", details.fileName);
    formData.append("isFolder", details.isFolder);

    if (props.match.params.fileId !== undefined) {
      formData.append("parentId", details.parentId);
    }

    dispatch(newFile(formData))
      .then((file) => {
        hideFileModal();
        setDetails((prevState) => {
          return { ...prevState, file: "", fileName: "" };
        });
      })
      .catch((err) => console.log(err));
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
                <Form.File
                  id="custom-file"
                  label="Choose file"
                  name="file"
                  custom
                  onChange={handleChange}
                />
              </Form>
            </InputGroup>
            {errors.file.length > 0 ? displayErrors() : ""}
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

  function displayErrors() {
    return (
      <ul>
        {errors.file.map((err, idx) => {
          return <li key={idx}>{err}</li>;
        })}
      </ul>
    );
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
