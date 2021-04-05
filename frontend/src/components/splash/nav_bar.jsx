import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Image from "react-bootstrap/Image";
import Button from "react-bootstrap/Button";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../../actions/user_actions";
import { withRouter } from "react-router";

function MainHeader(props) {
  const dispatch = useDispatch();
  const { entities, session } = useSelector((state) => state);

  function handleSignout() {
    return dispatch(logout()).then(() => props.history.push("/"));
  }

  return (
    <Navbar bg="custom" variant="dark" className="nav-bar">
      <Navbar.Brand>
        <Image src="/logo.png" className="logo" /> Access your files anywhere,
        anytime.
      </Navbar.Brand>
      <Navbar.Toggle />
      <Navbar.Collapse className="justify-content-end">
        {session.signedIn ? (
          <Navbar.Text className="current-user-label">
            Signed in as: <a href="/">{entities.user[session.id].username}</a>
            <Button variant="custom" onClick={handleSignout}>
              Sign out
            </Button>
          </Navbar.Text>
        ) : (
          ""
        )}
      </Navbar.Collapse>
    </Navbar>
  );
}

export default withRouter(MainHeader);
