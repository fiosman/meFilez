import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { login, removeSessionErrors } from "../../actions/user_actions";
import { useDispatch } from "react-redux";

function LoginForm() {
  const [details, setDetails] = useState({
    email: "",
    password: "",
  });

  const dispatch = useDispatch();

  function handleChange(e) {
    setDetails((prevState) => {
      return { ...prevState, [e.target.name]: e.target.value };
    });
  }

  function handleSubmit(e) {
    e.preventDefault();
    dispatch(login(details));
  }

  return (
    <Form>
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
        Sign up
      </Button>
    </Form>
  );
}

export default LoginForm;
