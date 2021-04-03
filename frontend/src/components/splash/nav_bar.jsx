import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Image from "react-bootstrap/Image";

function MainHeader() {
  return (
    <Navbar bg="custom" variant="dark" className="nav-bar">
      <Navbar.Brand>
        <Image src="/logo.png" width="140px" height="110px" /> Access your files
        anywhere, anytime.
      </Navbar.Brand>
      <Navbar.Toggle />
      <Navbar.Collapse className="justify-content-end">
        <Navbar.Text>
          Signed in as: <a href="#login">Mark Otto</a>
        </Navbar.Text>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default MainHeader;
