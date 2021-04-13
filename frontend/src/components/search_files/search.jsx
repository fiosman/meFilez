import React, { useState, useEffect } from "react";
import FormControl from "react-bootstrap/FormControl";
import { useDispatch, useSelector } from "react-redux";
import { receiveSearchTerm } from "../../actions/file_actions";
import Button from "react-bootstrap/Button";
import { clearFilters } from "../../actions/file_actions";

function Search() {
  const [searchTerm, setSearchTerm] = useState(
    useSelector((state) => state.filters.search)
  );

  const dispatch = useDispatch();

  function handleChange(e) {
    setSearchTerm(e.target.value);
  }

  function handleClearFilters(e) {
    dispatch(clearFilters());
    setSearchTerm("");
  }

  useEffect(() => {
    dispatch(receiveSearchTerm(searchTerm));
  }, [searchTerm, dispatch]);

  return (
    <div className="search-container">
      <FormControl
        className="search-box"
        type="text"
        placeholder="Search..."
        onChange={handleChange}
        value={searchTerm}
      />
      <Button
        className="clear-filters"
        variant="custom"
        onClick={handleClearFilters}
      >
        Clear Filters
      </Button>
    </div>
  );
}

export default Search;
