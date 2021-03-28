import React from "react";
import SignUpForm from "../user_form/signup_form";
import Container from "react-bootstrap/Container";
import LoginForm from "../user_form/login_form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserPlus, faSignInAlt } from "@fortawesome/free-solid-svg-icons";

function Splash(props) {
  return (
    <div>
      <Container>
        <Row className="justify-content-md-center">
          <Col lg="5" className="signup-col">
            <h2 className="signup-label">
              <FontAwesomeIcon className="signup-icon" icon={faUserPlus} />
              <p className="signup-underline">{""}</p>
            </h2>
            <SignUpForm />
          </Col>
          <Col lg="5" className="login-col">
            <h2 className="signin-label">
              <FontAwesomeIcon className="signin-icon" icon={faSignInAlt} />
              <p className="signin-underline">{""}</p>
            </h2>
            <LoginForm />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Splash;
