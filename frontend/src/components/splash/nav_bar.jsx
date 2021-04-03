import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Image from "react-bootstrap/Image";
import Button from "react-bootstrap/Button";

function MainHeader() {
  return (
    <Navbar bg="custom" variant="dark" className="nav-bar">
      <Navbar.Brand>
        <Image src="/logo.png" className="logo" /> Access your files anywhere,
        anytime.
      </Navbar.Brand>
      <Navbar.Toggle />
      <Navbar.Collapse className="justify-content-end">
        <Navbar.Text className="current-user-label">
          Signed in as: <a href="#login">Mark Otto</a>
          <Button variant="custom">Sign out</Button>
        </Navbar.Text>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default MainHeader;
