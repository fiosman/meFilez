import { React, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchFiles } from "../../actions/file_actions";

function FileListItem(props) {
  // const dispatch = useDispatch();

  // const { files } = useSelector((state) => state.entities);

  // useEffect(() => {
  //   dispatch(fetchFiles());
  // }, [dispatch]);

  console.log(props.file.fileName);
  return <h1>filezz</h1>;
}

export default FileListItem;
