import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { signup } from "../../actions/user_actions";
import { useDispatch, useSelector } from "react-redux";
import { withRouter } from "react-router";
import Modal from "react-bootstrap/Modal";

function SignUpForm(props) {
  const [details, setDetails] = useState({
    username: "",
    email: "",
    password: "",
    password2: "",
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
    dispatch(signup(details))
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
            <Modal.Title>Registeration unsuccessful</Modal.Title>
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
        <Form.Label>Username</Form.Label>
        <Form.Control
          type="text"
          placeholder="Username"
          name="username"
          onChange={handleChange}
          value={details.username}
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
        <Form.Label>Please enter your password again</Form.Label>
        <Form.Control
          type="password"
          placeholder="Password"
          name="password2"
          onChange={handleChange}
          valaue={details.password1}
        />
      </Form.Group>
      <Button onClick={handleSubmit} variant="custom" type="submit">
        Sign up
      </Button>
    </Form>
  );
}

export default withRouter(SignUpForm);
