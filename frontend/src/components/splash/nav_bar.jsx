import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Image from "react-bootstrap/Image";
import Button from "react-bootstrap/Button";
import { useSelector } from "react-redux";

function MainHeader() {
  const { entities, session } = useSelector((state) => state);
  return (
    <Navbar bg="custom" variant="dark" className="nav-bar">
      <Navbar.Brand>
        <Image src="/logo.png" className="logo" /> Access your files anywhere,
        anytime.
      </Navbar.Brand>
      <Navbar.Toggle />
      <Navbar.Collapse className="justify-content-end">
        {session.id ? (
          <Navbar.Text className="current-user-label">
            Signed in as: <a>{entities.user[session.id].username}</a>
            <Button variant="custom">Sign out</Button>
          </Navbar.Text>
        ) : (
          ""
        )}
      </Navbar.Collapse>
    </Navbar>
  );
}

export default MainHeader;
