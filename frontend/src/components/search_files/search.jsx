import React, { useState, useEffect } from "react";
import FormControl from "react-bootstrap/FormControl";
import { useDispatch } from "react-redux";
import { receiveSearchedFiles } from "../../actions/file_actions";

function Search() {
  const [searchTerm, setSearchTerm] = useState("");

  const dispatch = useDispatch();

  function handleChange(e) {
    return setSearchTerm(e.target.value);
  }

  useEffect(() => {
    dispatch(receiveSearchedFiles(searchTerm));
  }, [searchTerm, dispatch]);

  return (
    <div className="search-bar">
      <FormControl
        type="text"
        placeholder="Search..."
        onChange={handleChange}
        value={searchTerm}
      />
    </div>
  );
}

export default Search;
