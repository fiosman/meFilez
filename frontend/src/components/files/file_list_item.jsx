import { React, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchFiles } from "../../actions/file_actions";

function FileListItem(props) {
  // const dispatch = useDispatch();
  console.log(props);
  const { fileName } = props;

  // const { files } = useSelector((state) => state.entities);

  // useEffect(() => {
  //   dispatch(fetchFiles());
  // }, [dispatch]);

  return;
}

export default FileListItem;
