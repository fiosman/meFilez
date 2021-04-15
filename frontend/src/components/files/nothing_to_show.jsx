import React from "react";
import Button from "react-bootstrap/Button";
import { useSelector } from "react-redux";
import { withRouter } from "react-router";

function NothingToShow(props) {
  const { files } = useSelector((state) => state.entities);
  return (
    <div className="nothing-to-show">
      {files[0] !== undefined ? (
        <h3>Nothing to show here...</h3>
      ) : (
        <div className="nothing-to-show">
          <h3>Nothing to show here...</h3>
          {props.match.url === "/files" ? (
            ""
          ) : (
            <Button variant="custom" onClick={() => props.history.goBack()}>
              Go back
            </Button>
          )}
        </div>
      )}
    </div>
  );
}

export default withRouter(NothingToShow);
