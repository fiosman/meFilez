import React, { useState, useEffect } from "react";
import FormControl from "react-bootstrap/FormControl";
import { useDispatch, useSelector } from "react-redux";
import { receiveSearchTerm } from "../../actions/file_actions";

function Search() {
  const [searchTerm, setSearchTerm] = useState(
    useSelector((state) => state.filters.search)
  );

  const dispatch = useDispatch();

  function handleChange(e) {
    return setSearchTerm(e.target.value);
  }

  useEffect(() => {
    dispatch(receiveSearchTerm(searchTerm));
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
