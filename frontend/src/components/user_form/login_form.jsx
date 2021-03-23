import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { login, removeSessionErrors } from "../../actions/user_actions";
import { useDispatch, useSelector } from "react-redux";

function LoginForm() {
  const [details, setDetails] = useState({
    email: "",
    password: "",
  });

  const dispatch = useDispatch();
  const { errors } = useSelector((state) => state);

  function handleChange(e) {
    setDetails((prevState) => {
      return { ...prevState, [e.target.name]: e.target.value };
    });
  }

  function handleSubmit(e) {
    e.preventDefault();
    dispatch(login(details));
  }

  function renderErrors() {
    return (
      <ul>
        {errors.user.map((error, idx) => {
          return <li key={idx}>{error}</li>;
        })}
      </ul>
    );
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
        Login
      </Button>
    </Form>
  );
}

export default LoginForm;
