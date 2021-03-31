import { React, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchFiles } from "../../actions/file_actions";

function FileListItem() {
  const dispatch = useDispatch();

  const { files } = useSelector((state) => state.entities);

  useEffect(() => {
    dispatch(fetchFiles());
  }, [dispatch]);

  return (
    <div>
      <p>does this work</p>
    </div>
  );
}

export default FileListItem;
