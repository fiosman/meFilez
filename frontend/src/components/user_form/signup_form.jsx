import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { signup, removeSessionErrors } from "../../actions/user_actions";
import { useDispatch, useSelector } from "react-redux";
import Modal from "react-bootstrap/Modal";
function SignUpForm() {
  const [details, setDetails] = useState({
    username: "",
    email: "",
    password: "",
    password2: "",
  });
  const [show, setShow] = useState(false);

  const dispatch = useDispatch();
  const { errors } = useSelector((state) => state);

  function handleChange(e) {
    setDetails((prevState) => {
      return { ...prevState, [e.target.name]: e.target.value };
    });
  }

  function handleClose() {
    setShow(false);
  }

  function handleShow() {
    setShow(true);
  }

  function handleSubmit(e) {
    e.preventDefault();
    dispatch(signup(details))
      .then((user) => console.log(user))
      .catch((err) => console.log(err));
  }

  function renderErrors() {
    // return (
    //   <ul>
    //     {errors.user.map((error, idx) => {
    //       return <li key={idx}>{error}</li>;
    //     })}
    //   </ul>
    // );

    return (
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
        centered
      >
        <Modal.Header>Hi</Modal.Header>
        <Modal.Body>asdfasdf</Modal.Body>
        <Modal.Footer>This is the footer</Modal.Footer>
      </Modal>
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

export default SignUpForm;
