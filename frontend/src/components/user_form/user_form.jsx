import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { useState } from "react";

function UserForm() {
  const [userInfo, setUserInfo] = useState({
    username: "",
    email: "",
    password: "",
    password1: "",
  });

  function handleChange(e) {}

  function handleSubmit(e) {}

  return (
    <Form>
      <Form.Group>
        <Form.Label>Email Address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
      </Form.Group>
      <Form.Group>
        <Form.Label>Username</Form.Label>
        <Form.Control type="text" placeholder="Username" />
      </Form.Group>
      <Form.Group>
        <Form.Label>Please enter your password</Form.Label>
        <Form.Control type="password" placeholder="Password" />
        <Form.Label>Please enter your password again</Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>
    </Form>
  );
}

export default UserForm;
