import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

function LoginForm() {
  const [details, setDetails] = useState({
    username: "",
    email: "",
    password: "",
    password1: "",
  });

  function handleChange(e) {
    setDetails((prevState) => {
      return { ...prevState, [e.target.name]: e.target.value };
    });
  }

  function handleSubmit(e) {}

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
          name="password1"
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

export default LoginForm;
