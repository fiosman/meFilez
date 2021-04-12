import React from "react";
import Button from "react-bootstrap/Button";
import { withRouter } from "react-router";
import { useSelector, useDispatch } from "react-redux";
import { clearFilters } from "../../actions/file_actions";

function NothingToShow(props) {
  const { search } = useSelector((state) => state.filters);
  const dispatch = useDispatch();

  return (
    <div className="nothing-to-show">
      <h3>Nothing to show here...</h3>
      {search !== "" ? (
        <Button variant="custom" onClick={() => dispatch(clearFilters())}>
          Clear Filters
        </Button>
      ) : (
        <Button onClick={() => props.history.goBack()} variant="custom">
          Go Back
        </Button>
      )}
    </div>
  );
}

export default withRouter(NothingToShow);
