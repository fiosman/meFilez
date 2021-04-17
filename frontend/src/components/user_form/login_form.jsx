import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { login } from "../../actions/user_actions";
import { useDispatch, useSelector } from "react-redux";
import Modal from "react-bootstrap/Modal";
import { withRouter } from "react-router";

function LoginForm(props) {
  const [details, setDetails] = useState({
    email: "",
    password: "",
  });

  const [isOpen, setIsOpen] = useState(false);

  const dispatch = useDispatch();
  const { errors } = useSelector((state) => state);

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

  function handleSubmit(e) {
    e.preventDefault();
    dispatch(login(details))
      .then((user) => props.history.push("/files"))
      .catch((err) => showModal());
  }

  function renderErrors() {
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
            <Modal.Title>Log in unsuccessful</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <ul>
              {errors.user.map((error, idx) => {
                return <li key={idx}>{error}</li>;
              })}
            </ul>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="custom" onClick={hideModal}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }

  return (
    <Form>
      {errors.user.length > 0 ? renderErrors() : ""}
      <Form.Group>
        <Form.Label>Email Address</Form.Label>
        <Form.Control
          type="email"
          placeholder="Enter email"
          name="email"
          onChange={handleChange}
          value={details.email}
        />
      </Form.Group>
      <Form.Group>
        <Form.Label>Please enter your password</Form.Label>
        <Form.Control
          type="password"
          placeholder="Password"
          name="password"
          onChange={handleChange}
          value={details.password}
        />
      </Form.Group>
      <Button onClick={handleSubmit} variant="custom" type="submit">
        Login
      </Button>
    </Form>
  );
}

export default withRouter(LoginForm);
